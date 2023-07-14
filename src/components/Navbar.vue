<template>
  <div>
    <v-app-bar color="cyan darken-1" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <a @click="$router.push('/')">
        <v-toolbar-title class="white--text"
          ><v-icon>mdi-shopping</v-icon> Tienda De Todito
          <v-icon>mdi-shopping</v-icon></v-toolbar-title
        >
      </a>
      <v-spacer></v-spacer>
      <!--badge-->
      <v-badge
        color="green accent-3"
        :content="cantidadCarro"
        class="ma-3"
        :value="cantidadCarro > 0"
      >
        <v-icon @click="$router.push('/carrito')">mdi-cart</v-icon>
      </v-badge>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="route in routes"
            :key="route.name"
            @click="redirigir(route.name)"
            :disabled="routeActual == route.name"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navbar-component",
  // props: {},
  data: function () {
    return {
      //Navbar
      drawer: false,
      //Navbar
      group: null,
      routes: [
        {
          icon: "mdi-home",
          title: "Inicio",
          name: "Home",
        },
        {
          icon: "mdi-gender-male",
          title: "Vestuario Hombre",
          name: "VestuarioHombre",
        },
        {
          icon: "mdi-gender-female",
          title: "Vestuario Mujer",
          name: "VestuarioMujer",
        },
        {
          icon: "mdi-desktop-tower",
          title: "Electrónica",
          name: "Electronica",
        },
        {
          icon: "mdi-cart",
          title: "Carrito",
          name: "Carrito",
        },
        {
          icon: "mdi-cash",
          title: "Pagar",
          name: "Pagar",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["cantidadCarro"]),
    //Computada que deshabilita la ruta en la cual el usuario se posiciona
    routeActual() {
      return this.$route.name;
    },
  },
  methods: {
    //Método que redirige al usuario a la vista a la cuál le hizo click
    redirigir(nombreRuta) {
      this.$router.push({ name: nombreRuta });
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