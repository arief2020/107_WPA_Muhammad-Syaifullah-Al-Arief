<template>
  <section class="login section-padding">
    <div class="container">
      <div>
        <label for="username">Username</label><br />
        <input v-model="username" type="text" /> <br />
        <label for="password">Password</label><br />
        <input v-model="password" type="password" /><br />
        <button class="btn btn-info" @click="dashboard">LOGIN</button>
      </div>
    </div>
  </section>
</template>

<script>
// import router from 'vue-router'
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    dashboard() {
        if(this.username === "admin" && this.password === "123"){
            return this.$router.push({ path: "/todos" });
        }
        return alert("username atau password salah")
    },
  },
};
</script>
