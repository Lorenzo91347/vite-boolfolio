<script>
import Loading from '../pages/Loading.vue';
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';


export default {
    name: 'ProjectList',
    data() {
        return {
            loading: false,
            currentPage: 1,
            responseData: {},
            projects: [],
            RootUrl: 'http://127.0.0.1:8000',
            ListUrl: {
                projects: '/api/projects'
            }
        }
    },
    components: {
        ProjectCard,
        Loading
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(this.RootUrl + this.ListUrl.projects, {
                params: {
                    page: this.currentPage,
                },
            })
                .then((response) => {
                    if (response.data.results) {
                        this.responseData = response.data
                        // this.projects = response.data.results
                        console.log(this.responseData);
                    } else {
                        this.$router.push({ name: 'NotFound' });
                    }

                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    this.loading = false
                })
        }, nextPage() {
            this.currentPage++;
            this.$router.push({
                name: 'projects',
                query: { page: this.currentPage }
            });
            this.getProjects()
        },
        prevPage() {
            this.currentPage--;
            this.$router.push({
                name: 'projects',
                query: { page: this.currentPage }
            });
            this.getProjects()

        },
    },


    created() {

        //This watch() shows to the user the page he is on,so it can be used as a link

        //this.$watch(
        //() => this.$route.params,
        //(toParams, previousParams) => {
        //console.log(this.$route);
        //this.currentPage = this.$route.query?.page ?? 1;
        //}
        // )
        this.getProjects();
    },
}
</script>
<template>
    <div class="container">
        <h2>The projects</h2>
        <Loading v-if="loading" />
        <div class="row mt-4" v-else>
            <div class="col col-md-4" v-for="project in responseData.results.data">
                <ProjectCard :project="project" />
            </div>
            <nav class="my-5">
                <ul class="d-flex justify-content-between list-unstyled">
                    <li class="btn btn-success" @click="prevPage" v-show="responseData.results?.prev_page_url">Previous
                    </li>
                    <li class="btn btn-danger" @click="nextPage" v-show="responseData.results?.next_page_url">Next</li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<style></style>