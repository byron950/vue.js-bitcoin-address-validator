<template>
  <slot>
    <div class="table">
      <div class="table-row header">
        <div class="cell">Address</div>
        <div class="cell">Valid/Invalid</div>
        <div class="cell">Address Type</div>
      </div>
      <div class="table-row">
        <div class="cell">{{ address }}</div>
        <div class="cell">
          <span class="status valid" v-if="isVerified && valid">Valid Bitcoin Address</span>
          <span class="status invalid" v-if="isVerified && !valid">Invalid Bitcoin Address</span>
        </div>
        <div class="cell">{{ type }}</div>
      </div>
    </div>
</slot>
</template>

<script>
export default {
    props: {
        address: String, 
        valid: Boolean,
        isVerified: Boolean,
        type: String
    }
}
</script>

<style scoped>
.table {
  width: 80%;
  margin: auto;
  background-color: white;
  color: #000;
  border-collapse: collapse;
  padding: 2rem;
}

.table-row {
  display: flex;
}

.header .cell {
  font-weight: bold;
}

.cell {
  padding: 10px;
  flex: 1 1 0px; 
  text-align: center;
  border-bottom: 1px solid #333;
}

.status {
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
}

.valid {
  background-color: green;
}

.invalid {
  background-color: red;
}

/* @media (max-width: 768px) {
  .cell {
  
  } */

</style>