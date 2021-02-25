<template>
  <div class="home">
    <div class="home__content card">
      <h1 class="page_title">Alexander Aeppli</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore e  u fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
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

</style>
