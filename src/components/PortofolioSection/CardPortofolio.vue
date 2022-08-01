<template>
  <div class="col-12 col-md-12 col-lg-4" v-for="data in CardPortofolioData" :key="data.title">
    <div class="card text-light text-center bg-white pb-2">
      <div class="card-body text-dark">
        <div class="img-area mb-47">
          <img :src="data.imgProject" alt="" class="img-fluid" />
          <h3 class="card-title">{{data.title}}</h3>
          <p class="lead">
            {{data.description}}
          </p>
          <button class="btn bg-warning text-dark">Read More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "CardPortofolio",
    props: {
        CardPortofolioData: Array
    }
}
</script>
<style scoped>
.portofolio .card{
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.15);
}
</style>