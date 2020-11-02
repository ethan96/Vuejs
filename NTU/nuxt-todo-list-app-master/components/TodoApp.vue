<template>
  <div>
      <!-- TODO: 設計新增待辦事項UI -->
      <div class="create-todo-ui">
        <!--當表單送出時會執行 create to do-->
        <h1>X: {{ getX }}</h1>
        <h4>todoList: {{ getTodoList }}</h4>
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
      <transition name="bounce">
      <TodoList v-if="showList">
        <!--<div v-if="todoList.length > 0" class="todo-list-ui">-->
        <!--TodoItem category="財務" text="Todo1" />-->
        <!-- <TodoItem :todo="{ category: '學習', text: 'Todo1'}" /> -->

        <!-- <TodoItem v-for="(todo, idx) in todoList" :key="todo.createdAt" :todo="todo" @onRemoveClick="removeItem(idx)" /> -->
        <TodoItem v-for="(todo, idx) in getTodoList" :key="todo.createdAt" :todo="todo" @onRemoveClick="removeItem(idx)" />

        <!--</div>-->
      </TodoList>
      </transition>
      <!--用模板替代 end-->
  </div>
</template>
<script>
// import TodoItem from "@/components/TodoItem";
// import TodoList from "@/components/TodoList";
// import CreateTodoForm from "@/components/CreateTodoForm";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "TodoApp",
  // components: {
  //   TodoItem: TodoItem,
  //   TodoList: TodoList
  // },
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
    // formErrorHtml() {
    //   return "ABC";
    // }
    ...mapGetters("todos", ["getTodoList", "getX"])
  },
  data() {
    return {
      todoText: "",
      todoCategory: "",
      //所有的代辦事項清單
      todoList: [],
      showList: false
    }
  },
  methods: {
    ...mapMutations("todos", ["addItemToList", "removeItemFromList", "initTodoList"]),
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

      this.addItemToList(todo);
      this.updateTodoListToStorage();
    },
    removeItem(idx) {
      //console.log("[準備移除某個待辦]");
      //移除一筆位於 idx 的資料
      this.todoList.splice(idx, 1);
      this.removeItemFromList(idx);
      this.updateTodoListToStorage();
    },
    updateTodoListToStorage() {
      //取得todoList
      const todoList = this.getTodoList;
      //localstorage 名稱
      const key = "nuxt-todo-list";
      //將todolist轉為字串存入localstorage
      window.localStorage.setItem(key, JSON.stringify(todoList));

    }
  },
  created() {

  },
  mounted() {
    //Vue元件放到畫面上的時候
    const storageData = window.localStorage.getItem("nuxt-todo-list");
    //將字串轉回原來的物件
    
    // let todoList = [];
    // if (storageData) {
    //   let todoList = JSON.parse(storageData);
    // }
    const todoList = storageData ? JSON.parse(storageData) : [];
    console.log("todolist", todoList);
    //初始化待辦事項
    this.initTodoList(todoList);
    //晚一秒在show
    setTimeout(() => {
      this.showList = true;
    }, 1000);
  }
};
</script>
<style>
.bounce-enter-active {
  transition: all 1s ease;
}
.bounce-enter {
  opacity: 0;
  transform: scale(0.7) translate(0, 100px);
}
.bounce-enter-to {
  opacity: 1;
  transform: scale(1) translate(0, 0px);
}
</style>