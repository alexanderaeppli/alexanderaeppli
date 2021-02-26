<template>
  <subpage>
    <h1>Hallo, ich bin Alexander Aeppli.</h1>
    <p>
      Als begeisterter Web und Frontend Entwickler bin ich ständig auf der Suche nach neuen
      Techniken und Möglichkeiten, mein Repertoire auszubauen. Diese Seite soll als meine digitale
      Visitenkarte dienen und einige meiner Fähigkeiten präsentierten.
    </p>
    <template v-slot:media>
      <img class="thumbnail" src="../assets/typewriter_low.jpg" alt="Alexander Aeppli" />
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
