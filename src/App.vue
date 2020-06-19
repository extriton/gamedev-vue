<template>
  <div id="app">
    <div class="content-block">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .content-block {
    margin-bottom: 150px;
  }
}
</style>
