<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white shadow-md rounded-md p-6 max-w-md">
            <h1 class="text-2xl font-bold mb-4 text-center">Edit Produk</h1>
            <form @submit.prevent="updateProduk">
                <div class="mb-4">
                    <label for="nama_produk" class="block text-sm font-medium text-gray-700">Nama Produk</label>
                    <input type="text" id="nama_produk" v-model="formData.nama"
                        class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                </div>
                <div class="mb-4">
                    <label for="description" class="block text-sm font-medium text-gray-700">Deskripsi</label>
                    <textarea id="description" v-model="formData.deskripsi" rows="4"
                        class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"></textarea>
                </div>
                <div class="mb-4">
                    <label for="gambar" class="block text-sm font-medium text-gray-700">URL Gambar</label>
                    <input type="text" id="gambar" v-model="formData.gambar"
                        class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                </div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit
                    Produk</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            formData: {
                nama: '',
                deskripsi: '',
                gambar: '',
            }
        };
    },
    computed: {
        ...mapGetters('produk', ['getProductById']),
        produk() {
            return this.getProductById
        }
    },
    methods: {
        ...mapActions('produk', ['fetchProductById', 'updateProduct', 'deleteProduct']), // Perbaiki pemanggilan aksi dengan nama yang benar

        async updateProduk() {
            const product = {
                id: this.$route.params.id, // Perbaiki pengambilan ID
                nama: this.formData.nama, // Ambil nilai dari formData
                deskripsi: this.formData.deskripsi,
                gambar: this.formData.gambar,
            };
            try {
                const success = await this.$store.dispatch('produk/updateProduct', product); // Perbaiki pemanggilan aksi dengan nama yang benar
                if (success) {
                    this.$router.push('/admin/produk')
                    alert("Berhasil memperbarui produk");
                }
            } catch (error) {
                alert("Gagal memperbarui produk");
            }
        },

        async fetchData() {
            await this.fetchProductById(this.$route.params.id);
            const produk = this.produk.data;
            console.log(produk); // Tambahkan ini untuk memeriksa nilai produk di konsol browser
            if (produk) {
                this.formData = {
                    nama: produk.nama,
                    deskripsi: produk.deskripsi,
                    gambar: produk.gambar,
                };
            }
        }

    },

    mounted() {
        this.fetchData(); // Fetch product data when component is mounted
    }
};
</script>

<style>
/* Add your custom styles here */
</style>
