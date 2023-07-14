import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: [],
    mejoresProductos: [],
    tiposProductos: [],
    vestuarioHombre: [],
    vestuarioMujer: [],
    electronica: [],
    carro: [],
  },
  getters: {
    //Getter que calcula el total (cantidad*precio) de un producto en el carro
    productosEnCarro(state) {
      return state.carro.map(prod => {
        let miProducto = prod
        miProducto.total = prod.cantidad * prod.precio
        return miProducto
      })
    },
    cantidadCarro(state) {
      return state.carro.length
    },
    totalCarro(state, getters) {
      return getters.productosEnCarro.reduce((total, prod) => {
        return total + prod.total
      }, 0)
    },
    totalDescuento(state, getters) {
      let subtotal = Math.round(getters.totalCarro)
      let descuento = 0
      if (subtotal < 500) {
        descuento = Math.round(subtotal * 0.05)
        return descuento
      } else {
        descuento = Math.round(subtotal * 0.11)
        return descuento
      }
    },
    descuento(state, getters) {
      let subtotal = Math.round(getters.totalCarro)
      let descuento = ''
      if (subtotal < 500) {
          descuento = '5%'
          return descuento
      } else {
          descuento = '11%'
          return descuento
      }
  }
  },
  mutations: {
    //Mutación que guarda en el array home, mejoresProductos y tiposProductos, los datos que vienen del json
    SET_HOME(state, homeJson) {
      state.home = homeJson
      state.mejoresProductos = homeJson.mejoresproductos
      state.tiposProductos = homeJson.tiposproductos
    },
    //Mutación que guarda en el array vestuarioHombre, los datos que vienen del json
    SET_VESTUARIO_HOMBRE(state, hombreJson) {
      state.vestuarioHombre = hombreJson
    },
    //Mutación que guarda en el array vestuarioMujer, los datos que vienen del json
    SET_VESTUARIO_MUJER(state, mujerJson) {
      state.vestuarioMujer = mujerJson
    },
    //Mutación que guarda en el array electronica, los datos que vienen del json
    SET_ELECTRONICA(state, electronicaJson) {
      state.electronica = electronicaJson
    },
    //Mutación que agrega al carro de compra el/los producto/s
    AGREGAR_PRODUCTO_A_CARRO(state, producto) {
      let existente = state.carro.some(p => p.id === producto.id)
      if (existente == false) {
        state.carro.push(producto)
      }
      else {
        state.carro.forEach(p => {
          if (p.id == producto.id) {
            p.cantidad += 1;
          }
        })
      }
    },
    //Mutación que remueve un producto del carro de compra
    REMOVER_PRODUCTO_CARRO(state, idProducto) {
      let index = state.carro.findIndex(p => p.id == idProducto)
      state.carro.splice(index, 1)
    },
    //Mutación que agrega una cantidad de un producto en el carro de compra
    AGREGAR_STOCK_PRODUCTO_CARRO(state, idProducto) {
      state.carro.forEach(p => {
        if (p.id == idProducto) {
          p.cantidad += 1;
        }
      })
    },
    //Mutación que remueve una cantidad de un producto en el carro de compra
    REMOVER_STOCK_PRODUCTO_CARRO(state, idProducto) {
      state.carro.forEach(p => {
        if (p.id == idProducto && p.cantidad > 1) {
          p.cantidad -= 1;
        }
      })
    },
    LIMPIAR_PRODUCTOS_CARRO(state) {
      state.carro = []
    },
  },
  actions: {
    //Petición Json y ejecución mutación que guarda en state los datos del json
    async fetchHome({ commit }) {
      try {
        let response = await fetch("/jsons/home.json")
        let homePeticion = await response.json()

        console.log(homePeticion)
        console.log(homePeticion.mejoresproductos)
        console.log(homePeticion.tiposproductos)


        commit('SET_HOME', homePeticion)
      }
      catch (error) {
        console.error(error)
      }
    },
    //action asíncrono que hace la petición al json para recibir los productos de vestuario hombre
    async fetchVestuarioHombre({ commit }) {
      try {
        let response = await fetch('/jsons/ropaHombre.json');
        let hombrePeticion = await response.json();
        console.log(hombrePeticion);

        commit('SET_VESTUARIO_HOMBRE', hombrePeticion);
      } catch (error) {
        console.log(error);
      }
    },
    //action asíncrono que hace la petición al json para recibir los productos de vestuario mujer
    async fetchVestuarioMujer({ commit }) {
      try {
        let response = await fetch('/jsons/ropaMujer.json');
        let mujerPeticion = await response.json();
        console.log(mujerPeticion);

        commit('SET_VESTUARIO_MUJER', mujerPeticion);
      } catch (error) {
        console.log(error);
      }
    },
    //action asíncrono que hace la petición al json para recibir los productos de electronica
    async fetchElectronica({ commit }) {
      try {
        let response = await fetch('/jsons/electronica.json');
        let electronicaPeticion = await response.json();
        console.log(electronicaPeticion);

        commit('SET_ELECTRONICA', electronicaPeticion);
      } catch (error) {
        console.log(error);
      }
    },
    //Action que ejecuta la mutación 'AGREGAR_PRODUCTO_A_CARRO'
    agregarProductoACarro({ commit }, idProducto) {
      commit('AGREGAR_PRODUCTO_A_CARRO', idProducto)
    },
    //Action que ejecuta la mutación 'REMOVER_PRODUCTO_CARRO'
    removerProductoCarro({ commit }, idProducto) {
      commit('REMOVER_PRODUCTO_CARRO', idProducto)
    },
    //Action que ejecuta la mutación AGREGAR_STOCK_PRODUCTO_CARRO
    agregarStockProductoCarro({ commit }, idProducto) {
      commit('AGREGAR_STOCK_PRODUCTO_CARRO', idProducto)
    },
    //Action que ejecuta la mutación REMOVER_STOCK_PRODUCTO_CARRO
    removerStockProductoCarro({ commit }, idProducto) {
      commit('REMOVER_STOCK_PRODUCTO_CARRO', idProducto)
    },
    limpiarProductosCarro({ commit }) {
      commit('LIMPIAR_PRODUCTOS_CARRO')
    }
  },
  modules: {
  }
})
