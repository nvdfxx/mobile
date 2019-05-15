<template lang="html">
    <div class="wrapper">
        <ul class="collection">
            <li
                class="collection-item avatar transparent waves-effect waves-light"
                v-for="user in users"
                :key="user.id"
            >
                <i class="material-icons circle">account_circle</i>
                <span class="title">{{user.name}}</span>
                <p>{{user.company.name}}<br>
                    {{user.phone}}
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: null
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)
                this.users = res.data
            })
            .catch(e => console.log(e))
    }
}
</script>


<style lang="scss" scoped>
    

    li {
        width: 100%;
    }
</style>
