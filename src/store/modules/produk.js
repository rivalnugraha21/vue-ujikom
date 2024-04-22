
import axios from 'axios';

const produk = {
  namespaced: true,
  state: {
    products: [],
    currentProduct: null,
  },
  getters: {
    getAllProducts: (state) => state.products,
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    },
    getCurrentProduct: (state) => state.currentProduct,
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/produk");
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchProductById({ commit }, productId) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/produk/${productId}`);
        commit("SET_CURRENT_PRODUCT", response.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async createProduct({ commit }, productData) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/produk", productData);
        commit("ADD_PRODUCT", response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    // actions lainnya ...
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CURRENT_PRODUCT(state, product) {
      state.currentProduct = product;
    },
    ADD_PRODUCT(state, newProduct) {
      state.products.push(newProduct);
    },
  },
};

export default produk;
