<script>
import axios from 'axios';
export default {

    name: 'ProjectDetail',

    data() {
        return {
            //Url LIst and empty object to make the call and store the data from said call

            project: {},
            RootUrl: 'http://127.0.0.1:8000',
            ListUrl: {
                projects: '/api/projects'
            }
        }
    },

    methods: {

        //Methods that makes an axios call

        getProject() {
            axios.get(this.RootUrl + this.ListUrl.projects + '/' + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.results;
                    console.log(this.project);
                }).catch(error => {
                    console.log(error);
                })
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
    <div class="container py-4">
        <h1>{{ project.title }}</h1>
        <p>{{ project.content }}</p>
    </div>
</template>