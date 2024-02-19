<script>
export default {
    props: ['project'],
}
</script>
<template>
    <div class="card " style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.content }}</p>
            <a class="btn btn-primary " href=""><router-link class="text-white"
                    :to="{ name: 'single-project', params: { slug: project.slug } }">See Project</router-link></a>

        </div>
    </div>
</template>
<style scoped></style>