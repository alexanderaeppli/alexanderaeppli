<template>
  <subpage reverse>
    <h1>Kontakt</h1>
    <ul class="contact">
      <li><strong>Alexander Aeppli</strong></li>
      <li>c/o Andreas Aeppli</li>
      <li>Schule für Schlaginstrumente</li>
      <li>Rudolfstrasse 19</li>
      <li>8400 Winterthur</li>
    </ul>
    <ul class="contact">
      <li><a href="mailto:info@alexanderaeppli.ch">info@alexanderaeppli.ch</a></li>
    </ul>
  </subpage>
</template>

<script>
import subpage from '../templates/subpage';
export default {
  components: { subpage },
  mounted() {
    this.$emit('emitBackgroundPosition', '100% 100%');
  },
};
</script>
