<template>
    <div class="card">
            <div class="block font-bold text-center p-4 border-round mb-3">
                <h1>Unidad 1</h1>
                <div class="flex flex-wrap justify-content-center card-container blue-container gap-3 bg-blue-500">
                    <level-item name="Introducción" to="/level1" src="src/imgs/lvl1-image.png" level_color="#49A964"/>
                </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Números" to="/level2" src="src/imgs/lvl2-image.png" level_color="#49A964"/>
            </div>
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Saludos" to="/level3" src="src/imgs/lvl3-image.png" level_color="#49A964"/>
            </div>
        </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Abecedario" to="/level4" src="src/imgs/lvl4-image.png" level_color="#49A964"/>
            </div>
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Sentimientos" to="/level5" src="src/imgs/lvl5-image.png" level_color="#49A964"/>
            </div>
        </div>
    </div>

    <div class="block font-bold text-center p-4 border-round mb-3">
        <h1>Unidad 2</h1>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <level-item name="Basico 1" to="/level6" src="src/imgs/lvl6-image.png" level_color="#49A964"/>
        </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Familia" to="/level7" src="src/imgs/lvl7-image.png" level_color="#49A964"/>
            </div>
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Animales" to="/level8" src="src/imgs/lvl8-image.png" level_color="#49A964"/>
            </div>
        </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Preguntas" to="/level9" src="src/imgs/lvl9-image.png" level_color="#49A964"/>
            </div>
            <div class="border-round w-20rem h-14rem text-white font-bold flex align-items-center justify-content-center">
                <level-item name="Objetos" to="/level10" src="src/imgs/lvl10-image.png" level_color="#49A964"/>
            </div>
        </div>
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
            <level-item name="Basico 2" to="/level11" src="src/imgs/lvl11-image.png" level_color="#49A964"/>
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