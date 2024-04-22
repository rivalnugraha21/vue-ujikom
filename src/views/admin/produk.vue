
<template>
    <div class="-ml-28 w-screen flex justify-center">
      <div class="mt-8 max-w-screen-lg px-2">
        <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
          <p class="flex-1 text-base font-bold text-gray-900">Daftar Produk</p>
        </div>
  
        <div class="mt-6 overflow-hidden rounded-xl border shadow">
          <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
            <thead class="hidden border-b lg:table-header-group">
              <tr>
                <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">ID</th>
                <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Nama Produk</th>
                <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Deskripsi</th>
                <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Gambar</th>
                <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">STATUS</th>
              </tr>
            </thead>
            <tbody class="lg:border-gray-300">
              <tr v-for="product in getAllProducts?.data" :key="product.id">
                <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ product.id }}</td>
                <td class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">{{ product.nama_produk }}</td>
                <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ product.description }}</td>
                <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">
                  <img :src="product.gambar" alt="Gambar Produk" class="h-16 w-16">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('produk', ['getAllProducts']),
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      ...mapActions('produk', ['fetchProducts']),
    },
  };
  </script>
  
  <style>
    /* styles here */
  </style>
  
