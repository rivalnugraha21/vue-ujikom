<template>
    <div class="m-10 max-w-sm">
        <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
            <div class="relative mx-auto w-36 rounded-full">
                <span
                    class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                <img class="mx-auto h-auto w-full rounded-full"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt="" />
            </div>
            <ul
                class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                <div class="flex ml-3 flex-col" v-if="user">
                    <h3 class="font-medium">{{ user.name }}</h3>
                    <h3 class="font-medium">{{ }}</h3>
                    <h3 class="font-medium">{{ }}</h3>
                </div>
            </ul>
            <button @click="editProfile"
                class="mt-3 py-1 px-3 rounded text-sm bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mx-auto block">Edit
                Profile</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('datauser', ['getCurrentUser']), // Mengambil getter getUserData dari datauser module
        user() {
            return this.getCurrentUser;
        },
    },
    created() {
        // Panggil metode untuk mengambil data pengguna saat komponen dibuat
        this.fetchCurrentUser();
    },
    methods: {
        ...mapActions('datauser', ['fetchCurrentUser']), // Mengambil action fetchUserData dari datauser module
        async getUserData() {
            // Ambil data pengguna dari state menggunakan getter
            const userData = this.getUserData;
            // Jika data pengguna tersedia
            if (userData) {
                // Setel nama pengguna dan email pengguna dari data yang diambil
                this.userName = userData.name;
                this.userEmail = userData.email;
            }
        },
    },
}
</script>
