<template>
      <router-link to="/home/levels">
        <div class="relative w-4rem h-4rem mx-3 my-3 md:my-0 border-round">
            <img src="https://cdn-icons-png.flaticon.com/512/61/61449.png" class=" h-4rem w-4rem" alt="">
        </div>
    </router-link>

<level-template1 señal="elpepe" src1="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719697.jpg" 
src2="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719690.jpg" 
src3="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719685.jpg" 
src4="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719733.jpg" >
</level-template1>

<level-template2 src="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719685.jpg" 
    rpta1="1" rpta2="2" rpta3="3" rpta4="4" ></level-template2>
</template>

<script>

import LevelTemplate1 from "@/components/exercise-template/level-template1.component.vue";
import LevelTemplate2 from "@/components/exercise-template/level-template2.component.vue";

export default {
    name: "Exercise",
    components: {LevelTemplate1, 
        LevelTemplate2}
}
</script>

<style>


</style>