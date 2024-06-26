<template>
    <router-link to="/home/levels">
        <div class="relative w-4rem h-4rem mx-3 my-3 md:my-0 border-round">
            <img src="https://cdn-icons-png.flaticon.com/512/61/61449.png" class=" h-4rem w-4rem" alt="">
        </div>
    </router-link>

    <div class="introduction-div">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto p-d-flex p-flex-column p-ai-center bg-green-400 border-round-xl p-p-4 introduction-container">
            <div class="block font-bold text-center">
                <h1>Introducción</h1>
            </div>
            <div class = "text-center font-bold"> 
                <p class="Introduccion">¡Bienvenidos a nuestra clase de Saludos y Expresiones en Lengua de Señas! Hoy vamos a explorar cómo comunicarnos de manera efectiva y respetuosa utilizando el lenguaje de señas. Los saludos y expresiones son fundamentales para establecer conexiones y mostrar cortesía en cualquier cultura, y aprenderlos en lengua de señas nos permitirá comunicarnos con la comunidad sorda de manera más inclusiva. A continuación, veremos un video proporcionado por el Arzobispado de Lima que nos enseñará las bases y la importancia de estos saludos en lengua de señas. ¡Esperamos que disfruten y aprendan mucho!</p>
            </div>
        </div>
    </div>
    
    <div class="video-div">
        <vue-plyr>
        <div data-plyr-provider="youtube" data-plyr-embed-id="BOGDDce3Dic"></div>
        </vue-plyr>
    </div>

    <level-template1 señal="Buenas Noches" src1="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719697.jpg" 
    src2="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719690.jpg" 
    src3="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719685.jpg" 
    src4="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719733.jpg" >
    </level-template1>

    <level-template2 src="https://img.freepik.com/foto-gratis/retrato-mujer-ensenando-lenguaje-senas_23-2148719685.jpg" 
        rpta1="Lengua de señas" rpta2="Buenos días" rpta3="Perdon" rpta4="Gracias" ></level-template2>
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

h1{
    font-size: 40px;
}

.Introduccion{
    padding: 20px;
    margin: 20px;
    font-size: 20px;
    line-height: 1.5;
    color: black;
}

.introduction-container{
    padding: 20px;
    margin: 20px;
}

.introduction-div{
    padding: 20px;
    margin: 20px;
}

.video-div{
    padding: 20px;
    margin: 20px;
}

</style>