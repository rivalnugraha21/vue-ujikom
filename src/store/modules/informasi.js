
import axios from 'axios';

const informasi = {
  namespaced: true,
  state: {
    informasis: [],
    currentProduct: null,
  },
  getters: {
    getAllInformasis: (state) => state.informasis,
    getInformasisById: (state) => state.currentInformasis,
    getCurrentInformasis: (state) => state.currentInformasis,
  },
  actions: {
    async fetchInformasis({ commit }) {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/informasi");
        commit("SET_INFORMASIS", response.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchInformasisById({ commit }, infrormasisId) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/informasi/${infrormasisId}`);
        commit("SET_CURRENT_INFORMASIS", response.data);
      } catch (error) {
        console.error(error.response.message);
        throw error;
      }
    },
    async createInformasis({ commit }, IndormasisData) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/informasi", IndormasisData);
        commit("ADD_INFORMASIS", response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async updateInformasis({ commit }, informasisData) {
      try {
        const response = await axios.put(`http://localhost:8080/api/v1/informasi/${informasisData.id}`, informasisData);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async deleteInformasis({ commit }, informasisId) {
      try {
        const response = await axios.delete(`http://localhost:8080/api/v1/informasi/${informasisId}`);
        commit("DELETE_INFORMASIS", informasisId);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    // actions lainnya ...
  },
  mutations: {
    SET_INFORMASIS(state, informasis) {
      state.informasis = informasis;
    },
    SET_CURRENT_INFORMASIS(state, informasis) {
      state.currentInformasis = informasis;
    },
    ADD_INFORMASIS(state, newInformasis) {
      state.informasis.push(newInformasis);
    },
    DELETE_INFORMASIS(state, informasisId) {
      state.informasis = state.informasis.filter(informasis => informasis.id !== informasisId);
    },
  },
};

export default informasi;
