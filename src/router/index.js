import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue';
import home from '../views/Home.vue';
import Kontak from '../views/Kontak.vue';
import produkViews from '../views/Produk.vue';
import LayoutAdmin from '../layout/layout.vue';
import admin from '../views/admin/dashboard.vue';
import tabel from '../views/tabel/tabel_user.vue';
import profile from '../views/admin/profile.vue';
import kontak from '../views/tabel/tabel_kontak.vue';
import editProduk from '../views/admin/editProduk.vue';
import addProduk from '../views/admin/addProduk.vue';
import Produk from '../views/admin/produk.vue';
import Informasi from '../views/Informasi.vue';
import informasi from '../views/admin/informasi.vue';
import addInformasi from '../views/admin/addInformasi.vue';
import editInformasi from '../views/admin/editInformasi.vue';


function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
if(localStorage.getItem('token'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { requireGuest: true },
    },
    {
      path: '/Kontak',
      name: 'Kontak',
      component: Kontak
    },
    {
      path: '/produkViews',
      name: 'produkViews',
      component: produkViews
    },
    {
      path: '/Informasi',
      name: 'Informasi',
      component: Informasi
    },

     {
      path: '/admin',
      name: 'LayoutAdmin',  
      component: LayoutAdmin,
      beforeEnter: guardMyroute,
      children: [
        {
          path: '/admin',
          name: 'admin',
          component: admin, 
        },
        {
          path: '/admin/tabel',
          name: 'tabel',
          component: tabel,
        },
        {
          path: '/admin/profile',
          name: 'profile',
          component: profile,
        },
         {
          path: '/admin/kontak',
          name: 'AdminKontak',
          component: kontak,
        },
        {
            path: '/admin/editProduk/:id',
            name: 'editProduk',
            component: editProduk,
        },
        {
            path: '/admin/editInformasi/:id',
            name: 'editInformasi',
            component: editInformasi,
        },
        {
            path: '/admin/addProduk',
            name: 'addProduk',
            component: addProduk
        },
          {
            path: '/admin/addInformasi',
            name: 'addInformasi',
            component: addInformasi
          },
         {
          path: '/admin/produk', 
          name: 'Produk',
          component: Produk,
        },
          {
          path: '/admin/informasi', 
          name: 'informasi',
          component: informasi,
        },
      ]
    },
      
  ]
})

export default router
