<template>
    <ul id="slide-out" class="sidenav blue-grey darken-3"  ref="sidebar">
        <router-link 
            tag="li"
            exact-active-class="active"
            v-for="route in this.$router.options.routes" 
            :key="route.name"
            :to="route.path"
        >
            <a class="waves-effect text-blue-grey text-lighten-5" >{{route.name}}</a>
        </router-link>
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
    },
    methods: {
        toggle() {
            this.sidebar.open()
        }
    }
}
</script>
