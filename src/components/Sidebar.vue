<template>
    <ul id="slide-out" class="sidenav blue-grey darken-3"  ref="sidebar">
        <li
            v-for="route in this.$router.options.routes" 
            :key="route.name"
        >
            <router-link class="waves-effect text-blue-grey text-lighten-5" :to="route.path">{{route.name}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {  
    data() {
        return {
            sidebar: null
        }
    },  
    watch: {
        '$route' () {
            this.sidebar.close()
        }
    },
    mounted() {
        this.sidebar = window.M.Sidenav.init(this.$refs.sidebar, {
            draggable: true
        });
    }
}
</script>
