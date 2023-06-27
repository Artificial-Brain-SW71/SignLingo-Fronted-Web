<template>
    <div class="card">
        <div v-for="unit in uniqueUnits" :key="unit" class="block font-bold text-center p-4 border-round mb-3">
            <h1>Unidad {{ unit }}</h1>
            <div class="flex flex-wrap justify-content-center card-container blue-container gap-3" >
                <div v-for="filteredModule in filteredModules(unit)" :key="filteredModule.id">
                  <div class="border-round w-16rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                     <level-item :name="filteredModule.module" :src= "filteredModule.image"/>
                  </div>
                </div>
              </div>
         </div>
    </div>
</template>

<script>
import LevelItem from "@/components/levels-item.component.vue";
import { UserModuleApiService } from "@/Services/usermodule-api.service";

export default {
  name: "Prueba",
  components: { LevelItem },

  data() {
    return {
      userModules: [],
      userModuleApiService: new UserModuleApiService(),
    };
  },

  beforeCreate() {
    if (!window.sessionStorage.getItem("jwt")) {
      this.$router.push('/login');
    }
  },

  beforeMount() {
    this.userModuleApiService
      .getModulesByUserEmail(sessionStorage.getItem('email'))
      .then((response) => {
        this.userModules = response.data;
      });
  },

  computed: {
    uniqueUnits() {
      return Array.from(new Set(this.userModules.map((module) => module.unit)));
    },
  },

  methods: {
    filteredModules(unit) {
      return this.userModules.filter((module) => module.unit === unit);
    },
  },
};
</script>

<style scoped>

.levels-container{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

h1{
    font-size: 40px;
    font-weight: 900;
}
</style>