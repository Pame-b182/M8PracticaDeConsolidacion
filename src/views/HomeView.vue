<template>
  <v-container>
    <h1 class="text-center mb-5">Productos Mejor Ranqueados</h1>
    <v-row class="justify-center">
      <v-carousel class="carousel mb-10" cols="12" v-model="model" height="400" hide-delimiter-background hide-delimiters cycle>
        <v-carousel-item
          v-for="mejorProducto in mejoresProductos"
          :key="mejorProducto.title"
          :src="mejorProducto.image"
          contain
        >
          <v-row class="fill-height ma-5" align="center" justify="center">
            <div class="text-h8 cyan--text font-weight-bold">
              {{ mejorProducto.title }}
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-divider></v-divider>
    <h1 class="text-center mt-8">Nuestros Productos</h1>
    <v-row>
      <v-card v-for="tipoProducto in tiposProductos" :key="tipoProducto.name" cols="12" sm="6" md="3" class="my-5 mx-2" max-width="280">
        <v-img
          :src="tipoProducto.image"
          height="250px"
          contain
        ></v-img>

        <v-card-title class="justify-center"> {{tipoProducto.name}} </v-card-title>

        <v-card-subtitle class="text-justify"> {{tipoProducto.text}} </v-card-subtitle>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: "home-view",
  // props: {},
  data: function () {
    return {
      //Carousel
      model: 0,
    };
  },
  computed: {
    ...mapState(['mejoresProductos', 'tiposProductos'])
  },
  methods: {
    ...mapActions(['fetchHome'])
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
.carousel {
  width: 60%;
}
</style>