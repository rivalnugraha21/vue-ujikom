import { createStore } from 'vuex';
import auth from './modules/auth';
import datauser from './modules/profile';
import kontak from './modules/kontak';
import produk from './modules/produk';

const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    datauser,
    kontak,
    produk,

  },
});

export default store;