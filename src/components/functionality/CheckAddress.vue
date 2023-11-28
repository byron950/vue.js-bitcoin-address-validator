<template>
  <address-box></address-box>
  <the-output-field>
    <div v-if="addressFinal === 'valid'">
      <p>address is valid</p>
    </div>
    <div v-else-if="addressFinal === 'invalid'">
      <p>address is invalid</p>
    </div>
    <div v-else>
    </div>
  </the-output-field>
</template>

<script>
import TheOutputField from "../layout/TheOutputField.vue";

export default {
  data() {
    return {
      addressFinal: String
    };
  },
  components: { TheOutputField },
  methods: {
    checkAddress(address) {
      const mempoolUrl = `https://mempool.space/api/address/${address}`;
      fetch(mempoolUrl).then(response => response.json()).then(data => {
        console.log(data);
        this.addressFinal = 'valid';
        return address;
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        this.addressFinal = 'invalid';
      })
    },
  },
  provide() {
      return {
        checkAddress: this.checkAddress,
      };
    },
};
</script> 