<template>
    <div class="card-container yellow-container">
      <div class="block bg-yellow-500 font-bold text-center p-4 border-round mb-3">
        <h1>Unidad 1</h1>
        <div class="p-wrap">
          <level-item name="Introducción" to="/level1" src="src/imgs/lvl1-image.png" level_color="#49A964" />
        </div>
        <div class=" p-wrap">
          <level-item name="Números" to="/level2" src="src/imgs/lvl2-image.png" level_color="#49A964" />
          <level-item name="Saludos" to="/level3" src="src/imgs/lvl3-image.png" level_color="#49A964" />
        </div>
        <div class="levels-container p-wrap">
          <level-item name="Abecedario" to="/level4" src="src/imgs/lvl4-image.png" level_color="#49A964" />
          <level-item name="Sentimientos" to="/level5" src="src/imgs/lvl5-image.png" level_color="#49A964" />
        </div>
      </div>
      <div class="block bg-yellow-500 font-bold text-center p-4 border-round mb-3">
        <h1>Unidad 2</h1>
        <div class="p-wrap">
          <level-item name="Basico 1" to="/level6" src="src/imgs/lvl6-image.png" level_color="#49A964" />
        </div>
        <div class="levels-container p-wrap">
          <level-item name="Familia" to="/level7" src="src/imgs/lvl7-image.png" level_color="#49A964" />
          <level-item name="Animales" to="/level8" src="src/imgs/lvl8-image.png" level_color="#49A964" />
        </div>
        <div class="levels-container p-wrap">
          <level-item name="Preguntas" to="/level9" src="src/imgs/lvl9-image.png" level_color="#49A964" />
          <level-item name="Objetos" to="/level10" src="src/imgs/lvl10-image.png" level_color="#49A964" />
        </div>
        <div class="p-wrap">
          <level-item name="Basico 2" to="/level11" src="src/imgs/lvl11-image.png" level_color="#49A964" />
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