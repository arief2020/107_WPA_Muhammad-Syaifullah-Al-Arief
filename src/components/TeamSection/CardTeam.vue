<template>
  <div
    class="col-12 col-md-6 col-lg-3"
    v-for="data in CardDataTeam"
    :key="data.name"
  >
    <div class="card text-center">
      <div class="card-body">
        <img :src="data.imgMember" alt="" class="img-fluid rounded-circle" />
        <h3 class="card-title py-2">{{ data.name }}</h3>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi
          voluptatibus sit sunt saepe?
        </p>
        <p class="socials">
          <a href="https://www.linkedin.com/in/muhammad-syaifullah-al-arief-214524151/">
            <i class="bi bi-twitter text-dark mx-1"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-syaifullah-al-arief-214524151/">
            <i class="bi bi-facebook text-dark mx-1"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-syaifullah-al-arief-214524151/">
            <i class="bi bi-linkedin text-dark mx-1"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-syaifullah-al-arief-214524151/">
            <i class="bi bi-instagram text-dark mx-1"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTeam",
  props: {
    CardDataTeam: Array,
  },
};
</script>

<style scoped>
.team .card-body i {
  font-size: 20px;
}
.team .card {
  box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.15);
}
</style>
