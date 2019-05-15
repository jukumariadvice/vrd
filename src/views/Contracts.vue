<template>
  <b-row class="about">
    <b-col cols="12" md="7" class="text-center">
      <GmapMap
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
      </GmapMap>
    </b-col>
    <b-col cols="12" md="5" class="text-center">
      <b-card
        v-if="currentContract"
        :title="currentContract.title"
        :sub-title="currentContract.company_name"
        class="mr-md-3"
      >
        <b-card-text class="mb-0">
          <strong>NIT:</strong>
          <span class="ml-1" v-text="currentContract.nit"></span>
        </b-card-text>
        <b-card-text class="mb-0">
          <strong>FECHA FIRMADA:</strong>
          <span class="ml-1" v-text="currentContract.date_signed"></span>
        </b-card-text>
        <b-card-text class="mb-0">
          <strong>FECHA FINAL:</strong>
          <span class="ml-1" v-text="currentContract.end_date"></span>
        </b-card-text>
        <b-card-text class="mb-0">
          <strong>MONTO:</strong>
          <span class="ml-1" v-text="currentContract.amount+' '+currentContract.currency"></span>
        </b-card-text>
        <!--<a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>-->
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
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
  },
  data() {
    return {
      zoom: 13,
      markers: [],
      center: { lat: -16.4957409, lng: -68.1356726 },
      currentContract: null
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
    ...mapActions("contracts", ["fetchContracts"])
  },
  computed: {
    ...mapState("contracts", ["contracts"])
  }
};
</script>
