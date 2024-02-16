<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectCard from './components/ProjectCard.vue';
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
        AppHeader,
        AppFooter,
    },
}


</script>
<template>
    <AppHeader />
    <RouterView />
    <AppFooter />
</template>
<style scoped></style>