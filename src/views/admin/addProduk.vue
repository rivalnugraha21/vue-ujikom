<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white shadow-md rounded-md p-6 max-w-md">
            <h1 class="text-2xl font-bold mb-4 text-center">Tambah Produk Baru</h1>
            <form @submit.prevent="submitForm">
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
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tambah Produk</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

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
    methods: {
        ...mapActions('produk', ['createProduct']), // Mapping createProduct action from vuex store
        async submitForm() {
            try {
                const response = await this.createProduct(this.formData); // Call createProduct action with formData
                console.log('Product created:', response);
                // Reset form data after successful creation
                this.formData = {
                    nama: '',
                    deskripsi: '',
                    gambar: '',
                };
                this.$router.push('/admin/produk');
            } catch (error) {
                console.error('Error creating product:', error);
            }
        }
    }
};
</script>

<style>
/* Add your custom styles here */
</style>
