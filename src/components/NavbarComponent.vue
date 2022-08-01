<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <!-- logo -->
      <a class="navbar-brand" href="#"
        ><span class="text-warning">House</span>Cons</a
      >
      <!-- end logo -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
            <!-- <a class="nav-link" href="#">Home</a> -->
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#about">About</a> -->
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#portofolio">Product</a> -->
            <router-link class="nav-link" to="/product">Product</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#team">Team</a> -->
            <router-link class="nav-link" to="/team">Team</router-link>
          </li>
        </ul>
        <button class="btn btn-warning nav-item text-center ms-3" @click="toLogin">LOGIN</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods:{
    toLogin(){
      this.$router.push({path: '/login'})
    }
  }
};
</script>

<style scoped>
.navbar-nav a {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
}



.navbar-light .navbar-brand {
  color: #000;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
}

.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
  color: #000;
}

.navbar-light .navbar-nav .navbar-link {
  color: #000;
}
</style>
