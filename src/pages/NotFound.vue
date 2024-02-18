<script>
export default {
    name: 'NotFound',
}
</script>
<template>
    <div class="container py-4">
        <h1>Sorry,I did not find the page you were looking for</h1>
        <p><router-link :to="{ name: 'home' }">Back to home</router-link></p>
    </div>
</template>