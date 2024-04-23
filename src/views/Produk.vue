<template>
  <header
    class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
    <a href="" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
      <span class="mr-2 text-4xl text-cyan-500">
        <div class="w-20">
          <img
            src="https://img.freepik.com/free-vector/vector-motorcycle-engine-with-wings-illustration_1284-43392.jpg?t=st=1708931353~exp=1708934953~hmac=6b93cd6352e1974a37905e30f2370ffb09675569edb9ac5fec8cad50da9ff04e&w=826"
            alt="" class="" />
        </div>
      </span>
      SwifterMachine
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation"
      class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li class="font-bold md:mr-12"><a href="/">Home</a></li>
        <li class="md:mr-12"><a href="Kontak">Kontak</a></li>
      </ul>
    </nav>
  </header>

  <div class="relative mb-10 pt-8 md:mb-16">
    <h2 class="mb-4 text-center font-serif text-3xl font-bold text-black-900 md:mb-6 md:text-4xl">PRODUK</h2>
  </div>
  <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
    <article
      class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg"
      v-for="item in produk" :key="item.id">
      <a href="">
        <img :src="item.gambar" class="h-56 w-full object-cover" alt="" />
        <div class="flex-auto px-6 py-5">
          <span class="mb-2 flex items-center text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">

            </svg>
          </span>
          <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">{{ item.nama }}</h3>
          <p class="mb-4 text-base font-light">{{ item.deskripsi }}</p>
          <a href="#" @click="openWhatsApp"
            class="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-blue-600">
            <span
              class="inline-block cursor-pointer select-none rounded-full 
              border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle
               text-sm font-semibold leading-normal text-white no-underline shadow-sm">Pembelian Melalui Wa</span>
          </a>
        </div>
      </a>
    </article>
  </div>
</template>

<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;900&display=swap"
  rel="stylesheet">
  </link>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('datauser', ['getDataUser']),
    ...mapGetters('produk', ['getAllProducts']),
    ...mapGetters('kontak', ['getDataKontak']),
    users() {
      return this.getDataUser;
    },
    produk() {
      return this.getAllProducts.data;
    },
    pesan() {
      return this.getDataKontak;
    }
  },
  methods: {
    ...mapActions('datauser', ['fetchDataUser']),
    ...mapActions('produk', ['fetchProducts']),
    ...mapActions('kontak', ['fetchDataKontak']),
    openWhatsApp() {
      // Ganti nomor telepon sesuai dengan nomor tujuan Anda
      const phoneNumber = "628222314484"; // contoh nomor Indonesia
      // Pesan yang ingin Anda kirimkan (opsional)
      const message = "Halo, saya tertarik dengan pembelian melalui WhatsApp.";

      // Buat URL untuk membuka WhatsApp dengan nomor dan pesan yang ditentukan
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      // Buka tautan WhatsApp dalam jendela baru
      window.open(url, '_blank');
    }
  },
  mounted() {
    this.fetchDataUser();
    this.fetchProducts();
    this.fetchDataKontak();
  }
}
</script>