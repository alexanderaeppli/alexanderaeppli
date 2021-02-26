<template>
  <div class="dropdown" @click="toggleDropdown" ref="dropdown">
    <span class="dropdown__selected">{{ items[selectedItemIndex] }}</span>
    <div
      v-show="listVisible"
      :class="{ 'dropdown--opague': opague }"
      class="dropdown__list"
      ref="dropdown-list"
    >
      <div class="dropdown__list-inner" ref="dropdown-list-inner">
        <span
          class="dropdown__item"
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          @click="pickItem(index)"
          :ref="'dropdown-item-' + index"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    selectedItemIndex: Number,
  },
  emits: ['select'],
  data() {
    return {
      opague: true,
      listVisible: true,
    };
  },
  methods: {
    toggleDropdown() {
      const self = this;

      function eventListener(event) {
        if (self.$refs['dropdown'] !== null) {
          
          if (!self.$refs['dropdown'].contains(event.target)) {
            self.listVisible = false;
            document.removeEventListener('click', eventListener, false);
          }

        } else {
          document.removeEventListener('click', eventListener, false);
        }
      }

      if (!this.listVisible) {
        this.listVisible = true;
        document.addEventListener('click', eventListener, false);
      } else {
        this.listVisible = false;
        document.removeEventListener('click', eventListener, false);
      }

      this.scrollList;
    },
    pickItem(index) {
      this.$emit('select', index);
      this.scrollList(index);
    },
    scrollList(index = this.selectedItemIndex) {
      let list = this.$refs['dropdown-list'];
      let item = this.$refs['dropdown-item-' + index];
      list.scroll(0, item.offsetTop + item.offsetHeight / 2 - list.offsetHeight / 2);
    },
  },
  mounted() {
    this.scrollList();
    this.listVisible = false;
    this.opague = false;
  },
};
</script>