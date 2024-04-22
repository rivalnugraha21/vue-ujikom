<template>
  <router-view/>
  <div id="footer">
  <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer.vue';

export default {
  components: {
    Footer
  }
}
</script>