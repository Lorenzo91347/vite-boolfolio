<script>
import Loading from '../pages/Loading.vue';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectSearch from '../components/ProjectSearch.vue';
import axios from 'axios';
import store from '../store';


export default {
    name: 'ProjectList',
    data() {
        return {
            store,
            loading: false,
            currentPage: 1,
            responseData: {},
            projects: [],
        }
    },
    components: {
        ProjectCard,
        Loading,
        ProjectSearch
    },
    methods: {
        getProjects() {
            this.error = null;
            this.loading = true;
            axios.get(this.store.api.RootUrl + this.store.api.ListUrl.projects, {
                params: {
                    page: this.currentPage,
                    key: this.store.projects.searchKey,
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
                    this.responseData.results.data = [];
                    this.error = error.response.data.errors;
                })
                .finally(() => {
                    this.loading = false
                })
        }, nextPage() {
            this.currentPage++;
            this.$router.push({
                name: 'projects',
                query: {
                    page: this.currentPage,
                    key: this.store.projects.searchKey
                }
            });
            this.getProjects()
        },
        prevPage() {
            this.currentPage--;
            this.$router.push({
                name: 'projects',
                query: {
                    page: this.currentPage,
                    key: this.store.projects.searchKey
                }
            });
            this.getProjects()

        },
    },


    created() {
        this.store.projects.currentPage = this.$route.query.page ?? 1;
        this.store.projects.searchKey = this.$route.query.key ?? null;

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
        <ProjectSearch @search-project="getProjects" />
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
</div></template>
<style></style>