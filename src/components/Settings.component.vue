<template>

        <p class="settings-title">Ajustes de cuenta</p>

        <p class="setting-property">Usuario: Upecino69</p>

        <p class="setting-property">Idioma: Español</p>
        <p class="change-option">Cambiar idioma</p>

        <p class="setting-property">Correo: pan7@gmail.com</p>
        <p class="change-option">Cambiar idioma</p>

        <p class="setting-property">Numero: *** *** 987</p>
        <p class="change-option">Cambiar numero</p>

        <p class="setting-property">Contraseña: ****ga</p>
        <p class="change-option">Cambiar contraseña</p>

        <p class="setting-property">Tipo de cuenta: Version gratis</p>
        <p class="change-option">Cambiar tipo de cuenta</p>


</template>

<script>
export default {
    name: "Settings"
}
</script>

<style scoped>



.settings-title{
    color: #000000;
    font-size: 2.5em;
    font-style: normal;
    font-weight: 800;
    text-align: center;
}

.change-option{
    font-weight: 900;
    font-size: 1em;
    color: #3D8AFF;
    cursor: pointer;
    transition: opacity 0.2s, color 0.2s;
}

.change-option:hover{
    color: #3D57FFFF;
}

.change-option:active{
    opacity: 0.7;
}

.setting-property{
    color: #000000;
    font-style: normal;
    font-weight: 800;
    font-size: 1.5em;
    margin-bottom: 0.2em;
}


</style>