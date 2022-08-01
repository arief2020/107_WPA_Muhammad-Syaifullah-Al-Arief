<template>
  <section class="section-padding">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-10">
              <input
                v-model="isi"
                type="text"
                class="form-control"
                @keyup.enter="add"
              />
              <div class="col-2">
                <button class="btn btn-success" @click="add">ADD</button>
              </div>
            </div>
            <ListComponent
              :todos="todos"
              @deleteTodo="deleteTodo_"
              @doneTodo="doneTodo_"
            />
            <small>total todo: {{ totalTodo }}</small>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="name">name</label><br />
              <input type="text" /><br />
              <label for="age">age</label><br />
              <input type="age" /><br />
              <label for="deskripsi">deskripsi</label><br />
              <input type="deskripsi" /><br />
            </div>
            <div class="col-2">
              <button class="btn btn-warning" @click="tambahdatajson">
                tambah
              </button>
            </div>
          </div>
          <div class="row">
            <ul>
              <li v-for="data in datajson" :key="data.id">
                {{ data.firstName }}
              </li>
              <!-- <li v-for="data in datajson" :key="data.id">{{ data.id }}</li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ListComponent from "./ListComponent.vue";
export default {
  components: {
    ListComponent,
  },
  data() {
    return {
      isi: "",
      todos: [],
      datajson: [],
    };
  },
  computed: {
    totalTodo() {
      return this.todos.length;
    },
  },
  methods: {
    add() {
      this.todos.unshift({
        activity: this.isi,
        isDone: false,
      });
      this.isi = "";
      this.saveToLocalStorage();
    },
    deleteTodo_(todoIndex) {
      this.todos = this.todos.filter((item, index) => {
        if (index != todoIndex) {
          return item;
        }
      });
      this.saveToLocalStorage();
    },
    doneTodo_(todoIndex) {
      this.todos = this.todos.filter((item, index) => {
        if (index == todoIndex) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    tambahdatajson() {
      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Arief",
          lastName: "oioio",
          age: 250,
          /* other user data */
        }),
      })
        .then((res) => res.json())
        .then(console.log);
    },
  },
  mounted() {
    this.saveToLocalStorage()
    if(this.saveToLocalStorage() !== null) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
    // fetch("/data.json")
    //   .then((res) => res.json())
    //   .then((res) => (this.datajson = res));
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        this.datajson = res.users;
        console.log(this.datajson);
      });
  },
};
</script>
