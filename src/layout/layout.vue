<template>
    <div class="flex">
        <sidebar />
        <div class="admin-container">
            <div class="admin-content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from "../admin/sidebar.vue";
</script>

<style scoped>
.flex {
    display: flex;
}

.sidebar {
    /* Ganti dengan properti CSS yang sesuai untuk sidebar Anda */
}

.admin-container {
    /* Ganti dengan properti CSS yang sesuai untuk kontainer admin */
}

.admin-content {
    /* Ganti dengan properti CSS yang sesuai untuk konten admin */
}
</style>
