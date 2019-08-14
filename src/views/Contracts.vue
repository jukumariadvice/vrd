<template>
  <div class="jumbotron bg-light">
    <!--<p class="lead" v-text="'Obras contratadas por el Gobierno Autonomo Departamental de La Paz'"></p>-->
    <div id="works"></div>
    <h3 class="display-6 text-center" v-text="countContracts+' Obras'"></h3>
    <!--<span class="badge badge-primary mr-1">Enero</span>
    <span class="badge badge-primary mr-1">Febrero</span>
    <span class="badge badge-primary">Marzo</span>-->
    <h2 class="display-5 text-center">Enero + Febrero + Marzo = {{totalCost | currency("Bs. ")}}</h2>
    <h2
      class="display-5 text-center"
    >Obras contratadas por el Gobierno Autonomo Departamental de La Paz</h2>
    <b-row class="about">
      <b-col cols="12" md="6" class="text-center mt-1" v-if="!loading">
        <span
          class="badge badge-primary"
          variant="primary"
          :key="contract[0].contract_id"
          v-for="(contract,name,index) in contractsGroupByCompany"
          v-text="contract[0].company_name"
          v-bind:style="{ backgroundColor: contractsGroupByCompanyOnlyColors[index],
          color:'#424242'}"
        ></span>
      </b-col>
      <b-col cols="12" md="6" class="mt-1" v-if="!loading">
        <graph-treemap
          :width="400"
          :height="400"
          :padding-top="0"
          :padding-right="0"
          :padding-bottom="0"
          :padding-left="0"
          :text-align="'right'"
          :text-vertical-align="'bottom'"
          :colors="contractsGroupByCompanyOnlyColors"
          :values="contractsGroupByCompany|treemap"
        >
          <!--<note :text="'Treemap Chart'" :align="'left'"></note>-->
          <tooltip :position="'top'"></tooltip>
        </graph-treemap>
      </b-col>
      <b-col cols="12" md="7" class="text-center mt-3">
        <!--<GmapMap
          :center="center"
          :zoom="zoom"
          map-type-id="terrain"
          style="width: 100%; height: 350px"
          ref="mapRef"
        >
          <GmapMarker
            :key="index"
            v-for="(contract, index) in contracts"
            :title="contract.title"
            :position="contract.milestones|position"
            :clickable="true"
            :draggable="false"
            @click="displayInfo(contract);"
          />
        </GmapMap>-->
        <l-map style="height: 400px; width: 100%" :zoom="osm.zoom" :center="osm.center" ref="map">
          <l-tile-layer :url="osm.url" :attribution="osm.attribution"></l-tile-layer>
          <l-marker
            :key="index"
            v-for="(contract, index) in contractsWithoutEmptyMilestones"
            :lat-lng="contract.milestones|osmarker"
            @click="reposition(contract)"
          >
            <l-tooltip>{{contract.title}}</l-tooltip>
          </l-marker>

          <!--<l-marker :lat-lng="osm.markerLatLng" @click="reposition('xyz')">
            <l-tooltip>Hello!</l-tooltip>
          </l-marker>-->
        </l-map>
      </b-col>
      <b-col cols="12" md="5" class="text-center">
        <card-map :contract="currentContract" v-if="currentContract" />
      </b-col>
    </b-row>
    <div id="top-contracts"></div>
    <h1 class="text-center">Top 10 Empresas con mas Contratos</h1>
    <b-row class="mt-md-1" v-if="!loading">
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
    <div id="downloads"></div>
    <h1 class="text-center">Descargar los datos</h1>
    <b-row>
      <b-col cols="12">
        <div class="text-center">
          <b-button class="mr-1" :href="'docs/data.xlsx'">.xls</b-button>
          <b-button class="mr-1" :href="'docs/data.pdf'">.pdf</b-button>
          <b-button class="mr-1" :href="'docs/data.csv'">.csv</b-button>
        </div>
      </b-col>
    </b-row>
    <div id="tools"></div>
    <h1 class="text-center">Herramientas</h1>
    <b-row>
      <b-col cols="12">
        <div class="text-center">
          <b-button class="mr-1" href>Google Charts</b-button>
          <b-button class="mr-1" href>Chart.js</b-button>
          <b-button class="mr-1" href>Vue.js</b-button>
        </div>
      </b-col>
    </b-row>
    <div id="information"></div>
    <h1 class="text-center">Informacion</h1>
    <p class="text-center">
      Los datos fueron extraidos del:
      <a href="https://www.sicoes.gob.bo/portal/index.php">SICOES</a>
    </p>
    <p
      class="text-center"
    >El sistema de contratraciones del Estado Plurinacional de Bolivia para completar el ODCS5</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Vue2Filters from "vue2-filters";
