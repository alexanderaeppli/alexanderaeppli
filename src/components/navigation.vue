<template>
  <nav class="nav">
    <div class="nav__inner card">
      <router-link class="nav__item" :to="{ name: 'Home' }"
        ><i class="fas icon fa-home"></i
      ></router-link>
      <router-link class="nav__item" :to="{ name: 'TodoApp' }"
        ><i class="fab icon fa-vuejs"></i
      ></router-link>
      <router-link class="nav__item" :to="{ name: 'Oscarfaeh' }">
        <i class="fab icon fa-wordpress-simple"></i>
      </router-link>
      <router-link class="nav__item" :to="{ name: 'Contact' }"
        ><i class="far icon fa-envelope"></i
      ></router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '../variables' as var;

.nav {
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 20px;
  min-height: 100%;
  overflow-y: auto;
  z-index: 10;

  @media (max-width: 800px) {
    top: unset;
    bottom: 15px;
    right: 0;
    width: 100%;
    height: unset;
    min-height: unset;
    padding: 0 20px;
    align-items: center;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100px;


    @media (max-width: 800px) {
      flex-direction: row;
      width: unset;
      padding: unset;
    }
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: var.$color_text;
    width: 70px;

    .icon {
      width: 100%;
      height: 30px;
    }

    &::after {
      content: '';
      padding-top: 100%;
    }
  }
}
</style>
