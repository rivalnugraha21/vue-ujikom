<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white shadow-md rounded-md p-6 max-w-md">
            <h1 class="text-2xl font-bold mb-4 text-center">Edit Informasi</h1>
            <form @submit.prevent="updateInformasi">
                <div class="mb-4">
                    <label for="judul" class="block text-sm font-medium text-gray-700">Judul Informasi</label>
                    <input type="text" id="judul" v-model="formData.judul"
                        class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                </div>
                <div class="mb-4">
                    <label for="deskripsi" class="block text-sm font-medium text-gray-700">Deskripsi</label>
                    <textarea id="deskripsi" v-model="formData.deskripsi" rows="4"
                        class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"></textarea>
                </div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit
                    Informasi</button>
            </form>
            <!-- {{ informasi }} -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            formData: {
                judul: '',
                deskripsi: '',
            }
        };
    },
    computed: {
        ...mapGetters('informasi', ['getInformasisById']),
        informasi() {
            return this.getInformasisById
        }
    },
    methods: {
        ...mapActions('informasi', ['fetchInformasisById', 'updateInformasis', 'deleteInformasis']), // Perbaiki pemanggilan aksi dengan nama yang benar

        async updateInformasi() {
            const informasis = {
                id: this.$route.params.id, // Perbaiki pengambilan ID
                judul: this.formData.judul, // Ambil nilai dari formData
                deskripsi: this.formData.deskripsi,
            };
            try {
                const success = await this.$store.dispatch('informasi/updateInformasis', informasis); // Perbaiki pemanggilan aksi dengan nama yang benar
                if (success) {
                    this.$router.push('/admin/informasi')
                    alert("Berhasil memperbarui informasi");
                }
            } catch (error) {
                alert("Gagal memperbarui informasi");
            }
        },

        async fetchData() {
            await this.fetchInformasisById(this.$route.params.id);
            const informasi = this.informasi.data;
            console.log(informasi); // Tambahkan ini untuk memeriksa nilai produk di konsol browser
            if (informasi) {
                this.formData = {
                    judul: informasi.judul,
                    deskripsi: informasi.deskripsi,
                };
            } else {
                // Jika data informasi tidak ditemukan, set formData ke objek kosong atau nilai default
                this.formData = {
                    judul: '',
                    deskripsi: '',
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
