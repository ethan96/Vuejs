<template>
  <div>
    <div class="container">
      <h1>TODO List</h1>
      <!-- TODO: 設計新增待辦事項UI -->
      <div class="create-todo-ui">
        <!--當表單送出時會執行 create to do-->
        <form @submit.prevent="createTodo">
          <input v-model="todoText" type="text" placeholder="請輸入代辦內容" required />
          <select v-model="todoCategory" required>
            <option value="" disabled>請選擇類別</option>
            <option value="財務">財務</option>
            <option value="健康">健康</option>
            <option value="學習">學習</option>
          </select>
          <button>新增</button>
        </form>
        <h3>準備新增的代辦內容: {{ todoText }}</h3>
      </div>
      <!-- TODO: 待辦事項列表 -->
      <!--<p>{{ todoList }}</p>-->
      <div v-if="todoList.length > 0" class="todo-list-ui">
        <!--每一個代辦事項模板 start-->
        <div v-for="todo in todoList" :key="todo.createdAt" class="todo-item">
          <div class="todo-category">{{ todo.category }}</div>
          <div class="todo-text">{{ todo.text }}</div>
        </div>
        <!-- 每一個代辦事項的模板 end-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "todoListPage",
  data() {
    return {
      todoText: "",
      todoCategory: "",
      //所有的代辦事項清單
      todoList: []
    }
  },
  methods: {
    createTodo() {
      console.log('當表單被送出了');
      //TODO: 描述一份代辦事項的資料(內容,分類,建立時間)
      const todo = {
        text: this.todoText,
        category: this.todoCategory,
        createdAt: new Date().getTime()
      };
      console.log("[新代辦]", todo);
      this.todoList.push(todo); //[].push('data1') => { 'data1'}
    }
  }
};
</script>