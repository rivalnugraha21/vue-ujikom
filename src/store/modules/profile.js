
import axios from "axios";

const datauser = {
  namespaced: true,
  state: {
    dataUser: [],
    currentUser: null,
  },
  getters: {
    getDataUser: (state) => state.dataUser,
    getCurrentUser: (state) => state.currentUser,
  },
  actions: {
    async fetchDataUser({ commit }) {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/user/");
        commit("SET_USERDATA", response.data.data); // Memanggil mutation SET_USERDATA dengan data yang diterima dari server
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async postUserData({ commit }, userData) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/user/", userData);
        commit("ADD_USER", response.data); // Memanggil mutation ADD_USER dengan data baru yang diterima dari server
        return response.data; // Mengembalikan data respons dari server jika diperlukan
      } catch (error) {
        alert(error);
        console.error(error);
        throw error; // Melemparkan error untuk menangani di luar action jika diperlukan
      }
    },
    async deleteUserData({ commit }, userId) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/user/${userId}`);
        commit("DELETE_USER", userId); // Memanggil mutation DELETE_USER dengan id user yang dihapus
      } catch (error) {
        alert(error);
        console.error(error);
        throw error; // Melemparkan error untuk menangani di luar action jika diperlukan
      } 
    },
    async editUserData({ commit }, userData) {
      try {
        const response = await axios.put(`http://localhost:8080/api/v1/user/${userData.id}`, userData);
        commit("EDIT_USER", response.data); // Memanggil mutation EDIT_USER dengan data pengguna yang diperbarui dari server
        return response.data; // Mengembalikan data respons dari server jika diperlukan
      } catch (error) {
        alert(error);
        console.error(error);
        throw error; // Melemparkan error untuk ditangani di luar action jika diperlukan
      }
    },
    async fetchCurrentUser({ commit }) {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (!token) {
          throw new Error('Token not found');
        }

        const config = {
          headers: {
            'Authorization': `Bearer ${token}` // Set authorization header with token
          }
        };

        const response = await axios.get("http://localhost:8080/api/v1/user/me", config); // Fetch user data using /me endpoint
        commit("SET_CURRENT_USER", response.data.data); // Commit current user data to state
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    
    // actions lainnya ...
  },
  mutations: {
    SET_USERDATA(state, dataUser) {
      state.dataUser = dataUser;
    },
    ADD_USER(state, newUser) {
      state.dataUser.push(newUser); // Menambahkan user baru ke array dataUser di state
    },
    DELETE_USER(state, userId) {
      state.dataUser = state.dataUser.filter(user => user.id !== userId); // Menghapus user dari array dataUser di state berdasarkan id
    },
    EDIT_USER(state, updatedUser) {
      // Cari indeks pengguna yang akan diperbarui di dalam array dataUser berdasarkan ID
      const index = state.dataUser.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        // Jika pengguna ditemukan, perbarui data pengguna di array dataUser
        state.dataUser.splice(index, 1, updatedUser);
      }
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user; // Set current user data in state
    },
    // mutations lainnya ...
  },
};

export default datauser;
