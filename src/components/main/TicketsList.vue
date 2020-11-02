<template>
  <transition-group class="main-block" name="main-block">
    <div
      class="main-block__group"
      v-for="(ticket, index) in tickets_list"
      :key="`key-${index}`"
    >
      <div class="block-info">
        <div class="info">
          <div class="comp">
            <img
              :src="
                'https://aviata.kz/static/airline-logos/80x80/' +
                  ticket.itineraries[0][0].segments[0].carrier +
                  '.png'
              "
              alt=""
            />
            <span>{{ ticket.itineraries[0][0].segments[0].carrier_name }}</span>
          </div>
          <div class="col">
            <div class="date-time">
              <span class="date">{{
                getDate(ticket.itineraries[0][0].segments[0].dep_time)
              }}</span>
              <span class="time">{{
                getTime(ticket.itineraries[0][0].segments[0].dep_time)
              }}</span>
            </div>
            <div class="time-range">
              <div class="sapce">
                <span class="text-gray10">{{
                  ticket.itineraries[0][0].segments[0].origin_code
                }}</span>
                <span class="text-black12">{{
                  formatTime(ticket.itineraries[0][0].traveltime)
                }}</span>
                <span class="text-gray10">{{
                  ticket.itineraries[0][0].segments[0].dest_code
                }}</span>
              </div>
              <div class="line-block">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <span
                class="text-orange12"
                v-if="ticket.itineraries[0][0].stops > 0"
                >через {{ ticket.itineraries[0][0].segments[0].dest }},
                {{ formatTime(ticket.itineraries[0][0].layovers[0]) }}
              </span>
              <span v-else class="text-green12">прямой рейс</span>
            </div>
            <div class="date-time" v-if="ticket.itineraries[0][0].stops > 0">
              <span class="date"
                >{{ getDate(ticket.itineraries[0][0].segments[1].arr_time)
                }}<!-- <span>+1</span> --></span
              >
              <span class="time">{{
                getTime(ticket.itineraries[0][0].segments[1].arr_time)
              }}</span>
            </div>
            <div class="date-time" v-else>
              <span class="date"
                >{{ getDate(ticket.itineraries[0][0].segments[0].arr_time)
                }}<!-- <span>+1</span> --></span
              >
              <span class="time">{{
                getTime(ticket.itineraries[0][0].segments[0].arr_time)
              }}</span>
            </div>
          </div>
        </div>
        <div class="info-2">
          <span class="text-dotted">Детали перелета</span>
          <span class="text-dotted">Условия тарифа</span>
          <span class="non-refundeble" v-if="!ticket.refundable">
            <img src="../../assets/icons/icon-non-refundeble.svg" alt="" />
            <span>невозвратный</span>
          </span>
        </div>
      </div>
      <div class="block-price">
        <span class="price"
          >{{ ticket.itineraries[0][0].price.amount }}
          {{ ticket.itineraries[0][0].price.currency }}</span
        >
        <button class="btn__green">Выбрать</button>
        <span class="text-gray">Цена за всех пассажиров</span>
        <div class="flex-block">
          <span>Нет багажа</span>
          <button>+ Добавить багаж</button>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  props: {
    tickets_list: {},
  },
  data() {
    return {};
  },
  methods: {
    getDate(val) {
      return val.slice(0, val.length - 5);
    },
    getTime(val) {
      return val.slice(val.length - 5, val.length);
    },
    formatTime(seconds) {
      const d = Math.floor(seconds / (60 * 60 * 24));
      const h = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
      const m = Math.floor(((seconds % (60 * 60 * 24)) % (60 * 60)) / 60);
      if(d != 0){
        return d + " д " + h + " ч " + m + " м";
      }else if(h != 0){
        return h + " ч " + m + " м";
      }else{
        return m + " м";
      }
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/styles.scss";
</style>
