<template>
  <div class="header">
    <div class="card todo-page__content">
      <h1>Oscarfaeh Webseite</h1>
      <p>
        Um praktie Erfahrung mit Vue zu sammeln, habe ich eine Todo-Web-App entwickelt. Eine
        Todo-Liste bietet sich gut als Probeprojekt an, da sie klare Mindestanforderungen hat – das
        Erstellen und Entfernen von Elementen –, darüber hinaus aber schier unbegrenzt erweitert
        werden kann. Mein Fokus lag beim Datepicker, welcher mit Hilfe der JavaScript-Date-API eine
        nach Wochentagen sortierte Monatsansicht generiert.
      </p>
      <p>
        Zur Zeit besteht nur ein Front-End. Erfasste Einträge gehen also bei einem erneuten Laden
        der Seite verloren.
      </p>
      <p>
        Die App wurde mit Vue 3. Ich keine weiteren externen Bibliotheken verwendet.
      </p>
    </div>
    <img class="thumbnail" src="../assets/of_screenshot.png" alt="">
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    backgroundColor: String,
  },
  mounted() {
    this.$emit('emitBackgroundPosition', '50% 50%');
  },
};
</script>

<style lang="scss"></style>
