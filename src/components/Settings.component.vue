<template>

        <p class="settings-title">Ajustes de cuenta</p>

        <p class="setting-property">Usuario: {{ username }}</p>

        <p class="setting-property">Idioma: Español</p>
        <p class="change-option">Cambiar idioma</p>

        <p class="setting-property">Correo: {{ email }}</p>
        <p class="change-option">Cambiar idioma</p>

        <p class="setting-property">Cumpleaños: {{ birthdate }}</p>
        <p class="change-option">Cambiar fecha</p>

        <p class="setting-property">Contraseña: *********</p>
        <p class="change-option">Cambiar contraseña</p>

        <p class="setting-property">Tipo de cuenta: Version gratis</p>
        <p class="change-option">Cambiar tipo de cuenta</p>

        <div class="button-style">
                <pv-button label="Guardar cambios"/>
        </div>

        <p class="change-option mod">Salir de la cuenta</p>


</template>

<script>
import {UserApiService} from "@/Services/user-api.service";

export default {
    name: "Settings",

    data(){
        return{
            username: "",
            email: "",
            birthdate: "",
            city: "",
            userApiService: new UserApiService()
        }
    },

    beforeMount(){
        this.userApiService.getUserByEmail(sessionStorage.getItem("email")).then(response =>{
            if (response.status === 200){
                let user = response.data;
                let birthdate = new Date(user.birthDay);
                this.username = `${user.first_Name} ${user.last_Name}`;
                this.email = user.email;
                this.birthdate = `${birthdate.getDate()}/${birthdate.getMonth() + 1}/${birthdate.getFullYear()}`;
            }
        })
    }
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

.button-style {
    display: flex;
    align-items: center;
    justify-content: center;
}

button{
    background-color: #1E8F59;
    color: white;
    border: none;
    padding: 0.7em 5em;
    border-radius: 1.4em;
    font-weight: 900;
}

.mod{
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>