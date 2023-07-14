<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center mb-5">Resumen de la Compra</h1>
        <Carrito/>
        <div class="text-center mt-5">
          <v-btn color="success" @click="$router.push('/pagar')">Ir a Pagar</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carrito from '@/components/Carrito.vue'
export default {
  name: "carrito-view",
  //props: {},
  data: function () {
    return {
    };
  },
  computed: {

  },
  methods: {

  },
  // watch: {},
  components: {
    Carrito,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>