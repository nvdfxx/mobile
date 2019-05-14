<template>
  <div id="app" class="blue-grey darken-4">
    <app-header />
    <sidebar/>
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
  }
}
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.css';

  #app {
    height: 100vh;
    color: #eceff1
  }

</style>
