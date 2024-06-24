<template>
  <div class="login-page p-d-flex p-jc-center p-ai-center">
    <div class="col-lg-4 col-md-6 col-sm-8 mx-auto p-d-flex p-flex-column p-ai-center bg-green-400 border-round-xl">
      <div v-if="!registerActive" class="card login p-col-12 p-md-6 h-auto w-29rem" v-bind:class="{ error: emptyFields }">
        <h1>Iniciar sesión</h1>
        <form @submit.prevent="doLogin" class="form-group">
          <label for="email">Correo: </label>
          <input v-model="emailLogin" type="email" class="form-control" placeholder="Correo" aria-describedby="Ingrese su correo electronico." title="Ingrese su correo electronico." required>

          <label for="password">Contraseña: </label>
          <input v-model="passwordLogin" type="password" class="form-control" placeholder="Contraseña" aria-describedby="Ingrese su contraseña." title="Ingrese su contraseña." required>
          
          <button type="button" class="button-68" role="button" @click="doLogin" aria-describedby="Iniciar sesión." title="Iniciar sesión.">Entrar</button>

          <p>Don't have an account? <a href="javascript:void(0)" @click="registerActive = !registerActive, emptyFields = false">Crear cuenta</a></p>
          <p><a href="javascript:void(0)">¿Olvidaste tu contraseña?</a></p>
        </form>
      </div>

      <div v-else class="card register p-col-12 w-29rem h-auto p-md-6" v-bind:class="{ error: emptyFields }">
        <h1>Registrarse</h1>
        <form @submit.prevent="doRegister" class="form-group">
          <label for="name">Nombre:</label>
          <input v-model="nameReg" type="text" class="form-control" placeholder="Nombre" aria-describedby="Ingrese su nombre completo." title="Ingrese su nombre completo." required>
          
          <label for="lastname">Apellido: </label>
          <input v-model="lastnameReg" type="text" class="form-control" placeholder="Apellido" aria-describedby="Ingrese su primer apellido completo." title = "Ingrese su primer apellido completo." required>

          <label for="email">Correo: </label>
          <input v-model="emailReg" type="email" class="form-control" placeholder="Correo" aria-describedby="Ingrese su correo electronico." title="Ingrese su correo electronico." required>

          <label for="Birthdate">Fecha de nacimiento: </label>
          <input v-model="Birthdate" type="date" class="form-control" title= "Ingrese su fecha de nacimiento." aria-describedby= "Ingrese su fecha de nacimiento." required>

          <label for="password">Contraseña: </label>
          <input v-model="passwordReg" type="password" class="form-control" placeholder="Contraseña" aria-describedby="Ingrese una contraseña valida." title="Ingrese una contraseña valida." required>
          <div class="restriccion">La contraseña debe ser con 8 caracteres mínimo</div>
          
          <label for="confirmReg">Confirmar Contraseña: </label>
          <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirmar Contraseña" aria-describedby="Ingresa la misma contraseña." title="Ingrese la misma contraseña." required>
          
          <div class="card flex justify-content-center">
            <pv-cascadeselect v-model="selectedCity" :options="countries" optionLabel="city_Name" optionGroupLabel="country_name" :optionGroupChildren="['cities']" placeholder="Select a City" title="Seleccione su cuidad." aria-describedby="Seleccione su cuidad."></pv-cascadeselect>
          </div>
          <button type="button" class="button-68" role="button" title="Registrar una nueva cuenta." aria-describedby="Registrar una nueva cuenta." click="doRegister">Registrar</button>
          <p>¿Ya tienes una cuenta? <a href="javascript:void(0)" @click="registerActive = !registerActive, emptyFields = false">Iniciar sesión</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { CountryApiService } from "@/Services/country-api.service";
import { CityApiService } from "@/Services/city-api.service";
import { UserApiService } from "@/Services/user-api.service";

export default {
  name: "Login",

  data() {
    return {
      registerActive: false,
      emailLogin: "",
      Birthdate: "",
      passwordLogin: "",
      nameReg: "",
      lastnameReg: "",
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
    async doLogin(event) {
      event.preventDefault(); 

      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        const body = {
          email: this.emailLogin,
          password: this.passwordLogin
        };

        try {
          const response = await this.userApiService.Login(body);
          if (response.status === 200) {
            sessionStorage.setItem("jwt", response.data);
            sessionStorage.setItem("email", this.emailLogin);
            alert("Inicio de sesión exitoso");
            this.$router.push('/home/levels');
          } else {
            alert("Correo o contraseña inválida");
          }
        } catch (error) {
          console.error("Error during login:", error);
          alert("Error en el inicio de sesión. Por favor, inténtelo de nuevo.");
        }
      }
    },

    async doRegister(event) {
      event.preventDefault(); 

      if (this.emailReg === "" || this.nameReg === "" || this.lastnameReg === "" || this.passwordReg === "" || this.confirmReg === "") {
        this.emptyFields = true;
      } else {
        const city = this.cities.find(city => {
          return city.city_Name === this.selectedCity.city_Name;
        });

        const body = {
          first_Name: this.nameReg,
          last_Name: this.lastnameReg,
          email: this.emailReg,
          password: this.passwordReg,
          birthDate: this.Birthdate,
          roles: "client",
          city: city.id
        };

        try {
          const response = await this.userApiService.SignUp(body);
          if (response.status === 201) {
            alert("Registro exitoso");
            this.$router.push('/home/levels');
          } else {
            alert("Formulario inválido");
            this.$router.push('/');
          }
        } catch (error) {
          console.error("Error during registration:", error);
          alert("Formulario inválido");
        }
      }
    }
  },

  async beforeMount() {
    try {
      const countryResponse = await this.countryApiService.getAll();
      this.countries = countryResponse.data;

      const cityResponse = await this.cityApiService.getAll();
      this.cities = cityResponse.data;

      this.countries.forEach(country => {
        country["cities"] = this.cities.filter(city => {
          return city.country_name === country.country_name;
        });
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
};
</script>

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
  height: 130vh;
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