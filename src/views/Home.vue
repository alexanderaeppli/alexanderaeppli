<template>
  <div class="header">
    <h2>Alexander Aeppli</h2>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    backgroundColor: String
  }
};
</script>

<style lang="scss">
.header {
  height: 100%;
  background-color: #ff5858;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
}
</style>