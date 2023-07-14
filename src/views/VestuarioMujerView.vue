<template>
  <v-container>
    <h1 class="text-center mb-5">Vestuario Mujer</h1>
    <v-row class="mt-5" v-if="loading">
      <Loading />
    </v-row>
    <v-row v-else>
      <v-col cols="6">
        <Carrito />
        <Cuenta />
      </v-col>
      <v-col cols="3" v-for="producto in vestuarioMujer" :key="producto.id">
        <v-card :loading="loading" class="" max-width="200">
          <v-img height="200" :src="producto.image" contain></v-img>

          <v-card-title class="title">{{
            producto.title.slice(0, 63)
          }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <!-- :value="product.rating.rate" => muestra el rating del producto a través de las estrellitas -->
              <v-rating
                :value="producto.rating.rate"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                {{ producto.rating.rate }} ({{ producto.rating.count }})
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">$ {{ producto.price }}</div>
            <div>{{ producto.description.slice(0, 62) }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions class="justify-center">
            <!-- Evento click que ejecuta el método "add" -->
            <v-btn
              color="cyan lighten-1"
              class="white--text"
              @click="agregarACarro(producto)"
            >
              <v-icon>mdi-cart</v-icon>
              Agregar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- Inicio alerta que muestra un mensaje con el producto agregado -->
      <div class="text-center">
        <v-snackbar
          v-model="snackbar"
          :multi-line="multiLine"
          color="cyan lighten-1"
        >
          {{ productoAgregado }} Agregado al Carrito
          <v-icon>mdi-cart-plus</v-icon>
          <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
              Cerrar
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Carrito from "@/components/Carrito.vue";
import Cuenta from "@/components/Cuenta.vue";
import Loading from "@/components/Loading.vue";
export default {
  name: "vestuarioMujer-view",
  // props: {},
  data: function () {
    return {
      productoAgregado: "",
      loading: false,

      selection: 1,

      multiLine: true,
      snackbar: false,
    };
  },
  computed: {
    ...mapState(["vestuarioMujer"]),
  },
  methods: {
    ...mapActions(["fetchVestuarioMujer", "agregarProductoACarro"]),

    agregarACarro(product) {
      let producto = {
        id: product.id,
        nombre: product.title,
        precio: product.price,
        imagen: product.image,
        cantidad: 1,
      };
      this.productoAgregado = product.title;
      this.agregarProductoACarro(producto);
      this.snackbar = true;
    },
  },
  // watch: {},
  components: {
    Carrito,
    Cuenta,
    Loading,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.fetchVestuarioMujer();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.title {
  min-height: 160px;
}
</style>