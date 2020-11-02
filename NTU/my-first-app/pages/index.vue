<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <input type="text" v-model="title" /><br />
    <input type="text" v-model="subtitle" />
    <nuxt-link to="/about">關於本站</nuxt-link>
    <nuxt-link to="/contact">聯絡我們</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      title: "我的網站",
      subtitle: "副標題"
    };
  }
}
</script>