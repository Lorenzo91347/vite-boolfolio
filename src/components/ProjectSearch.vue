<script>
import store from '../store';
export default {

    name: 'ProjectSearch',

    data() {
        return {
            store,
        }
    },
    emits: ['searchProject'],
    methods: {
        search() {
            console.log('searching');
            this.store.projects.currentPage = 1;
            this.$router.push({
                name: 'projects',
                query: { page: 1, key: this.store.projects.searchKey },
            });
            this.$emit('searchProject')
        }
    }
}
</script>
<template>
    <section id="project-search">
        <form class="d-flex" action="" @submit.prevent="search">
            <input v-model="store.projects.searchKey" class="form-control me-2" type="search" placeholder="Search"
                aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </section>
</template>