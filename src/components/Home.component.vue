<template>
    <div class="container">
        <div class="subContainer">
            <img src="src/imgs/sign-lingo-logo.png" alt="SignLingo-Logo">
            <nav-list/>
        </div>
        <div>

        </div>
    </div>

</template>

<script>


import NavList from "@/components/nav-list.component.vue";

export default {
    name: "Home",
    components: {NavList},
}
</script>

<style scoped>

img{
    width: 185px;
    height: 169px;
}

.container{
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-column-gap: 20px;
    justify-items: center;
    height: 600px;
}

.subContainer{
    border-right: 1px solid black;
}

</style>