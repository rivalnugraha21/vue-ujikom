<template>
    <div class="h-screen bg-gray-100">
        <div class="h-screen w-64 pb-10">
            <div
                class="flex h-full flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md">
                <div class="flex mt-10 items-center px-4">
                    <img class="h-12 w-auto max-w-full align-middle" src="" alt="" />
                    <div class="flex ml-3 flex-col">
                        <h3 class="font-medium">Sarah Carter</h3>
                        <p class="text-xs text-gray-500">Sr. Engineer</p>
                    </div>
                </div>

                <span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Analytics</span>

                <div class="flex mt-3 flex-1 flex-col">
                    <nav class="flex-1">
                        <ul>
                            <li>
                                <router-link to="/admin">
                                    <a
                                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                    </a>
                                </router-link>
                            </li>

                            <li>
                                <router-link
                                    class="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"
                                    to="/admin/kontak">
                                    <span class="mr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </span>
                                    Pengguna
                                </router-link>
                            </li>
                        </ul>
                    </nav>

                    <span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Product Management</span>

                    <nav class="flex-1">
                        <ul>
                            <li>
                                <router-link
                                    class="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"
                                    to="/admin/produk">
                                    <svg class="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                            class=""></path>
                                    </svg>
                                    Produk
                                </router-link>
                            </li>

                            <li>
                                <router-link
                                    class="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"
                                    to="/admin/profile">
                                    <svg class="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    Profile
                                </router-link>
                            </li>
                        </ul>
                    </nav>

                    <span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Content Management</span>

                    <nav class="flex-1">
                        <ul>
                            <li>
                                <a href="#"
                                    class="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4">
                                    <svg class="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                    Blogs
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button
                        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        @click="validateLogout">
                        Logout
                    </button>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    methods: {
        validateLogout() {
            if (confirm('Apakah Anda yakin ingin logout?')) {
                this.logoutAndRedirect();
            } else {
                alert('Logout dibatalkan');
            }
        },
        logoutAndRedirect() {
            // Lakukan proses logout di sini
            // Contoh: hapus token, bersihkan data pengguna dari local storage, dll.

            // Tampilkan notifikasi bahwa logout berhasil
            alert('Anda telah berhasil logout');

            // Redirect ke halaman login
            // Ganti '/login' dengan path halaman login yang sesuai
            window.location.href = '/login';
        }
    }
}
</script>
