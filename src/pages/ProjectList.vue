<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';


export default {
    name: 'ProjectList',
    data() {
        return {
            projects: [],
            RootUrl: 'http://127.0.0.1:8000',
            ListUrl: {
                projects: '/api/projects'
            }
        }
    },
    components: {
        ProjectCard,
    },
    methods: {
        getProjects() {
            axios.get(this.RootUrl + this.ListUrl.projects)
                .then((response) => {
                    console.log(response);
                    this.projects = response.data.results;
                }).catch(error => { console.log(error) });
        }
    },
    created() {
        this.getProjects();

    },
}
</script>
<template>
    <ProjectCard :projects="projects" />
</template>
<style></style>