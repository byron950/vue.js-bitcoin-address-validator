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
  align-items: center; 
  gap: 1rem; 
  margin-top: 20px;
}

label {
  
  white-space: nowrap;
}

input[type="text"] {
  flex-grow: 0.2; 
}


@media (max-width: 600px) {
  .input-group {
    flex-direction: column; 
  }
}
</style>