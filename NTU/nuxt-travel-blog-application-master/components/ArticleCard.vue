<template>
  <div class="card">
    <div class="card-img-top" :style="{ backgroundImage: `url{${article.previeImgage}`}" ></div>
    <div class="card-body">
      <h4 class="card-title">{{ article.title }}</h4>
      <p class="card-text">{{ article.city }}</p>
      <div>
        <nuxt-link :to="`/article/${article.id}`" class="btn btn-primary">Details</nuxt-link>
        <nuxt-link :to="`/article/${article.id}/edit`" class="btn btn-warning">Edit</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleCard",
  props: ["article"]
}
</script>