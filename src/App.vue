<template>
  <div class="app__inner" :style="{ backgroundPosition: currentBackgroundPosition }">
    <header class="page_header"><h1 class="page_header__title">Alexander Aeppli</h1></header>
    <div class="component">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component
            :is="Component"
            class="component__inner"
            @emitBackgroundPosition="setBackgoundPositon"
          />
        </transition>
      </router-view>
    </div>
    <navigation />
  </div>
</template>

<script>
import navigation from './components/navigation';

export default {
  name: 'App',
  components: { navigation },
  data() {
    return {
      currentBackgroundPosition: '',
    };
  },
  methods: {
    setBackgoundPositon(position) {
      this.currentBackgroundPosition = position;
    },
  },
};
</script>

<style lang="scss">
@use 'scss/app';
</style>