<template>
  <div>
    <nav class="navigation-bar">
      <nuxt-link class="brand" to="/">Travel Blog</nuxt-link>
      <button @click="toggleActive" class="menu-btn">
        <span class="menu-btn-bar"></span>
      </button>
      <div class="nav-list">
        <nuxt-link class="brand" to="/">Home</nuxt-link>
        <nuxt-link class="brand" to="/about">About</nuxt-link>
        <a>Sign In</a>
        <a>Register</a>
      </div>
      <Model v-if="showLogin">
        <h3>Sign In</h3>
        <form>
          <InputGroup label="Email" type="email" :required="true" placeholder="請輸入email" @onChange="(val) => (loginEmail = val)" />
          <InputGroup label="Password" type="password" :required="true" @onChange="(val) => {loginPassword = val}" />
          <button class="btn btn-primary btn-block">Login</button>
          <p>{{ loginEmail }}</p>
          <p>{{ loginPassword }}</p>
        </form>
      </Model>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  data() {
    loginEmail = "",
    loginPassword = ""
  }
};
</script>
<style>
.nav-list .nuxt-link-exact-active {
  color: red;
}
</style>