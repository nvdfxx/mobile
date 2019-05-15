<template>
    <div class="wrapper">
        <div class="card blue-grey darken-2" v-for="image in images" :key="image.id">
            <div class="card-image">
                <img :src="image.url">
                <span class="card-title">{{image.title}}</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
                <a href="#">Read more</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: null
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then(res => {
                this.images = res.data
                console.log(this.images)
            })
    }
}
</script>

