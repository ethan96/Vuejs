<template>
  <div>
    <div class="container">
      <!-- <h1>Home Page {{ $store.state.todos.numX }}</h1> -->
      <h1>{{ getX }}</h1>
      <button @click="addXBtnClick">numX + 1</button>
      <TodoApp />
      <nuxt-link to="/todo-list">Go Todo list</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
import TodoApp from "@/components/TodoApp"

console.log("map mutations 回傳物件", mapMutations("todos", ["addX"]));

export default {
  name: "indexPage",
  methods: {
    //取得store/todos裡的addX函數
    ...mapMutations('todos', ['addX']),
    addXBtnClick() {
      this.addX();
    }
  },
  components: {
    TodoApp: TodoApp
  },
  computed: {
    ...mapGetters("todos", ["getX"])
  }
};
</script>

<style>
</style>
