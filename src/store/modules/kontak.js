
import axios from "axios";

const kontak = {
  namespaced: true,
  state: {
    dataKontak: [],
  },
  getters: {
    getDataKontak: (state) => state.dataKontak,
  },
  actions: {
    async fetchDataKontak({ commit }) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        const { data } = await axios.get("http://localhost:8080/api/v1/kontak", config);
        commit("SET_KONTAK_DATA", data.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async deleteKontak({ commit }, kontakId) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/kontak/${kontakId}`);
        commit("DELETE_KONTAK", kontakId);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async sendEmail({ commit }, formData) {
      try {
        // Mengirim data formData ke backend untuk diproses dan dikirimkan melalui email
        await axios.post("http://localhost:8080/api/v1/kontak/", formData);
        // Jika pengiriman email berhasil, Anda bisa melakukan sesuatu di sini, misalnya menampilkan pesan sukses kepada pengguna
        console.log("Email has been sent successfully!");
      } catch (error) {
        console.error(error);
        // Jika terjadi error saat mengirim email, Anda bisa menangani error di sini, misalnya menampilkan pesan error kepada pengguna
        throw error;
      }
    },
  },
  mutations: {
    SET_KONTAK_DATA(state, dataKontak) {
      state.dataKontak = dataKontak;
    },
    DELETE_KONTAK(state, kontakId) {
      state.dataKontak = state.dataKontak.filter(kontak => kontak.id !== kontakId);
    },
  },
};

export default kontak;