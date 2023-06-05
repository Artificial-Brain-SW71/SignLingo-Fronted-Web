<template>
    <div class="container">
        <div class="subContainer">
            <nav-list/>
        </div>
        <div class="flex-view">
            <router-view></router-view>
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


img {
    width: 185px;
    height: 169px;
}

.container {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-column-gap: 3em;
    justify-items: center;
}

.subContainer {
    height: 100%;
}

.flex-view {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.flex-view:has(.img-container) {
    justify-content: center;
}


</style>