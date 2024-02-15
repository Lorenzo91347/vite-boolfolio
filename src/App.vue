<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectCard from './components/ProjectCard.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
export default {

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
        AppMain,
        AppHeader,
        AppFooter,
        ProjectCard
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
    }

}
</script>
<template>
    <AppHeader />
    <ProjectCard :projects="projects" />
</template>
<style scoped></style>