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
    <div class="level-item">
        <router-link :to="to">
                <div class="container">
                    <img :src="src" alt="lvl-default-image">
                </div>
            <p class="letra">{{name}}</p>
        </router-link>
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
    margin-left: 16px;
    margin-top: 16px;
}


.level-item {
    padding: 20px 20px;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.2s, opacity 0.2s;
    margin: auto;
    width: 150px;

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
    margin-left: 22px;
}

.letra {
    //display: flex;
    align-items: center;
    font-size: 18px;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: white;
    background: #49A964;
    border-style: solid;
    border-color:black;
    box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
    border-radius: 20em;
    font-weight: 900;
    text-align: center;
}



</style>