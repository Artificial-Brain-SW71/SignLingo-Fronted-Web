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
  <div>
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

</style>