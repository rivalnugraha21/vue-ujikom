<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white shadow-md rounded-md p-6 max-w-md">
            <h1 class="text-2xl font-bold mb-4 text-center">Tambah Informasi Baru</h1>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label for="judul" class="block text-sm font-medium text-gray-700">Tambah Judul Baru</label>
                    <input type="text" id="judul" v-model="formData.judul"
                        class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                </div>
                <div class="mb-4">
                    <label for="deskripsi" class="block text-sm font-medium text-gray-700">Deskripsi</label>
                    <textarea id="deskripsi" v-model="formData.deskripsi" rows="4"
                        class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"></textarea>
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
                judul: '',
                deskripsi: '',
            }
        };
    },
    methods: {
        ...mapActions('informasi', ['createInformasis']), // Mapping createProduct action from vuex store
        async submitForm() {
            try {
                const response = await this.createInformasis(this.formData); // Call createInformasis action with formData
                console.log('Informasis created:', response);
                // Reset form data after successful creation
                this.formData = {
                    judul: '',
                    deskripsi: '',
                };
                this.$router.push('/admin/infpormasi');
            } catch (error) {
                console.error('Error creating informasis:', error);
            }
        }
    }
};
</script>

<style>
/* Add your custom styles here */
</style>
