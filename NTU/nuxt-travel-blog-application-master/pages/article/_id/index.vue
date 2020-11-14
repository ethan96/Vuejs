<template>
  <div>
    <header class="jumbotron" :style="{
      backgroundImage: `url(${previewImage})`, backgroundSize: 'cover'
    }">
      <div class="container">
        <h1>Show details for Article Page - {{ $route.params.id }}</h1>
        <nuxt-link
          class="btn btn-warning"
          :to="`/article/${$route.params.id}/edit`"
        >
          Edit Article
        </nuxt-link>
        <GoogleMapInput :editable="false" v-if="location" :value="location" />
      </div>
    </header>
    <section class="py-5">
      <div class="container"></div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ShowDetailsArticlePage",
  mounted() {
    const docId = this.$route.params.id;
    this.$db.doc(`articleList/${docId}`)
    .get()
    .then((doc) => {
      console.log(doc);
      const article = doc.data();
      vm.city = article.city;
      vm.location = article.location;
      vm.title = article.title;
      vm.previewImage = article.previewImage;
    }).catch((err) => {
      console.log(err);
    });
  }
};
</script>