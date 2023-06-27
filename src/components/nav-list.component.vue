<template>
    <div :class="['sidebar', { 'sidebar-open': isOpen }]">
        <div class="card-container ">
        <div class="block sidebar-header ">
            <pv-image src="https://cdn.discordapp.com/attachments/1103466916359712778/1103472142659616860/sign-lingo-logo.png" width="200"  alt="SignLingo-Logo" v-if="isOpen"/>
            <pv-image src="/logo-mano.png" width="70" alt="SignLingo-Logo" v-else/>
        </div>
        <div class="block sidebar-content">
            <ul class="menu">
                <li v-for="item in menuItems" :key="item.label" :class="{'active': item.active}">
                    <div class="nav-item">
                        <router-link :to="item.route">
                            <div class="container">
                                <img :src="item.link" v-if="isOpen">
                                <span v-if="isOpen">{{ item.label }}</span>
                                <img :src="item.link" v-else>
                            </div>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "nav-list",
    data() {
        return {
            isOpen: true,
            menuItems: [
                {
                    label: 'Niveles',
                    link: 'https://cdn.discordapp.com/attachments/1103466916359712778/1103475957865652274/image_31.png',
                    route: '/home/levels'
                },
                {
                    label: 'Calendario',
                    link: 'https://cdn.discordapp.com/attachments/1103466916359712778/1103475957496557650/image_34.png',
                    route: '/home/calender'
                },
                {
                    label: 'Plus',
                    link: 'https://cdn.discordapp.com/attachments/1103466916359712778/1103475956947099648/estrella_1.png',
                    route: '/home/plus'
                },
                {
                    label: 'Ajustes',
                    link: 'https://cdn.discordapp.com/attachments/1103466916359712778/1103475958247337984/image_33.png',
                    route: '/home/settings'
                }
            ]
        };
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
};
</script>

<style scoped>
img {
    width: 45px;
    float: left;
    margin-right: 10px;
}

a {
    text-decoration: none;
    color: black;
}

.sidebar {
    border-right: 1px solid black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background-color: #F5FDF3;
    color: #fff;
    transition: width 0.3s;
    z-index: 1000;
}

.sidebar-open {
    width: 220px;
}

.sidebar-header {
    padding: 10px;
    text-align: center;
}


.sidebar-content {
    padding-top: 20px;
}

.menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu li {
    padding: 5px;
    cursor: pointer;
}

.menu li.active {
    background-color: #333;
}

.menu li i {
    margin-right: 10px;
}
.nav-item {
    padding: 20px 20px;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.2s, opacity 0.2s;

}

.nav-item:hover{
    background-color: rgba(71, 167, 255, 0.7);
}

.nav-item:active{
    opacity: 0.4;
}

.container{
    display: flex;
    align-items: center;
}

</style>