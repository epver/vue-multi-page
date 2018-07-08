<template>
  <div>
    <mu-header></mu-header>
    <hello-world></hello-world>
    <section>[ - Docs.vue ] is created!</section>
    <mu-footer></mu-footer>
  </div>
</template>
<script>
import {HelloWorld} from '../../components'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {}
  }
}
</script>
