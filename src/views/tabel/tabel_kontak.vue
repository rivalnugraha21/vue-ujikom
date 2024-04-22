<template>
    <div class="text-gray-900 ml-64 mt-20 p-10">
        <div class="flex items-center justify-between pb-6">
            <div>
                <h2 class="font-semibold text-gray-700">KONTAK</h2>
            </div>
        </div>
        <div class="overflow-y-hidden rounded-lg border">
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                            <th class="px-5 py-3">ID</th>
                            <th class="px-5 py-3">NAMA</th>
                            <th class="px-5 py-3">EMAIL</th>
                            <th class="px-5 py-3">PESAN</th>
                            <th class="px-5 py-3">STATUS </th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-500">
                        <tr v-for="Kontak in getDataKontak" :key="Kontak.id">
                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                <p class="whitespace-no-wrap">{{ Kontak.id }}</p>
                            </td>
                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                <p class="whitespace-no-wrap">{{ Kontak.nama }}</p>
                            </td>
                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                <p class="whitespace-no-wrap">{{ Kontak.email }} </p>
                            </td>
                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                <p class="whitespace-no-wrap">{{ Kontak.pesan }} </p>
                            </td>
                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                <p class="whitespace-no-wrap">
                                <div class="flex space-x-4">
                                    <button @click="onDelete(Kontak)"
                                        class="flex items-center text-red-500 hover:text-red-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="h-6 w-6 mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Delete
                                    </button>
                                </div>

                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import kontak from '@/store/modules/kontak';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            modalOpen: false
        };
    },
    computed: {
        ...mapGetters('kontak', ['getDataKontak'])
    },
    methods: {
        ...mapActions('kontak', ['fetchDataKontak', 'deleteKontak']),
        openModal() {
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
        },
        async onDelete(Kontak) {
            try {
                const confirmed = await Swal.fire({
                    title: 'apakah kamu yakin?',
                    text: "tekan y data akan menghilang",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                });

                if (confirmed.isConfirmed) {
                    await this.deleteKontak(Kontak.id);
                    await this.fetchDataKontak();
                    Swal.fire(
                        'Deleted!',
                        'Your contact has been deleted.',
                        'success'
                    );
                }
            } catch (error) {
                console.error('Error deleting kontak:', error);
                Swal.fire(
                    'Error!',
                    'An error occurred while deleting the contact.',
                    'error'
                );
            }
        }
    },
    mounted() {
        this.fetchDataKontak();
    }
};
</script>
