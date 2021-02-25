<template>
  <div class="todo-page">
    <div class="card todo-page__content">
      <h1>Vue Todo App</h1>
      <p>
        Um praktische Erfahrung mit Vue zu sammeln, habe ich eine Todo-Web-App entwickelt. Eine
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
    <todo />
  </div>
</template>

<script>
import todo from '../../todo/todo';
export default {
  components: { todo },
  emits: ['emitBackgroundPosition'],
  mounted() {
    this.$emit('emitBackgroundPosition', '25% 25%');
  },
};
</script>

<style lang="scss">
.todo-page {
  &__content {
    margin-right: 20px;

    @media (max-width: 1200px) {
      margin-right: unset;
      margin-bottom: 15px;
    }
  }
}
</style>
