<template>
  <div class="sidebar-filter none">
    <div class="filter">
      <span class="filter_title">Опции тарифа</span>
      <label class="container-checkbox"
        >Только прямые
        <input
          type="checkbox"
          v-model="tariffs"
          @change="filterTariff($event, 1)"
          value="nonestop"
        />
        <span class="checkmark"></span>
      </label>
      <label class="container-checkbox"
        >Только с багажом
        <input
          type="checkbox"
          v-model="tariffs"
          @change="filterTariff($event, 2)"
          value="baggage"
        />
        <span class="checkmark"></span>
      </label>
      <label class="container-checkbox"
        >Только возвратные
        <input
          type="checkbox"
          v-model="tariffs"
          @change="filterTariff($event, 3)"
          value="refundable"
        />
        <span class="checkmark"></span>
      </label>
      <div
        class="filter-clear"
        v-if="tariffs.length > 0"
        @click="clearFilter('tariff')"
      >
        <div class="tooltip-clear">Сбросить выбор</div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z"
            fill="#B9B9B9"
          />
        </svg>
      </div>
    </div>
    <!-- <span>{{tickets}}</span> -->
    <div class="filter">
      <span class="filter_title">Авиакомпании</span>
      <div class="filter__comp">
        <label class="container-checkbox" @click.prevent="checkAll"
          >Все
          <input type="checkbox" v-model="filter_comp" value="all" />
          <span class="checkmark"></span>
        </label>
        <label
          class="container-checkbox"
          v-for="(airline, index) in tickets"
          :key="index"
          @click="filterComp"
          >{{ airline }}
          <input type="checkbox" v-model="filter_comp" :value="index" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div
        class="filter-clear"
        v-if="filter_comp.length == 0"
        @click="clearFilter('comp')"
      >
        <div class="tooltip-clear">Сбросить выбор</div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z"
            fill="#B9B9B9"
          />
        </svg>
      </div>
    </div>
    <span class="filter-clear__all" @click="clearAll"
      >Сбросить все фильтры</span
    >
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    tickets: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      tariffs: [],
      filter_tariff: {
        stops: false,
        baggage: false,
        refundable: false,
      },
      filter_comp: ["all"],
      tickets_list: [],
    };
  },
  methods: {
    ...mapMutations(["SET_DATA_TARIFF", "SET_DATA_COMP"]),
    filterTariff(event, index) {
      // console.log(event.target.checked);
      if (index === 1) {
        if (event.target.checked === true) {
          this.filter_tariff.stops = true;
          this.setDataTariff(index)
        } else {
          this.filter_tariff.stops = false;
          this.setDataTariff(index)
        }
      }

      if (index === 2) {
        if (event.target.checked === true) {
          this.filter_tariff.baggage = true;
          this.setDataTariff(index)
        } else {
          this.filter_tariff.baggage = false;
          this.setDataTariff(index)
        }
      }

      if (index === 3) {
        if (event.target.checked === true) {
          this.filter_tariff.refundable = true;
          this.setDataTariff(index)
        } else {
          this.filter_tariff.refundable = false;
          this.setDataTariff(index)
        }
      }
    },
    setDataTariff(index) {
      this.SET_DATA_TARIFF({
        data: this.filter_tariff,
        index: index,
      });
    },

    clearFilter(status) {
      if (status == "tariff") {
        this.tariffs = [];
        this.filter_tariff = {
          stops: false,
          baggage: false,
          refundable: false,
        };
       this.setDataTariff(1)
      } else if (status == "comp") {
        this.filter_comp = ["all"];
        this.SET_DATA_COMP({
          data: this.filter_comp,
          index: 0,
        });
      }
    },
    filterComp() {
      var vm = this;
      if (vm.filter_comp.includes("all")) {
        vm.filter_comp.splice(0, 1);
      }
      setTimeout(() => {
        // console.log(vm.filter_comp);
        this.setDataComp(0)
      }, 400);
    },
    setDataComp(index) {
      this.SET_DATA_COMP({
        data: this.filter_comp,
        index: index,
      });
    },
    checkAll() {
      if (this.filter_comp.includes("all")) {
        this.filter_comp = [];
        this.setDataComp(0)
      } else {
        this.filter_comp = ["all"];
        this.setDataComp(0)
      }
    },
    clearAll() {
      this.tariffs = [];
      this.filter_tariff = {
        stops: false,
        baggage: false,
        refundable: false,
      };
      this.filter_comp = ["all"];
      this.SET_DATA_COMP({
        data: this.filter_comp,
        index: 0,
      });
      this.setDataTariff(1)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/styles.scss";
</style>
