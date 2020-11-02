<template>
  <div>
    <div class="container">
      <h1>Home Page {{ $store.state.todos.numX }}</h1>
      <button @click="addXBtnClick">numX + 1</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: "indexPage",
  methods: {
    ...mapMutations('todos', ['addX']),
    addXBtnClick() {
      this.addX();
    }
  }
};
</script>

<style>
</style>
