<template>
  <the-error-message
    v-if="inputIsBlank"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>
        Please enter an address. Blank input is not accepted.
      </p>
    </template>
    <template #actions>
      <the-button @click="confirmError" buttonText="OK"></the-button>
    </template>
  </the-error-message>
  <address-box></address-box>
  <the-output-field>
    <div v-if="addressFinal === 'valid'">
      <p>address is valid</p>
    </div>
    <div v-else-if="addressFinal === 'invalid'">
      <p>address is invalid</p>
    </div>
    <div v-else></div>
  </the-output-field>
</template>

<script>
import TheOutputField from "../layout/TheOutputField.vue";
import TheErrorMessage from "../ui/TheErrorMessage.vue";

export default {
  data() {
    return {
      addressFinal: String,
      inputIsBlank: false,
    };
  },
  components: { TheOutputField, TheErrorMessage },
  methods: {
    checkAddress(address) {
      if(
        address.trim() === ''
      ) {
        this.inputIsBlank = true;
        return;
      }
      const mempoolUrl = `https://mempool.space/api/address/${address}`;
      fetch(mempoolUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.addressFinal = "valid";
          return address;
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          this.addressFinal = "invalid";
        });
    },
    confirmError() {
      this.inputIsBlank = false;
    }
  },
  provide() {
    return {
      checkAddress: this.checkAddress,
    };
  },
};
</script> 