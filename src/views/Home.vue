<template>
  <subpage>
    <h1>Hallo, ich bin Alexander Aeppli.</h1>
    <p>
      Als begeisterter Web und Frontend Entwickler bin ich ständig auf der Suche nach neuen
      techniken und möglichkeinen mein Repetoir auszubauen. Diese Seite soll als meine digitale
      Visitenkarte dienen und einige meiner Fähigkeiten präsentierten.
    </p>
    <template v-slot:media>
      <img class="thumbnail" src="../assets/of_screenshot.png" alt="" />
    </template>
  </subpage>
</template>

<script>
import subpage from '../templates/subpage';
export default {
  components: { subpage },
  mounted() {
    this.$emit('emitBackgroundPosition', '0 0 ');
  },
};
</script>
