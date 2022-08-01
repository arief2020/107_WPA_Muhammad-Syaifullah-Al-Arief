<template>
  <div class="col-12 colmd-12 col-lg-4" v-for="data in DataCardService" :key="data.title">
    <div class="card text-white text text-center bg-dark pb-2">
      <div class="card-body">
        <i :class="data.icon"></i>
        <h3 class="card-title">{{data.title}}</h3>
        <p class="lead">
          {{data.Description}}
        </p>
        <button class="btn btn-warning text-dark">Read More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardService", 
  props: {
    DataCardService: Array,
  }
}
</script>

<style scoped>
.services .card-body i{
    font-size: 50px;
}
</style>