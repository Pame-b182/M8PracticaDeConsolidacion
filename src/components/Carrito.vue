<template>
  <v-col>
    <v-alert
      v-if="cantidadCarro == 0"
      border="left"
      prominent
      shaped
      color="cyan lighten-1"
      type="info"
    >
      No hay productos agregados al carro de compra
    </v-alert>
    <!-- tabla -->
    <v-data-table
      v-else
      :headers="headers"
      :items="productosEnCarro"
      sort-by="title"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title
            >Total Carro
            <span class="green--text font-weight-bold"
              >${{ Number(totalCarro).toLocaleString("en-US") }}</span
            ></v-toolbar-title
          >
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <!-- Alerta para confirmar eliminación -->
          <v-dialog
            v-model="dialogEliminar"
            max-width="500px"
            overlay-color="red lighten-3"
          >
            <v-card>
              <v-card-title class="text-h6"
                >¿Estas seguro que quieres eliminar el producto?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="cerrarDialogEliminar"
                  >Cancelar</v-btn
                >
                <v-btn color="green darken-1" text @click="confirmarEliminacion"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.imagen`]="{ item }">
        <img :src="item.imagen" width="75" alt="">
      </template>
      <!-- v-slot: para editar el elemento que se muestra en la tabla, en este caso agregar $ -->
      <template v-slot:[`item.total`]="{ item }">
        ${{ Number(item.total).toLocaleString("en-US") }}
      </template>
      <!-- v-slot: para editar el elemento que se muestra en la tabla, en este caso agregar $ -->
      <template v-slot:[`item.precio`]="{ item }">
        ${{ Number(item.precio).toLocaleString("en-US") }}
      </template>
      <!-- segmento con los íconos para agregar, quitar o eliminar los productos -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="agregarStock(item)">
          mdi-plus-circle
        </v-icon>

        <v-icon small class="mr-2" @click="removerStock(item)">
          mdi-minus-circle
        </v-icon>
        <v-icon small @click="eliminarItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-col>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "carrito-component",
  //props: {},
  data: function () {
    return {
      headers: [
        {
          text: "ID Producto",
          align: "center",
          sortable: false,
          value: "id",
        },
        { text: "Imagen", value: "imagen" },
        { text: "Producto", value: "nombre" },
        { text: "Cantidad", value: "cantidad" },
        { text: "Precio", value: "precio" },
        { text: "Subtotal", value: "total" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      idABorrar: null,
      dialogEliminar: false,
    };
  },
  computed: {
    ...mapGetters(["productosEnCarro", "cantidadCarro", "totalCarro"]),
  },
  methods: {
    ...mapActions([
      "agregarProductoACarro",
      "removerProductoCarro",
      "agregarStockProductoCarro",
      "removerStockProductoCarro",
    ]),
    eliminarItem(item) {
      this.idABorrar = item.id;
      this.dialogEliminar = true;
    },
    cerrarDialogEliminar() {
      this.dialogEliminar = false;
    },
    confirmarEliminacion() {
      this.removerProductoCarro(this.idABorrar);
      this.cerrarDialogEliminar();
    },
    agregarStock(item) {
      this.agregarStockProductoCarro(item.id);
    },
    removerStock(item) {
      this.removerStockProductoCarro(item.id);
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