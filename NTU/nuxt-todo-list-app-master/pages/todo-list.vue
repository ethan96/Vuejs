<template>
  <div>
    <div class="container">
      <h1>Todo page</h1>
      <TodoApp />
    </div>
  </div>
</template>
<script>
import TodoApp from "@/components/TodoApp";
export default {
  name: "todoPage",
  components: {
    TodoApp: TodoApp
  }
};
</script>