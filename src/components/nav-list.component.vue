<template>
    <div class="nav-list">
        <nav-item name="Levels" to="/Levels" src="s"/>
        <nav-item name="Calender" to="/Calender" src="src/imgs/example.jpg"/>
        <nav-item name="Plus" to="/Plus" src="s"/>
        <nav-item name="Settings" to="/Settings" src="s"/>
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