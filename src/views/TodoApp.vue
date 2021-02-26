<template>
  <subpage reverse>
    <h1>Vue Todo App</h1>
    <p>
      Um praktische Erfahrung mit Vue zu sammeln, habe ich eine Todo-Web-App entwickelt. Eine
      Todo-Liste bietet sich gut als Probeprojekt an, da sie klare Mindestanforderungen hat – das
      Erstellen und Entfernen von Elementen –, darüber hinaus aber schier unbegrenzt erweitert
      werden kann. Mein Fokus lag beim Datepicker, welcher mit Hilfe der JavaScript-Date-API eine
      nach Wochentagen sortierte Monatsansicht generiert.
    </p>
    <p>
      Zur Zeit besteht nur ein Front-End. Erfasste Einträge gehen also bei einem erneuten Laden der
      Seite verloren.
    </p>
    <p>
      Die App wurde mit Vue 3 umsesetzt. Ich keine weiteren externen Bibliotheken verwendet.
    </p>
    <template v-slot:media>
      <todo />
    </template>
  </subpage>
</template>

<script>
import todo from '../../todo/todo';
import subpage from '../templates/subpage';
export default {
  components: { todo, subpage },
  mounted() {
    this.$emit('emitBackgroundPosition', '25% 25%');
  },
};
</script>
