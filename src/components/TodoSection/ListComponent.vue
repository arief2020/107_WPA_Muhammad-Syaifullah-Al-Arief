<template>
  <div style="margin-top: 20px">
    <ul class="list-group">
      <li class="list-group-item" v-for="(todo, index) in todos" :key="index">
        <div class="row">
          <div class="col">
            <span v-if="todo.isDone">
              <del>{{ todo.activity }}</del>
            </span>
            <span v-else>{{ todo.activity }}</span>
          </div>
          <div class="col-auto">
            <div class="row gx-2">
              <div class="col">
                <button @click="deleteTodo(index)" class="btn btn-danger">
                  X
                </button>
              </div>
              <div class="col">
                <button @click="done(index)" class="btn btn-info">
                  {{ todo.isDone ? "cancel" : "done" }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  methods: {
    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    },
    done(index) {
      this.$emit("doneTodo", index);
    },
  },
};
</script>

<style>
.list-group {
  text-align: start;
}
</style>
