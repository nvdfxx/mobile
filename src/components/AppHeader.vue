<template>
    <nav>
        <div class="nav-wrapper blue-grey darken-3">
            <a href="#" class="appname left text-blue-grey text-lighten-5">Application</a>
            <a href="#"  @click.prevent="toggleSidebar" class="btn-flat waves-effect waves-light right center " >
                <i class="material-icons ">menu</i>
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            this.$emit('toggleSidebar')
        }
    }
}
</script>


<style lang="scss" scoped>

    nav {
        position: fixed;
        z-index: 99;
        top: 0;
    }

    .appname {
        margin-left: 0.5rem;
    }

    .btn-flat {
        margin-top: 10px;
        right: 0.5rem;
        i {
            height: 100%;
            line-height: 36px; 
            color: #eceff1
        }
    }

</style>

