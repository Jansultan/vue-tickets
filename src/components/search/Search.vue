<template>
  <div class="container">
    <Sidebar :tickets="airlines" />
    <TicketsList :tickets_list="tickets" />
    <div class="block-fixed">
      <div class="block-fixed__buttons">
        <button @click="openModal">Фильтры</button>
      </div>
    </div>
    <Modal v-if="isModalOpen" :tickets="airlines" @close="isModalOpen = false" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Sidebar from "../main/Sidebar";
import TicketsList from "../main/TicketsList";
import Modal from "../modal/Modal";

export default {
  components: { Sidebar, TicketsList, Modal },
  data() {
    return {
      isModalOpen: false,
    };
  },
  computed: {
    ...mapGetters(["filteredList", "getAirlines"]),
    tickets() {
      // console.log(this.filteredList);
      return this.filteredList;
    },
    airlines() {
      return this.getAirlines;
    },
  },
  methods: {
    ...mapActions(["loadTickets"]),
    openModal() {
      this.isModalOpen = true;
    },
  },
  async mounted() {
    this.loadTickets(1000);
  },
};
</script>

<style lang="scss" scoped>
//flexbox
@mixin disflex() {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

@mixin flex-col() {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

@mixin align_items_cent() {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@mixin justify_content_cent() {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

@mixin justify_content_start() {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

@mixin justify_content_sp_between() {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@mixin text($style, $weithg, $size, $height, $spacing, $color) {
  font-family: "Open Sans";
  font-style: $style;
  font-weight: $weithg;
  font-size: $size;
  line-height: $height;
  letter-spacing: $spacing;
  color: $color;
}
.container {
  width: 1140px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  .block-fixed {
    position: fixed;
    bottom: 10px;
    width: 100%;
    display: none;
    left: 0;
    right: 0;
    &__buttons {
      width: auto;
      white-space: nowrap;
      button {
        background-color: #707276;
        border-radius: 24px;
        border: 1px solid #707276;
        @include text(normal, normal, 16px, 22px, none, #ffffff);
        padding: 8px 12px;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 1172px) {
  .container {
    width: auto;
    padding: 0 16px;
  }
}
@media screen and (max-width: 946px) {
  .container {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    .block-fixed {
      @include disflex();
      @include justify_content_cent();
    }
  }
}
</style>
