<template>
  <div>
    <header>
      <NavBar />
    </header>
    <div>
      <a v-tooltip.left="'Pour télécharger mon CV 👉'" class="cv border-2 border-right-none border-round-left-xl shadow-3" href="documents/KICIEN-Tania.pdf" download><i class="pi pi-file text-2xl h-auto"></i></a>
    </div>
    <div class="w-9 md:w-11 sm:w11 m-auto mt-3">
      <router-view />
    </div>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  mounted() {
    window.document.title = "Portfolio";
  },
  components: {
    NavBar,
    Footer
  }
};
</script>
<style>
@import url("https://fonts.cdnfonts.com/css/poppins");

body {
  font-family: "poppins" !important;
  margin: 0;
}

.cv {
  display: block;
  position: fixed;
  width: 60px;
  height: 50px;
  line-height: 60px;
  background-color: #8166e3;
  text-align: center;
  color: var(--primary-color-text);
  top: 270px;
  right: 0;
  overflow: hidden;
  cursor: pointer;
  outline: 0 none;
}
</style>