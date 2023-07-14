<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="cyan darken-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Tienda de Todito  </strong><v-icon class="pb-2">mdi-shopping</v-icon>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "footer-component",
  // props: {},
  data: function () {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  // computed: {},
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>