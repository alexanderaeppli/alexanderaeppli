<template>
  <div class="subpage" :class="{ 'subpage--reverse': reverse }">
    <div class="subpage__card todo-page__content">
      <slot></slot>
    </div>
    <slot name="media"></slot>
  </div>
</template>
<script>
export default {
  props: {
    reverse: Boolean,
  },
};
</script>
