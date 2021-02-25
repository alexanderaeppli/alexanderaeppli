<template>
  <div class="home card">
    <div class="header">
      <h1 class="page_title">Alexander Aeppli</h1>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    backgroundColor: String,
  },
  mounted() {
    this.$emit('emitBackgroundPosition', '0 0 ');
  },
};
</script>

<style lang="scss">
@use '../variables' as var;

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
}
</style>
