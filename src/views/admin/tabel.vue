<template>
    <div class="profile">
        <div class="profile-header">
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
        </div>
        <div class="profile-details">
            <h3>Profile Details</h3>
            <ul>
                <li><strong>Username:</strong> {{ user.username }}</li>
                <li><strong>Location:</strong> {{ user.location }}</li>
                <li><strong>Joined:</strong> {{ user.joined }}</li>
                <!-- Tambahkan lebih banyak detail profil sesuai kebutuhan -->
            </ul>
        </div>
        <div class="profile-actions">
            <button @click="editProfile">Edit Profile</button>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'John Doe',
                username: 'johndoe123',
                email: 'johndoe@example.com',
                location: 'New York',
                joined: 'January 1, 2022'
            }
        };
    },
    methods: {
        editProfile() {
            // Redirect to edit profile page or open a modal for editing
            // Implement according to your application's routing and UI logic
            console.log('Editing profile...');
        },
        logout() {
            // Implement logout functionality
            // Redirect to login page or clear session data
            console.log('Logging out...');
        }
    }
};
</script>

<style scoped>
.profile {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.profile-header {
    text-align: center;
    margin-bottom: 20px;
}

.profile-details {
    margin-bottom: 20px;
}

.profile-details ul {
    list-style: none;
    padding: 0;
}

.profile-actions {
    display: flex;
    justify-content: space-around;
}

.profile-actions button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.profile-actions button:hover {
    background-color: #eee;
}
</style>
