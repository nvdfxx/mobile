<template>
  <div id="app" class="blue-grey darken-4">
    <app-header @toggleSidebar="toggleSidebar" />
    <sidebar ref="appsidebar" />
    <router-view />
  </div>
</template>

<script>

import AppHeader from './components/AppHeader'
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    Sidebar
  },
  methods: {
    toggleSidebar() {
      this.$refs.appsidebar.toggle()
    }
  }
}
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.css';

  #app {
    height: 100vh;
    color: #eceff1;
    overflow: hidden;
  }

  .wrapper {
        overflow: auto;
        height: 100vh;
        padding-top: 56px;
  }

</style>
