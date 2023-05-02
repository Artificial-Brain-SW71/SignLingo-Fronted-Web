<template>
    <div class="nav-list">
        <nav-item name="Levels" to="/Levels" src="src/imgs/levels.svg"/>
        <nav-item name="Calender" to="/Calender" src="src/imgs/calender.svg"/>
        <nav-item name="Plus" to="/Plus" src="src/imgs/plus.svg"/>
        <nav-item name="Settings" to="/Settings" src="src/imgs/settings.svg"/>
    </div>
</template>

<script>
import NavItem from "@/components/nav-item.component.vue";

export default {
    name: "nav-list",
    components: {NavItem}
}
</script>

<style scoped>

</style>