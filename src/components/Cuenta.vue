<template>
  <v-card class="mx-auto text-center" max-width="400">
    <v-card-text>
      <p class="text-h4 text--primary">Cuenta</p>
      <p class="text-h6">
         <v-list-item>
          <span >
            Sub-Total: $ {{ Number(totalCarro).toLocaleString("en-US") }}</span
          >
        </v-list-item>
        <v-list-item>
          <span class="red--text">
            Descuento ({{ descuento }}): ${{
              Number(totalDescuento).toLocaleString("en-US")
            }}
          </span>
        </v-list-item>
        <v-list-item>
          <span class="font-weight-black">
            Total Final: ${{
              Math.round(
                Number(totalCarro) - Number(totalDescuento)
              ).toLocaleString("en-US")
            }}</span
          >
        </v-list-item>
      </p>
       
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cuenta-component",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["totalCarro", "totalDescuento", "descuento"]),
  },
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