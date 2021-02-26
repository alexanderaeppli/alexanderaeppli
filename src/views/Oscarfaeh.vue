<template>
  <subpage>
    <h1>Oscarfaeh Webseite</h1>
    <p>
      Diese Kundenwebseite habe ich als Entwickler bei der Mosaix AG umgesetzt. Das Design stammt
      von Diana von Ow. Ich war für die Entwicklung zuständig.
    </p>
    <p>
      Eine der Anforderungen der Webseite war, das der Kunde inhaltliche Anpassungen selbstständig
      machen kann. Inhalte werden über WordPress und den Pagebuilder Elementor erfasst. Hierfür habe
      ich ein Theme und diversere Elementor Widgets entwickelt.
    </p>
    <p>
      Das Dienstleistungs-Megamenu stelle eine der grössten Herausforderungen dar. Hier werden die
      Widgets der Unterseiten per AJAX geladen und als Overlay angezeigt.
    </p>
    <a class="button button--right" href="https://www.oscarfaeh.ch" target="_blank">zum Produkt</a>
    <template v-slot:media>
      <img class="thumbnail" src="../assets/of_screenshot-min.png" alt="" />
    </template>
  </subpage>
</template>

<script>
import subpage from '../templates/subpage';
export default {
  components: { subpage },
  mounted() {
    this.$emit('emitBackgroundPosition', '50% 50%');
  },
};
</script>
