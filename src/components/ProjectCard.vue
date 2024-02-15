<script>
export default {
    props: ['projects'],
}
</script>
<template>
    <div class="container">
        <h2>The projects</h2>
        <div class="row">

            <div class="col col-md-4" v-for="project in projects">
                <div class="card " style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.content }}</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>