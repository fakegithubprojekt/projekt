<template>
  <div id="app">

      <router-view />

  </div>
</template>
<script>
import store from '@/store.js'
export default {
  data(){
    return store
  }
}
</script>
<style lang="scss">
body {
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
}

.bg-white {
  background-color: white;
  border-bottom: #ccc 1px solid;
  margin-bottom: 20px;
  padding: 10px;
}

nav.navbar {
  background-color: white;

  a {
    svg {
      border-right: #aaa 1px solid;
      margin-right: 10px;
      padding-right: 10px;
    }

    img {
      position: relative;
      top: 3px;
    }
  }
}


</style>

