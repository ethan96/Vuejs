<template>
  <div>
    <NavigationBar />
    <!-- Header -->
    <header class="jumbotron">
      <div class="container">
        <h1>Welcome to Travel Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          placeat accusantium? Suscipit in at ducimus tenetur eveniet! Modi
          saepe, vel voluptates totam ullam tempore esse architecto, ab et error
          facilis!
        </p>
        <nuxt-link class="btn btn-primary" to="/about">More Info</nuxt-link>
      </div>
    </header>
    <!-- Header end -->
    <!-- ArticleSection -->
    <section class="py-5">
      <div class="container">
        <div class="section-title-group">
          <h2 class="section-title text-center">Article List</h2>
          <div class="section-title-bar bg-warning"></div>
        </div>
        <!-- ArticleList -->

        <!-- ArticleList end -->
      </div>
    </section>
    <!-- ArticleSection -->
    <!-- Footer -->
    <!-- <footer class="py-3">
      <div class="container text-center">
        <h5>
          <nuxt-link to="/">Nuxt Travel Blog</nuxt-link>
        </h5>
        <p class="mb-0">2020 &copy; All Rights Reserved</p>
      </div>
    </footer> -->
    <!-- Footer end -->
    <div>
      <p>縮圖</p>
      <input @change="fileChange" type="file" accept=".jpg,.png" />
    </div>
    <img v-if="previewImage" :src="previewImage" alt="" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  //layout: "layout2",
  data() {
    return {
      previewImage: ""
    }
  },
  mounted() {
    console.log(this.$author.name);
    console.log(this.$getAuthorInfo('John'));
  },
  methods: {
    fileChange(event) {
      //console.log("點選圖片了");
      const file = event.target.files[0];
      const fullName = file.name;
      console.log(fullName);
      const baseRef = this.$storage.ref();
      //images/檔名
      const path = baseRef.child(`images/${fullName}`);
      //將檔案傳至指定path
      path.put(file)
      .then(async snapshot => {
        //等待 getDownloadURL 回傳下載網址
        console.log("傳輸成功", snapshot);
        const imgUrl = await snapshot.ref.getDownloadURL();
        console.log(imgUrl);
        this.previewImage = imgUrl;
      })
      .catch((err) => {
        console.log("傳輸失敗" + err);
      });
    }
  }
};
</script>

<style>
</style>
