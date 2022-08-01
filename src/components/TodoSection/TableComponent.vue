<template>
  <section class="section-padding">
    <div class="container">
      <label for="name">Name</label><br />
      <input v-model="data.name" type="text" /><br />
      <label for="age">Age</label><br />
      <input v-model="data.age" type="number" /><br />
      <label for="description"> Deskripsi</label><br />
      <input v-model="data.description" type="text" /><br />
      <button class="btn btn-primary" @click="tambah">ADD</button>
      <ul>
        <li v-for="datam in dataForm" :key="datam">
          {{ datam.name }} || {{ datam.age }} || {{ datam.deskription }} ||
        </li>
      </ul>
    </div>
  </section>
  <section class="section-padding">
    <div class="container">
      <table class="table table-secondary table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(datam, index) in datas" :key="datam.name">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ datam.name }}</td>
            <td>{{ datam.age }}</td>
            <td>{{ datam.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dataForm: Array,
  },
  data() {
    return {
      datas: [
        {
          name: "arief",
          age: "20",
          description: "blablbalba",
        },
        {
          name: "adi",
          age: "313",
          description: "blablbalba",
        },
      ],
      data: {
        name: "",
        age: 0,
        description: "",
      },
    };
  },
  methods: {
    tambah() {
      this.age = parseInt(this.data.age);
      this.datas.push(this.data);
      console.log(this.datas);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("datas", JSON.stringify(this.datas));
    },
  },
  mounted() {
    // if (this.datas == null) {
    //   this.saveToLocalStorage()
    //   }
      // this.datas = JSON.parse(localStorage.getItem("datas"));
    // this.datas = JSON.parse(localStorage.getItem("datas"));
    // console.log(this.datas);
    // console.log(this.datas);

    // if(this.datas.length > 2) {
    // }
    this.datas = JSON.parse(localStorage.getItem("datas"));
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.datas = res;
      });
    // if (localDatas) {
    //   this.datas = localDatas
    // }
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
