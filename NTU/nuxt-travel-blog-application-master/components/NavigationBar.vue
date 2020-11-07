<template>
  <div>
    <nav :class="['navigation-bar', { active: isActive }]">
      <nuxt-link class="brand" to="/">Travel Blog</nuxt-link>
      <button @click="toggleActive" class="menu-btn">
        <span class="menu-btn-bar"></span>
      </button>
      <div class="nav-list">
        <nuxt-link class="brand" to="/">Home</nuxt-link>
        <nuxt-link class="brand" to="/about">About</nuxt-link>
        <nuxt-link class="brand" to="/article/create">Create article</nuxt-link>
        <a>Sign In</a>
        <a>Register</a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  },
  watch: {
    $route() {
      //切換業面時候
      this.isActive = false;
    }
  },
  mounted() {
    //當視窗收放時
    window.addEventListener('resize', () => {
      this.isActive = false;
    })
  },
};
</script>