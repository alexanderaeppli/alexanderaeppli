<template>
  <div class="header">
    <h2>Alexander Aeppli</h2>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    backgroundColor: String,
  },
  mounted() {
    this.$emit('emitBackgroundPosition', '100% 100%');
  },
};
</script>

<style lang="scss">
</style>
