<template>
  <div class="button-container">
    <button>{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {buttonText: String},
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9vh;
}

button {
  background-color: #F2A900;
  border: none;
  color: #000000d5;
  padding: 0.3rem 5rem;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  background-color: #000000d5;
  color: #F2A900;
}
</style>  