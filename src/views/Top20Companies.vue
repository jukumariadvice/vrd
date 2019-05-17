<template>
  <div class="home" v-if="!loading">
    <b-jumbotron
      :header="countContracts+' Obras'"
      lead="Gobierno Autonomo Departamental de La Paz"
      bg-variant="light"
    >
      <span class="badge badge-primary mr-1">Enero</span>
      <span class="badge badge-primary mr-1">Febrero</span>
      <span class="badge badge-primary">Marzo</span>
      <h4 class="mt-md-1">{{totalCost | currency("Bs. ")}}</h4>
      <b-row class="mt-md-1">
        <b-col cols="12" md="6" class="text-center">
          <chartjs-polar-area
            :height="500"
            :scalesdisplay="false"
            :labels="onlyLabels"
            :data="onlySubtotal"
            :backgroundcolor="backgroundcolor"
            :bordercolor="bordercolor"
            :option="myoption"
            :hoverbackgroundcolor="hoverbordercolor"
          ></chartjs-polar-area>
        </b-col>
        <b-col cols="12" md="6" class="text-center">
          <b-list-group>
            <b-list-group-item
              v-for="(contract,index) in limitBy(sumByAmount,20)"
              v-text="index+1+'. '+contract.companyName"
              :key="contract.companyName"
            ></b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  name: "Top20Companies",
  mounted() {
    this.fetchContracts();
  },
  data() {
    return {
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20"
      ],
      data: [
        100,
        40,
        60,
        200,
        100,
        40,
        60,
        200,
        100,
        40,
        60,
        200,
        100,
        40,
        60,
        205.5,
        100,
        40,
        60,
        200
      ],
      backgroundcolor: [
        "rgba(26,188,156,0.3)",
        "rgba(46,204,113,0.75)",
        "rgba(52,152,219,0.75)",
        "rgba(155,89,182,0.75)",
        "rgba(52,73,94,0.75)",
        "rgba(22,160,133,0.75)",
        "rgba(39,174,96,0.75)",
        "rgba(41,128,185,0.75)",
        "rgba(142,68,173,0.75)",
        "rgba(44,62,80,0.75)",
        "rgba(241,196,15,0.75)",
        "rgba(230,126,34,0.75)",
        "rgba(231,76,60,0.75)",
        "rgba(149,165,166,0.75)",
        "rgba(243,156,18,0.75)",
        "rgba(211,84,0,0.75)",
        "rgba(192,57,43,0.75)",
        "rgba(0,88,88,0.75)",
        "rgba(75,192,0,0.75)",
        "rgba(75,192,192,0.3)"
      ],
      bordercolor: [
        "rgba(255,255,255,0.1)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0)"
      ],
      hoverbordercolor: [
        "rgba(26,188,156,0.5)",
        "rgba(46,204,113,1)",
        "rgba(52,152,219,1)",
        "rgba(155,89,182,1)",
        "rgba(52,73,94,1)",
        "rgba(22,160,133,1)",
        "rgba(39,174,96,1)",
        "rgba(41,128,185,1)",
        "rgba(142,68,173,1)",
        "rgba(44,62,80,1)",
        "rgba(241,196,15,1)",
        "rgba(230,126,34,1)",
        "rgba(231,76,60,1)",
        "rgba(149,165,166,1)",
        "rgba(243,156,18,1)",
        "rgba(211,84,0,1)",
        "rgba(192,57,43,1)",
        "rgba(0,88,88,1)",
        "rgba(75,192,0,1)",
        "rgba(75,192,192,0.5)"
      ],
      myoption: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: true,
          position: "bottom",
          text: "En Bolivianos"
        },
        legend: {
          display: true,
          position: "bottom"
        }
      }
    };
  },
  methods: {
    ...mapActions("contracts", ["fetchContracts"])
  },
  computed: {
    ...mapGetters("contracts", [
      "totalCost",
      "sumByAmount",
      "countContracts",
      "onlyLabels",
      "onlySubtotal"
    ]),
    ...mapState(["loading"])
  }
};
</script>
