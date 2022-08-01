<template>
  <NavBar />
  <router-view></router-view>
  <FooterComponent />
</template>

<script>
import NavBar from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,400&family=Poppins&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  background: #f1fbff;
}
.section-padding {
  padding: 100px 0;
}
</style>
