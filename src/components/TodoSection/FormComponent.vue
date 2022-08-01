<template>
  <section class="section-padding">
    <div class="container">
      <label for="name">Name</label><br />
      <input v-model="data.name" type="text" /><br />
      <label for="age">Age</label><br />
      <input v-model="data.age" type="number" /><br />
      <label for="description"> Deskripsi</label><br />
      <input v-model="data.deskription" type="text" /><br />
      <button class="btn btn-primary" @click="tambah">ADD</button>
      <ul>
        <li v-for="datam in dataForm" :key="datam">
          {{ datam.name }} || {{ datam.age }} || {{ datam.deskription }} ||
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataForm: [],
      data: {
        name: "",
        age: 0,
        deskription: "",
      },
    };
  },
  methods: {
    tambah() {
      this.age = parseInt(this.data.age);
      this.dataForm.push(this.data);
      console.log(this.dataForm);
    },
  },
  mounted() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => (this.dataForm = res));
  }
};
</script>
