import { reactive } from "vue";

const store = reactive({

    api: {
        RootUrl: 'http://127.0.0.1:8000',
        storagePath: '/storage/',
        ListUrl: {
            projects: '/api/projects'
        }
    },
    projects: {
        searchKey: null
    },
    error: [],
});

export default store;