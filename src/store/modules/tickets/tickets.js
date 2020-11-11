import tickets from "../../../assets/json/results.json";
import { tariff } from "./_filter";

var filter_check = [];
const loadTickets = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tickets);
    }, time);
  });
};

export default {
  state: {
    tickets: [],
    filter: [],
    filter_tariff: {},
    filter_comp: ["all"],
    switch_filter: 0,
  },
  getters: {
    getTickets(state) {
      return state.tickets;
    },
    getAirlines(state) {
      return state.tickets.airlines;
    },
    getFilterList(state) {
      return state.filter;
    },
    filteredList(state) {
      if (state.switch_filter === 0) {
        if (
          state.filter_tariff.stops === true ||
          state.filter_tariff.baggage === true ||
          state.filter_tariff.refundable === true
        ) {
          filter_check = state.tickets.flights.filter((ticket) => {
            return tariff(state, ticket);
          });
        } else {
          filter_check = state.tickets.flights;
        }
        if (state.filter_comp[0] === "all") {
          return filter_check;
        } else if (state.tickets.length !== 0) {
          return filter_check.filter((ticket) => {
            if (state.filter_comp.length > 0) {
              if (
                state.filter_comp.includes(
                  ticket.itineraries[0][0].segments[0].carrier
                )
              ) {
                return ticket;
              }
            }
          });
        }
      } else {
        if (
          state.filter_tariff.stops === true ||
          state.filter_tariff.baggage === true ||
          state.filter_tariff.refundable === true
        ) {
          if (state.filter_comp[0] === "all") {
            filter_check = state.tickets.flights;
          } else if (state.tickets.length !== 0) {
            filter_check = state.tickets.flights.filter((ticket) => {
              if (state.filter_comp.length > 0) {
                if (
                  state.filter_comp.includes(
                    ticket.itineraries[0][0].segments[0].carrier
                  )
                ) {
                  return ticket;
                }
              }
            });
          }
          // console.log(state.filter_tariff);
          return filter_check.filter((ticket) => {
            return tariff(state, ticket);
          });
        } else {
          if (state.filter_comp[0] === "all") {
            return state.tickets.flights;
          } else if (state.tickets.length !== 0) {
            return state.tickets.flights.filter((ticket) => {
              if (state.filter_comp.length > 0) {
                if (
                  state.filter_comp.includes(
                    ticket.itineraries[0][0].segments[0].carrier
                  )
                ) {
                  return ticket;
                }
              }
            });
          }
        }
      }
      return state.tickets.flights;
    },
  },
  actions: {
    async loadTickets({ commit }, payload) {
      try {
        const data = await loadTickets(payload);
        commit("SET_TICKETS", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    SET_TICKETS(state, payload) {
      state.tickets = payload;
    },
    SET_DATA_TARIFF(state, payload) {
      // console.log(payload);
      state.filter_tariff = payload.data;
      state.switch_filter = payload.index;
    },
    SET_DATA_COMP(state, payload) {
      // console.log(payload);
      state.filter_comp = payload.data;
      state.switch_filter = payload.index;
    },
  },
};
