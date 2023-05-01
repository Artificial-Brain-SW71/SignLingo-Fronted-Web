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
      <img :src="src" alt="nav-item-logo">
      <router-link :to="to"> {{name}} </router-link>
  </div>
</template>

<script>
export default {
    name: "nav-item",
}
</script>

<style scoped>

img {
    margin-right: 20px;
    width: 50px;
}

.nav-item {
    padding: 20px 10px;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.2s;
    margin: 30px 10px;
}

.nav-item:hover{
    background-color: rgba(71, 167, 255, 0.7);
}

</style>