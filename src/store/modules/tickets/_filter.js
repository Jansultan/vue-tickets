export function tariff(state, ticket) {
  if (
    state.filter_tariff.stops === true &&
    state.filter_tariff.baggage === true &&
    state.filter_tariff.refundable === true
  ) {
    if (
      ticket.itineraries[0][0].stops === 0 &&
      ticket.itineraries[0][0].segments[0].baggage_options[0].value > 0 &&
      ticket.itineraries[0][0].refundable === true
    ) {
      return ticket;
    }
  } else if (
    state.filter_tariff.stops === true &&
    state.filter_tariff.baggage === true
  ) {
    if (
      ticket.itineraries[0][0].stops === 0 &&
      ticket.itineraries[0][0].segments[0].baggage_options[0].value > 0
    ) {
      return ticket;
    }
  } else if (
    state.filter_tariff.stops === true &&
    state.filter_tariff.refundable === true
  ) {
    if (
      ticket.itineraries[0][0].stops === 0 &&
      ticket.itineraries[0][0].refundable === true
    ) {
      return ticket;
    }
  } else if (
    state.filter_tariff.baggage === true &&
    state.filter_tariff.refundable === true
  ) {
    if (
      ticket.itineraries[0][0].segments[0].baggage_options[0].value > 0 &&
      ticket.itineraries[0][0].refundable === true
    ) {
      return ticket;
    }
  } else {
    if (state.filter_tariff.stops === true) {
      if (ticket.itineraries[0][0].stops === 0) {
        return ticket;
      }
    }

    if (state.filter_tariff.baggage === true) {
      if (ticket.itineraries[0][0].segments[0].baggage_options[0].value > 0) {
        return ticket;
      }
    }
    if (state.filter_tariff.refundable === true) {
      if (ticket.itineraries[0][0].refundable === true) {
        return ticket;
      }
    }
  }
}
