<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto mt-5 text-center" max-width="420">
          <v-card-text>
            <div class="mb-5">Confirmación de Compra</div>
            <p class="text-h4 text--primary">
              La orden de compra Nº {{ nOrden() }} ha sido confirmada!
            </p>
          </v-card-text>
          <v-col>
            <v-btn
              @click="$router.push('/')"
              color="cyan darken-1"
              fab
              x-small
              dark
            >
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "confirmacionCompra-view",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  methods: {
    nOrden() {
      return Math.floor(Math.random() * 1000);
    },
  },
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