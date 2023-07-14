<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { mapActions } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Footer,
  },
  methods: {
    ...mapActions(["fetchHome"]),
  },
  // -- Lifecycle Methods
  //Ciclo created para ejecutar la action que realiza la petición al json
  created() {
    this.fetchHome();
  },
};
</script>
