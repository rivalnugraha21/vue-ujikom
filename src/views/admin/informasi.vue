<template>
    <div class="-ml-28 w-screen flex justify-center">
        <div class="mt-8 max-w-screen-lg px-2">
            <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                <p class="flex-1 text-base font-bold text-gray-900">Daftar Informasi</p>
                <button @click="toAddInformasi"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Tambah Informasi
                </button>
            </div>

            <div class="mt-6 overflow-hidden rounded-xl border shadow">
                <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                    <thead class="hidden border-b lg:table-header-group">
                        <tr>
                            <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Judul
                            </th>
                            <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Deskripsi</th>
                        </tr>
                    </thead>
                    <tbody class="lg:border-gray-300">
                        <tr v-for="informasis in getAllInformasis?.data" :key="informasis.id">
                            <td class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">{{ informasis.judul
                                }}</td>
                            <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{
                    informasis.deskripsi }}
                            </td>
                            <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">
                                <button @click="editInformasis(informasis.id)"
                                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
                                <button @click="confirmDeleteInformasis(informasis.id)"
                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
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
        ...mapGetters('informasi', ['getAllInformasis']),
    },
    mounted() {
        this.fetchInformasis();
    },
    methods: {
        ...mapActions('informasi', ['fetchInformasis']),
        toAddInformasi() {
            this.$router.push('/admin/addInformasi')
        },
        editInformasis(informasisId) {
            // Implement logic to navigate to edit informasis page with informasisId
            this.$router.push(`/admin/editInformasi/${informasisId}`);
        },
        confirmDeleteInformasis(informasisId) {
            if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
                this.deleteInformasis(informasisId);
            }
        },
        mutations: {
            SET_INFORMASIS(state, responseData) {
                state.informasis = responseData.data;
            },
            // mutations lainnya ...
        },
        deleteInformasis(informasisId) {
            // Implement logic to delete product with productId
            this.$store.dispatch('informasi/deleteInformasis', informasisId)
                .then(() => {
                    console.log('Informasis deleted successfully:', informasisId);
                    // Optionally, you can fetch products again after deletion
                    // this.fetchProducts();
                })
                .catch(error => {
                    console.error('Error deleting informasis:', error);
                });
        }
    },
};
</script>

<style>
/* styles here */
</style>
