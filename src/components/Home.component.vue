<template>
    <div class="container">
        <div class="subContainer">
            <nav-list/>
        </div>
        <div :class="['menu-cerrado', { 'menu-abierto': isOpen }]">
        <div class="flex-view">
            <router-view></router-view>
        </div>
    </div>
    </div>

</template>

<script>


import NavList from "@/components/nav-list.component.vue";

export default {
    name: "Home",
    components: {NavList},
    data() {
        return {
            isOpen: true,};
        },
    mounted() {
        this.checkScreenWidth(); // Verificar el ancho de pantalla al cargar el componente
        window.addEventListener('resize', this.checkScreenWidth); // Escuchar eventos de redimensionamiento
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenWidth); // Eliminar el evento de redimensionamiento al desmontar el componente
    },
    methods: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        },
        checkScreenWidth() {
            this.isOpen = window.innerWidth >= 900; // Cambiar el estado del sidebar según el ancho de pantalla
        }
    }
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

.menu-cerrado {
    width: calc(100% + 150px);
    margin-left: -150px;
    right: auto;
}

.menu-abierto {
    width: calc(100% + 30px);
    margin-left: -30px;
    right: auto;
}


</style>