<template>
    <div class="mx-auto max-w-lg px-4 py-20 lg:max-w-screen-lg" v-for="item in informasi" :key="item.id">
        <div class="mb-10">
            <center>
                <div class="mb-8 text-3xl font-medium leading-normal sm:text-4xl sm:leading-relaxed">Informasi
                    modifikasi
                    sparepart sepeda motor</div>
            </center>
        </div>
        <div class="flex flex-col lg:flex-row">
            <div class="mr-4">
                <div class="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">{{ item.judul }}</div>
                <div class="text-gray-500">{{ item.deskripsi }}</div>
            </div>
            <div class="mr-4">
                <div class="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">Peningkatan Performa</div>
                <div class="text-gray-500"> Banyak pemilik sepeda motor melakukan modifikasi untuk meningkatkan performa
                    mesin
                    mereka. Ini bisa meliputi pemasangan knalpot aftermarket yang lebih bebas aliran,
                    penggantian filter udara dengan jenis yang lebih baik,
                    atau bahkan peningkatan mesin seperti bore-up atau penggantian camshaft</div>
            </div>
            <div class="mr-4">
                <div class="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">Penambahan Aksesori</div>
                <div class="text-gray-500">Banyak pemilik sepeda motor juga memilih untuk menambahkan
                    aksesori untuk meningkatkan fungsionalitas atau kenyamanan. Ini bisa mencakup pemasangan
                    box atau carrier, windshield tambahan, pemanas handle grip, atau sistem navigasi</div>
            </div>
            <div class="mr-4">
                <div class="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">Penyesuaian Ergonomis</div>
                <div class="text-gray-500">Modifikasi juga dapat dilakukan untuk meningkatkan kenyamanan
                    dan ergonomi pengendara. Contohnya termasuk pemasangan setang yang lebih tinggi atau
                    lebih rendah, penambahan footpeg yang lebih lebar, atau pemasangan jok yang lebih nyaman</div>
            </div>
        </div>
    </div>
    <div class="w-fit mx-auto mt-10 flex space-x-2">
        <div class="h-0.5 w-2 bg-gray-600"></div>
        <div class="h-0.5 w-32 bg-gray-600"></div>
        <div class="h-0.5 w-2 bg-gray-600"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('datauser', ['getDataUser']),
        ...mapGetters('informasi', ['getAllInformasis']),
        ...mapGetters('kontak', ['getDataKontak']),
        users() {
            return this.getDataUser;
        },
        informasi() {
            return this.getAllInformasis.data;
        },
        pesan() {
            return this.getDataKontak;
        }
    },
    methods: {
        ...mapActions('datauser', ['fetchDataUser']),
        ...mapActions('informasi', ['fetchInformasis']),
        ...mapActions('kontak', ['fetchDataKontak']),
        // openWhatsApp() {
        //     // // Ganti nomor telepon sesuai dengan nomor tujuan Anda
        //     // const phoneNumber = "628222314484"; // contoh nomor Indonesia
        //     // // Pesan yang ingin Anda kirimkan (opsional)
        //     // const message = "Halo, saya tertarik dengan pembelian melalui WhatsApp.";

        //     // // Buat URL untuk membuka WhatsApp dengan nomor dan pesan yang ditentukan
        //     // const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        //     // // Buka tautan WhatsApp dalam jendela baru
        //     // window.open(url, '_blank');
        // }
    },
    mounted() {
        this.fetchDataUser();
        this.fetchInformasis();
        this.fetchDataKontak();
    }
}
</script>