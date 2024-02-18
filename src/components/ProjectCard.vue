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

        </div>
    </div>
</template>
<style scoped></style>