<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert
          outlined
          type="warning"
          prominent
          border="left"
          color="red darken-4"
          class="text-center"
        >
          <p>ERROR 404</p>
          La página que usted busca no existe
          <v-col>
            <v-btn
              @click="$router.push('/')"
              color="red darken-4"
              fab
              x-small
              dark
            >
              <v-icon>mdi-home</v-icon>
            </v-btn></v-col
          >
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "notFound-view",
  // props: {},
  data: function () {
    return {};
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