<template>
  <div class="app__inner" :style="{ backgroundPosition: currentBackgroundPosition }">
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
@use 'variables' as var;

*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: var.$color-text;
}

h1 {
  margin: 0;
}

.app__inner {
  padding: 20px 140px 20px 20px;
  min-height: 100vh;
  width: 100%;
  background: rgb(240, 152, 25);
  background: linear-gradient(
    135deg,
    rgb(240, 151, 25) 0%,
    rgb(255, 88, 88) 25%,
    rgb(168, 94, 207) 50%,
    rgb(0, 147, 233) 75%,
    rgb(128, 208, 199) 100%
  );
  background-size: 400% 400%;
  transition: background-position 0.5s ease-in-out;
  overflow-x: hidden;
}

.component {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-self: stretch;

  &__inner {
    width: 100%;
  }
}

.card {
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
