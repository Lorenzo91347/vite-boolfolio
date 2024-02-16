<script>
import AppHome from '../pages/AppHome.vue';

export default {

}
</script>
<template>
    <div class="head-body">Inizio</div>
    <ul>
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'projects' }">Projects</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
    </ul>
</template>
<style scoped>
.head-body {
    height: 120px;
    background-color: green;
    text-align: center;
}
</style>