import CardMap from "@/components/CardMap";

export default {
  mixins: [Vue2Filters.mixin],
  mounted() {
    this.markers = [
      {
        title: "Marker 1",
        position: {
          lat: -16.2311,
          lng: -68.9303
        }
      },
      {
        title: "Marker 2",
        position: {
          lat: -16.211222,
          lng: -68.9203
        }
      },
      {
        title: "Marker 3",
        position: {
          lat: -16.5134022,
          lng: -68.1265506
        }
      }
    ];
    this.fetchContracts();

    this.$nextTick(() => {
      this.osm.map = this.$refs.map.mapObject;
      //L.tileLayer.provider("Stamen.Toner").addTo(this.osm.map);
    });
  },
  components: {
    CardMap
  },
  data() {
    return {
      zoom: 13,
      markers: [],
      center: { lat: -16.4957409, lng: -68.1356726 },
      currentContract: null,
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
      },
      values: [
        ["0", "Apples", -1],
        ["0.0", "Anne", 5],
        ["0.1", "Rick", 3],
        ["0.2", "Peter", 4],
        ["1", "Bananas", -1],
        ["1.0", "Anne", 4],
        ["1.1", "Rick", 10],
        ["1.2", "Peter", 1],
        ["2", "Oranges", -1],
        ["2.0", "Anne", 1],
        ["2.1", "Rick", 3],
        ["2.2", "Peter", 3],
        ["2.3", "Jane", 3],
        ["3", "Curtain", -1],
        ["3.0", "Anne", 1],
        ["3.1", "Rick", 3],
        ["3.2", "Peter", 3],
        ["3.3", "Jane", 3],
        ["4", "Cake", -1],
        ["4.0", "Mary", 5],
        ["5", "Susanne", 2]
      ],
      colorsTree: [
        "#EC2500",
        "#ECE100",
        "#EC9800",
        "#9EDE00",
        "#FF0000",
        "#00FF00"
      ],
      osm: {
        /*"http://{s}.tile.osm.org/{z}/{x}/{y}.png",*/
        url:
          "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

        zoom: 14,
        center: [-16.4957409, -68.1356726],
        /*center: [47.41322, -1.219482],*/
        markerLatLng: [47.31322, -1.319482],
        visible: true,
        map: null
      }
    };
  },
  methods: {
    displayInfo(contract) {
      const splitData = contract.milestones.split(",");
      this.center = {
        lat: parseFloat(splitData[0]) + Math.random() * 0.0001,
        lng: parseFloat(splitData[1]) + Math.random() * 0.0001
      };
      this.zoom = 18 + Math.random() * 0.0001;
      this.currentContract = contract;
    },
    ...mapActions("contracts", ["fetchContracts"]),
    reposition(contract) {
      const splitData = contract.milestones.split(",");
      this.osm.zoom = 20;
      this.osm.center = [
        parseFloat(splitData[0]) + Math.random() * 0.0001,
        parseFloat(splitData[1]) + Math.random() * 0.0001
      ];
      this.currentContract = contract;
    }
  },
  computed: {
    ...mapState("contracts", ["contracts"]),
    ...mapState(["loading"]),
    ...mapGetters("contracts", [
      "totalCost",
      "sumByAmount",
      "countContracts",
      "onlyLabels",
      "onlySubtotal",
      "contractsGroupByCompany",
      "contractsGroupByCompanyOnlyColors",
      "contractsWithoutEmptyMilestones"
    ])
  }
};
</script>
