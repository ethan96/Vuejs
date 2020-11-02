<template>
  <div>
    <div class="container">
      <h1>TODO List</h1>
      <div class="create-todo-ui">
        <!--當表單送出時會執行 create to do-->

        <CreateTodoForm
          @onFormSubmit="createTodo"
        /> <!--把原本的form換成component-->
        <!--
        <form @submit.prevent="createTodo">
          <input v-model="todoText" type="text" placeholder="請輸入代辦內容" required />
          <select v-model="todoCategory" required>
            <option value="" disabled>請選擇類別</option>
            <option value="財務">財務</option>
            <option value="健康">健康</option>
            <option value="學習">學習</option>
          </select>
          <button :disabled="Boolean(formErrorText)">新增</button>
        </form>
        -->
        <h3>準備新增的代辦內容: {{ todoText }}</h3>
        <!--表單錯誤提示 sample 1-->
        <div v-if="todoText.length < 1">
          內容必填
        </div>
        <div v-if="!Boolean(todoText)">
          內容必填
        </div>
        <!--End sample 1-->
        <!-- sample 2-->
        <!-- <div>{{ formErrorText }}</div>
        <ul v-html="formErrorHtml"></ul> -->
        <!-- End sample 2-->
      </div>
      <!-- TODO: 待辦事項列表 -->
      <!--<p>{{ todoList }}</p>-->
      
      <!-- <div v-if="todoList.length > 0" class="todo-list-ui">
        每一個代辦事項模板 start
        <div v-for="todo in todoList" :key="todo.createdAt" class="todo-item">
          <div class="todo-category">{{ todo.category }}</div>
          <div class="todo-text">{{ todo.text }}</div>
        </div>
        每一個代辦事項的模板 end
      </div> -->
      
      <!--用模板替代 start-->
      <TodoList />
      <div v-if="todoList.length > 0" class="todo-list-ui">
        <!--TodoItem category="財務" text="Todo1" />-->
        <!-- <TodoItem :todo="{ category: '學習', text: 'Todo1'}" /> -->
        <TodoItem v-for="{todo, idx} in todoList" :key="todo.createdAt" :todo="todo" @onRemoveClick="removeItem(idx)" />
      </div>
      <!--用模板替代 end-->
    </div>
  </div>
</template>
<script>
import CreateTodoForm from "@/components/CreateTodoForm";
import TodoItem from "@/components/TodoItem";
import TodoList from "@/components/TodoList";
export default {
  name: "todoListPage",
  components: {
    TodoItem: TodoItem
  },
  computed: {
    // formErrorText() {
    //   //預設錯誤訊息是空字串
    //   let errorText = "";
    //   //如果 todoText 沒填，就加入一段錯誤訊息
    //   if (this.todoText.length < 1) {
    //     errorText += "*內容必填寫";
    //   }
    //   if (!this.todoCategory) {
    //     errorText += "*類別必選取";
    //   }
    //   //回傳錯誤訊息
    //   return errorText;
    // },
    formErrorHtml() {
      return "ABC";
    }
  },
  data() {
    return {
      todoText: "",
      todoCategory: "",
      //所有的代辦事項清單
      todoList: []
    }
  },
  methods: {
    createTodo(todo) { //todo是從 CreateToddoForm帶入來的，原本沒有
      // console.log('當表單被送出了');
      // //TODO: 描述一份代辦事項的資料(內容,分類,建立時間)
      // const todo = {
      //   text: this.todoText,
      //   category: this.todoCategory,
      //   createdAt: new Date().getTime()
      // };
      // console.log("[新代辦]", todo);
      this.todoList.push(todo); //[].push('data1') => { 'data1'}
    },
    removeItem(idx) {
      console.log("[準備移除某個待辦]");
      //移除一筆位於 idx 的資料
      this.todoList.splice(idx, 1);
    }
  }
};
</script>