

<template>
  <div>
      <form>
          <InputGroup label="城市" @onChange="(val) => (city = val)" :defaultValue="city"/>
          <TagInputGroup :defaultValue="tagList"
          @onChange="(val) => (tagList = val)" />
      </form>
      <p>標題: {{ title }}</p>
      <p>城市: {{ city }}</p>
      <p>標題列表: {{ tagList }}</p>
  </div>
</template>
<script>
export default {
  name: "CreatePage",
  data() {
      return {
          title: "預設標題",
          city: "台北",
          tagList: ["台灣"],
          authorInfo: "",
          previewImage: "https://picsum.photo/id/192/166/800"
      }
  },
  methods: {
    onsubmit() {
      //取得一篇文章的資料
      const vm = this;
      const article = {
        title: vm.title,
        city: vm.city,
        tagList: vm.tagList,
        previewImage: vm.previewImage,
        createdAt: new Date().getTime()
      };
      console.log('article', article);
      //將 article 存到 firestore(vm.$db)
      // vm.$db => firestore
      vm.$db.collection("article")
        .add(article)
        .then((res) => {
          console.log('成功', res);
        })
        .catch((err) => {
          console.log("失敗", err);
        })
    }
  }
};
</script>