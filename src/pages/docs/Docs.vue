<template>
  <div>
    <section>[ - Docs.vue ] is created!</section>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
