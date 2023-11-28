<template>
  <div class="input-group">
    <label for="btcAddress">Enter Address:</label>
    <input type="text" placeholder="BTC Address" ref="btcAddress"/>
  </div>
  <div class="button-submit">
    <the-button buttonText="Check Address" @click="submitAddress"></the-button>
  </div>
</template>

<script>
export default {
  inject: ['checkAddress'],
  methods: {
    submitAddress() {
      const address = this.$refs.btcAddress.value;
      this.checkAddress(address);
    }
  }
}
</script>

<style scoped>
.input-group {
  display: flex;
  justify-content: center;
  align-items: center; /* This will vertically align your label and input */
  gap: 1rem; /* This adds space between your label and input */
  margin-top: 20px;
}

label {
  /* Add any specific styles for your label here */
  white-space: nowrap; /* Prevents the label from wrapping */
}

input[type="text"] {
  /* Add any specific styles for your input here */
  flex-grow: 0.2; /* Allows the input to take up available space */
}

/* Add media query for responsive design if necessary */
@media (max-width: 600px) {
  .input-group {
    flex-direction: column; /* Stack them on smaller screens */
  }
}
</style>