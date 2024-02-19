<script>
import Loading from './Loading.vue';
import axios from 'axios';
import store from '../store';
export default {

    name: 'ProjectDetail',

    data() {
        return {
            //Url LIst and empty object to make the call and store the data from said call
            store,
            loading: false,
            project: {},
        }
    },
    components: {
        Loading
    },

    methods: {

        //Methods that makes an axios call

        getProject() {
            this.loading = true;
            axios.get(this.store.api.RootUrl + this.store.api.ListUrl.projects + '/' + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data;
                    console.log(this.project);
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    this.loading = false
                });
        }
    },

    //On created() the methods will be called 
    created() {
        console.log(this.$route);
        this.getProject();
    }
}
</script>
<template>
    <Loading v-if="loading" />
    <div class="container py-4">
        <h1>{{ this.project.title }}</h1>
        <p>{{ this.project.content }}</p>
        <ul v-for="tech in project.technologies">
            <li>{{ tech.title }}</li>
        </ul>
        <div>{{ this.project.type.title }}</div>
        <img v-if="project.post_image" :src="this.store.api.RootUrl + this.store.api.storagePath + project.post_image"
            :alt="project.title">

    </div>
</template>