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
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  border-collapse: collapse;
}

.table-row {
  display: flex;
}

.header .cell {
  font-weight: bold;
}

.cell {
  padding: 10px;
  flex: 1; /* Adjust flex values as needed to match your layout */
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

/* Additional styling for responsiveness and aesthetics */
@media (max-width: 768px) {
  .cell {
    /* Responsive adjustments */
  }
}
</style>