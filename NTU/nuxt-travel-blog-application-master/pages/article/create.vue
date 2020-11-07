<template>
  <div>
    <header class="jumbotron">
      <div class="container">
        <h1>Create Article Page</h1>
      </div>
    </header>
    <section class="py-5">
      <div class="container">
        <!-- 新增文章表單 -->
        <form>
          <!--<InputGroup label="主標題" @onChange="updateTitle" /> 如果不想要每個input更新都寫一組methods的話，可改用以下寫法-->
          <InputGroup label="主標題" :defaultValue="title" @onChange="(text) => (title = text)" />
          <InputGroup label="城市" @onChange="(text) => (city = text)" />
          <TagInputGroup />
        </form>
        <!-- 新增文章表單 end -->
        <p>標題: {{ title }}</p>
        <p>城市: {{ city }}</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "CreateArticlePage",
  data() {
    return {
      title: "",
      city: ""
    }
  },
  methods: {
    updateTitle(text) {
      this.title = text;
    },
    updateCity(text) {
      this.city = text;
    }
  }
};
</script>
<style scoped>
h1 {
  color: #ff0000;
}
</style>