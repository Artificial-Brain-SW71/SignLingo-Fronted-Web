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
    },
    level_color: {
        type: String,
        required: true,
    }
})

</script>

<template>
    <div class="p-grid level-item">
      <div class="p-col">
        <router-link :to="to" class="p-d-flex p-flex-column p-justify-center p-align-center">
          <div class="container p-d-flex p-justify-center">
            <img :src="src" alt="lvl-default-image">
          </div>
          <p class="letra">{{ name }}</p>
        </router-link>
      </div>
    </div>
  </template>

<script>
export default {
    name: "level-item",
}
</script>

<style scoped>

a {
    text-decoration: none;
    color: black;
}

p {
    text-align: center;
}
img {
    width: 70px;
    float: left;
    margin-left: 13px;
    margin-top: 14px;
    
}


.level-item {
    padding: 20px 20px;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.2s, opacity 0.2s;
    margin: auto;
    width: 220px;

}

.level-item:hover{
    background-color: #49A964
}

.level-item:active{
    opacity: 0.4;
}

.container{
    height: 100px;
    width: 100px;
    background-color: #BCEFB3;
    border-radius: 50%;
    border-style: solid;
    margin: auto;
}

.letra {
    font-size: 18px;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: white;
    background: #49A964;
    border-style: solid;
    border-color:black;
    box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
    border-radius: 20em;
    font-weight: 900;
    width:180px;
}



</style>