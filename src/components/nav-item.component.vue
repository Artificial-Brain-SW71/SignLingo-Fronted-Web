<script setup>

defineProps({
    src:{
        type: String,
        required: true,
    },
    to:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
})

</script>

<template>
    <div class="nav-item">
        <router-link :to="to">
            <div class="container">
                <img :src="src" alt="nav-item-logo">
                <p>{{name}}</p>
            </div>
        </router-link>
    </div>


</template>

<script>
export default {
    name: "nav-item",
}
</script>

<style scoped>

img {
    width: 50px;
    float: left;
    margin-right: 10px;
}

.nav-item {
    padding: 20px 20px;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.2s;
    margin: 30px 10px;
}

.nav-item:hover{
    background-color: rgba(71, 167, 255, 0.7);
}

.container{
    display: flex;
    align-items: center;
    justify-content: center
}

</style>