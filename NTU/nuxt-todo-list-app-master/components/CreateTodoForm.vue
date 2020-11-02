<template>
  <div>
    <form @submit.prevent="createTodo">
      <input
        v-model="todoText"
        type="text"
        placeholder="請輸入代辦內容"
        required
      />
      <select v-model="todoCategory" required>
        <option value="" disabled>請選擇類別</option>
        <option value="財務">財務</option>
        <option value="健康">健康</option>
        <option value="學習">學習</option>
      </select>
      <button :disabled="Boolean(formErrorText)">新增</button>
    </form>
    <!-- <ul v-html="formErrorHtml"></ul> -->
    <ul v-html="formErrorText"></ul>
  </div>
</template>
<script>
export default {
  name: "CreateTodoForm",
  computed: {
    formErrorText() {
      //預設錯誤訊息是空字串
      let errorText = "";
      //如果 todoText 沒填，就加入一段錯誤訊息
      if (this.todoText.length < 1) {
        errorText += "*內容必填寫";
      }
      if (!this.todoCategory) {
        errorText += "*類別必選取";
      }
      //回傳錯誤訊息
      return errorText;
    },
    // formErrorHtml() {
    //   return "ABC";
    // }
  },
  data() {
    return {
      todoText: "",
      todoCategory: "",
    };
  },
  methods: {
    createTodo() {
      console.log("當表單被送出了");
      const todo = {
        text: this.todoText,
        category: this.todoCategory,
        createdAt: new Date().getTime(),
      };
      console.log("[新代辦]", todo);
      //使用$emit通知上層元件一個客製化事件
      //this.$emit("自行決定的事件名稱", "要傳給上一層的資料");
      this.$emit("onFormSubmit", todo);
    },
  },
};
</script>