<script>
import {CountryApiService} from "@/Services/country-api.service";
import {ref} from "vue";
import {CityApiService} from "@/Services/city-api.service";
import {UserApiService} from "@/Services/user-api.service";

export default {
    name: "Login",

    data() {
        return {
            registerActive: false,
            emailLogin: "",
            Birthdate: "",
            passwordLogin: "",
            nameReg:"",
            lastnameReg:"",
            emailReg: "",
            passwordReg: "",
            confirmReg: "",
            emptyFields: false,
            selectedCity: "",
            countryApiService: new CountryApiService(),
            cityApiService: new CityApiService(),
            userApiService: new UserApiService(),
            countries: [],
            cities: []
        };
    },

    methods: {
        doLogin() {
            if (this.emailLogin === "" || this.passwordLogin === "") {
                this.emptyFields = true;
            } else {

                const body = {
                    "email": this.emailLogin,
                    "password": this.passwordLogin
                }

                this.userApiService.Login(body).then(response => {
                    if (response.status === 200){
                        sessionStorage.setItem("jwt", response.data);
                        sessionStorage.setItem("email", this.emailLogin);
                        alert("Inicio de sesion exitoso");
                        this.$router.push('/home/levels');
                    }
                    else{
                        alert("Correo o contraseña invalida");
                    }
                });
            }
        },

        doRegister() {
            if (this.emailReg === "" || this.nameReg === "" || this.lastnameReg === "" || this.passwordReg === "" || this.confirmReg === "") {
                this.emptyFields = true;
            } else {

                const city = this.cities.find(city =>{
                    return city.city_Name === this.selectedCity.city_Name
                })

                const body = {
                    "first_Name": this.nameReg,
                    "last_Name": this.lastnameReg,
                    "email": this.emailReg,
                    "password": this.passwordReg,
                    "birthDate": this.Birthdate,
                    "roles": "client",
                    "city": city.id
                }


                this.userApiService.SignUp(body).then(response=>{
                    if (response.status === 201){
                        alert("Registro exitoso");
                        this.$router.push('/home/levels');
                    }
                    else{
                        alert("Formulario invalido");
                        this.$router.push('/')
                    }
                })


            }
        }
    },

    beforeMount() {
        this.countryApiService.getAll().then(response =>{
            this.countries = response.data
        })

        this.cityApiService.getAll().then(response => {
            this.cities = response.data


            this.countries.forEach(country => {

                country["cities"] = this.cities.filter(city =>{
                    return city.country_name === country.country_name;
                })

            })
        })

    }
}
</script>

<template>
      <div class="login-page p-d-flex p-jc-center p-ai-center ">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto p-d-flex p-flex-column p-ai-center bg-green-400 border-round-xl">
            <div v-if="!registerActive" class="card login p-col-12 p-md-6 h-auto w-29rem" v-bind:class="{ error: emptyFields }">
              <h1>Iniciar sesion</h1>
              <form class="form-group">
                <input v-model="emailLogin" type="email" class="form-control" placeholder="Correo" required>
                <input v-model="passwordLogin" type="password" class="form-control" placeholder="Contraseña" required>
                <button type="submit" class="button-68" role="button" @click="doLogin">Entrar</button>
                <p>Don't have an account? <a href="javascript:void(0)" @click="registerActive = !registerActive, emptyFields = false">Crear cuenta</a></p>
                <p><a href="javascript:void(0)">¿Olvidaste tu contraseña?</a></p>
              </form>
            </div>

            <div v-else class="card register p-col-12 w-29rem h-auto p-md-6" v-bind:class="{ error: emptyFields }">
              <h1>Registrarse</h1>
              <form class="form-group">
                <input v-model="nameReg" type="text" class="form-control" placeholder="Nombre" required>
                <input v-model="lastnameReg" type="text" class="form-control" placeholder="Apellido" required>          
                <input v-model="emailReg" type="email" class="form-control" placeholder="Correo" required>
                <input v-model="Birthdate" type="date" class="form-control" required>
                <input v-model="passwordReg" type="password" class="form-control" placeholder="Contraseña" required>
                <div class="restriccion" >La contraseña debe ser con 8 caracteres minimo</div>
                <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirmar Contraseña" required>
                <div class="card flex justify-content-center">
                  <pv-cascadeselect v-model="selectedCity" :options="countries" optionLabel="city_Name" optionGroupLabel="country_name" :optionGroupChildren="['cities']" placeholder="Select a City"></pv-cascadeselect>
                </div>
                <button type="submit" class="button-68" role="button" @click="doRegister">Registrar</button>
                  <p>¿Ya tienes una cuenta?  
                  <a href="javascript:void(0)" @click="registerActive = !registerActive, emptyFields = false">Iniciar sesion</a>
                </p>
              </form>
            </div>
          </div>
        </div>
</template>

<style>
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.form-group input {
  margin-bottom: 20px;
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}

.form-control{
  padding: 12px 20px;
  font-size: 1rem;
  border-width: calc(var(--border-width) * 1px);
  border-style: solid;
  border-color: var(--accent);
  border-radius: calc(var(--border-radius) * 1px);
  text-align: center;
  outline: transparent;
  width: 100%;
}



/* CSS */
.button-68 {
  appearance: none;
  backface-visibility: hidden;
  background-color: #27ae60;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 13px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
  border-width: calc(var(--border-width) * 1px);
  border-style: solid;
  border-color: black;
  border-radius: 15px;
}

.button-68:hover {
  background-color: #1e8449;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.button-68:active {
  transform: translateY(2px);
  transition-duration: .35s;
}

.button-68:hover {
  box-shadow: rgba(39, 174, 96, .2) 0 6px 12px;
}


.login-page .fade-enter-active,
.login-page .fade-leave-active {
  transition: opacity .5s;
}

.login-page .fade-enter,
.login-page .fade-leave-to {
  opacity: 0;
}

.restriccion{
  margin-top: -15px;
  margin-bottom: 8px;
  color: black;
  font-weight: bold;
}

.login-page h1 {
  margin-bottom: 1.5rem;
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}

</style>