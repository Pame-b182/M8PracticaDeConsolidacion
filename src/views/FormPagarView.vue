<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="6" md="6">
        <h2 class="text-center mt-5">Datos del Comprador</h2>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-row justify="center">
              <v-col cols="12" md="9">
                <v-text-field
                  v-model="form.nombre"
                  :rules="nombreRules"
                  :counter="50"
                  label="Nombre"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.correo"
                  :rules="correoRules"
                  label="Correo"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.recorreo"
                  :rules="recorreoRules"
                  label="Reingresar Correo"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.telefono"
                  :rules="telefonoRules"
                  :counter="9"
                  label="Teléfono"
                  required
                ></v-text-field>
                <v-divider class="my-10"></v-divider>
                <h2 class="text-center">Datos de Despacho</h2>
                <v-text-field
                  v-model="form.direccion"
                  :rules="direccionRules"
                  :counter="100"
                  label="Dirección"
                  required
                >
                </v-text-field>
                <v-text-field
                  v-model="form.comuna"
                  :counter="50"
                  label="Comuna"
                  :rules="comunaRules"
                  required
                ></v-text-field>
                <v-divider class="my-10"></v-divider>
                <h2 class="text-center">Medios de Pago</h2>
                <template>
                  <v-container fluid>
                    <v-radio-group v-model="radioGroup" :rules="medioPagoRules">
                      <v-radio
                        v-for="medioPago in form.mediosPago"
                        :key="medioPago"
                        :label="medioPago"
                        :value="medioPago"
                      ></v-radio>
                    </v-radio-group>
                  </v-container>
                </template>
                <div class="text-center">
                  <v-btn
                    :disabled="!valid"
                    color="primary"
                    class="mr-4"
                    small
                    @click="confirmarCompra"
                  >
                    Confirmar Compra
                  </v-btn>

                  <v-btn color="warning" class="mr-4" small @click="reset">
                    Limpiar
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col cols="12" sm="12" lg="6" md="6">
        <Carrito />
        <Cuenta />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carrito from "@/components/Carrito.vue";
import Cuenta from "@/components/Cuenta.vue";
import { mapActions } from "vuex";
export default {
  name: "formPagar-view",
  // props: {},
  data: function () {
    return {
      valid: true,
      radioGroup: 1,
      form: {
        nombre: "",
        correo: "",
        recorreo: "",
        telefono: "",
        direccion: "",
        comuna: "",
        mediosPago: ["Transferencia", "Servipag", "Webpay", "Contra Entrega"],
      },
      nombreRules: [
        (v) => !!v || "Nombre es requerido",
        (v) => v.length <= 50 || "El nombre debe tener menos de 100 caracteres",
      ],
      correoRules: [
        (v) => !!v || "Correo es requerido",
        (v) => /.+@.+/.test(v) || "El correo ingresado no es válido",
      ],
      recorreoRules: [
        (v) => !!v || "Correo es requerido",
        (v) => /.+@.+/.test(v) || "El correo ingresado no es válido",
        (v) => v === this.form.correo || "Los correos ingresados deben coincidir",
      ],
      direccionRules: [
        (v) => !!v || "Dirección es requerido",
        (v) =>
          v.length <= 100 || "La dirección debe tener menos de 100 caracteres",
      ],
      comunaRules: [
        (v) => !!v || "Comuna es requerida",
        (v) => v.length <= 50 || "La comuna debe tener menos de 100 caracteres",
      ],
      telefonoRules: [
        (v) => !!v || "Teléfono es requerido",
        (v) => v.length <= 9 || "El teléfono debe tener menos de 9 caracteres",
      ],
      medioPagoRules: [(v) => !!v || "El medio de pago es requerido"],
    };
  },
  //computed: {},
  methods: {
    ...mapActions(["limpiarProductosCarro"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    confirmarCompra() {
      let response = this.$refs.form.validate();
      if (!this.valid) return; //si no esta valido escapo de la función
      if (response) {
        this.limpiarProductosCarro();
        this.$router.push({ name: "Confirmacion" });
      }
    },
  },
  // watch: {},
  components: {
    Carrito,
    Cuenta,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>