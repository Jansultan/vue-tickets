<template>
  <div class="container">
    <Sidebar :tickets="airlines" />
    <TicketsList :tickets_list="tickets" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Sidebar from "../main/Sidebar";
import TicketsList from '../main/TicketsList'

export default {
  components: { Sidebar, TicketsList },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["filteredList", 'getAirlines']),
    tickets() {
      // console.log(this.filteredList);
      return this.filteredList;
    },
    airlines(){
      return this.getAirlines;
    }    
  },
  methods: {
    ...mapActions(["loadTickets"]),
    
  },
  async mounted() {
    this.loadTickets(1000);
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1140px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

@media screen and (max-width: 1172px) {
  .container {
    width: auto;
    padding: 0 16px;
  }
}
@media screen and (max-width: 946px){
.container {
   -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  }
}
</style>
