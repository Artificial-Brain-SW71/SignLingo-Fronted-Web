<script setup>

import Lvl_1_Image from "@/imgs/lvl1-image.png"
import Lvl_2_Image from "@/imgs/lvl2-image.png"
import Lvl_3_Image from "@/imgs/lvl3-image.png"
import Lvl_4_Image from "@/imgs/lvl4-image.png"
import Lvl_5_Image from "@/imgs/lvl5-image.png"
import Lvl_6_Image from "@/imgs/lvl6-image.png"
import Lvl_7_Image from "@/imgs/lvl7-image.png"
import Lvl_8_Image from "@/imgs/lvl8-image.png"
import Lvl_9_Image from "@/imgs/lvl9-image.png"
import Lvl_10_Image from "@/imgs/lvl10-image.png"
import Lvl_11_Image from "@/imgs/lvl11-image.png"


const photos = [Lvl_1_Image, Lvl_2_Image, Lvl_3_Image, Lvl_4_Image, Lvl_5_Image, Lvl_6_Image, Lvl_7_Image,
    Lvl_8_Image, Lvl_9_Image, Lvl_10_Image, Lvl_11_Image]
</script>

<template>
    <div class="card">
            <div class="block font-bold text-center p-4 border-round mb-3">
                <h1>Unidad 1</h1>
                <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
                    <level-item name="Introducción" :src="photos[0]" level_color="#49A964"/>
                </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Números" :src="photos[1]" level_color="#49A964"/>
            </div>
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Saludos" :src="photos[2]" level_color="#49A964"/>
            </div>
        </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Abecedario" :src="photos[3]" level_color="#49A964"/>
            </div>
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Sentimientos" :src="photos[4]" level_color="#49A964"/>
            </div>
        </div>
    </div>

    <div class="block font-bold text-center p-4 border-round mb-3">
        <h1>Unidad 2</h1>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <level-item name="Basico 1" :src="photos[5]" level_color="#49A964"/>
        </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Familia" :src="photos[6]" level_color="#49A964"/>
            </div>
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Animales" :src="photos[7]" level_color="#49A964"/>
            </div>
        </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Preguntas" :src="photos[8]" level_color="#49A964"/>
            </div>
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Objetos" :src="photos[9]" level_color="#49A964"/>
            </div>
        </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <level-item name="Basico 2" :src="photos[10]" level_color="#49A964"/>
        </div>
    </div>
</div>

</template>

<script>
import LevelItem from "@/components/levels-item.component.vue";

export default {
    name: "Levels",
    components: {LevelItem}
}
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