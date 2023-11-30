<template>
  <the-error-message
    v-if="inputIsBlank"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Please enter an address. Blank input is not accepted.</p>
    </template>
    <template #actions>
      <the-button @click="confirmError" buttonText="OK"></the-button>
    </template>
  </the-error-message>
  <address-box></address-box>
  <the-output-card
    v-if="buttonClicked"
    :address="addressOutput"
    :is-verified="addressVerified"
    :valid="validAddress"
    :type="addressType"
  ></the-output-card>
</template>

<script>
import TheErrorMessage from "../ui/TheErrorMessage.vue";
import TheOutputCard from "../ui/TheOutputCard.vue";

export default {
  data() {
    return {
      buttonClicked: false,
      inputIsBlank: false,
      addressOutput: "",
      validAddress: false,
      addressVerified: false,
      addressType: "",
    };
  },
  components: { TheErrorMessage, TheOutputCard },
  methods: {
    checkAddress(address) {
      address = address.trim();
      if (address === "") {
        this.inputIsBlank = true;
        return;
      }
      const mempoolUrl = `https://mempool.space/api/address/${address}`;
      fetch(mempoolUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (typeof data === "object" && data != null) {
            this.validAddress = true;
            console.log("address[0 = ]", address[0]);
            if (address[0] === '1') {
              this.addressType = "P2PKH (Legacy) | Pay To Public Key Hash";
            } else if (address[0] === '3') {
              this.addressType = "P2SH (Nested Segwit) | Pay To Script Hash";
            } else if (address[0] === 'b' && address[3] === 'q') {
              this.addressType = "P2WPKH (Native Segwit) | Pay To Witness Public Key Hash";
            } else {
              this.addressType = "P2TR (Taproot) | Pay To Taproot";
            }
          } else {
            this.validAddress = false;
            this.addressType = '-';
            return;
          }
          this.addressOutput = address;
          this.addressVerified = true;
          this.buttonClicked = true;
        })
        .catch((error) => {
          this.addressType = '-';
          this.addressOutput = address;
          this.validAddress = false;
          this.addressVerified = true;
          this.buttonClicked = true;
          return error;
        });
    },

    confirmError() {
      this.inputIsBlank = false;
    },
  },
  provide() {
    return {
      checkAddress: this.checkAddress,
    };
  },
};
</script> 

