<template>
  <b-card :title="contract.title" :sub-title="contract.company_name" class="mr-md-3">
    <b-card-text class="mb-0">
      <strong>NIT:</strong>
      <span class="ml-1" v-text="contract.nit"></span>
    </b-card-text>
    <b-card-text class="mb-0">
      <strong>FECHA FIRMADA:</strong>
      <span class="ml-1" v-text="contract.date_signed"></span>
    </b-card-text>
    <b-card-text class="mb-0">
      <strong>FECHA FINAL:</strong>
      <span class="ml-1" v-text="contract.end_date"></span>
    </b-card-text>
    <b-card-text class="mb-0">
      <strong>MONTO:</strong>
      <span class="ml-1" v-text="contract.amount+' '+contract.currency"></span>
    </b-card-text>

    <b-button class="mt-1" :href="'contracts/'+contract.number+'.pdf'">Descargar el contrato</b-button>
    <!--<a href="#" class="card-link">Card link</a>
    <b-link href="#" class="card-link">Another link</b-link>-->
  </b-card>
</template>

<script>
export default {
  props: {
    contract: {
      type: Object,
      required: true
    }
  }
};
</script>
