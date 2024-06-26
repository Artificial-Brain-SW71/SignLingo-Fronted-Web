<script setup>
import { ref } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  rpta1: {
    type: String,
    required: true,
  },
  rpta2: {
    type: String,
    required: true,
  },
  rpta3: {
    type: String,
    required: true,
  },
  rpta4: {
    type: String,
    required: true,
  },
});

const selectedOption = ref(null);
const correctOption = ref(null);

const handleOptionSelect = (option) => {
  selectedOption.value = option;
  if (option === props.rpta1) {
    correctOption.value = true;
  } else {
    correctOption.value = false;
  }
};
</script>

<template>
  <div class="block font-bold text-center p-4 border-round mb-3">
    <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
      <h1>Escoja el significado de la siguiente señal</h1>
    </div>
    <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
      <img :src="src" alt="">
    </div>
    <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
      <div class="border-round w-15rem h-5rem text-white font-bold flex align-items-center justify-content-center">
        <button class="button-68" role="button" @click="handleOptionSelect(rpta1)">{{ rpta1 }}</button>
      </div>
      <div class="border-round w-15rem h-5rem text-white font-bold flex align-items-center justify-content-center">
        <button class="button-68" role="button" @click="handleOptionSelect(rpta2)">{{ rpta2 }}</button>
      </div>
    </div>

    <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
      <div class="border-round w-15rem h-5rem text-white font-bold flex align-items-center justify-content-center">
        <button class="button-68" role="button" @click="handleOptionSelect(rpta3)">{{ rpta3 }}</button>
      </div>
      <div class="border-round w-15rem h-5rem text-white font-bold flex align-items-center justify-content-center">
        <button class="button-68" role="button" @click="handleOptionSelect(rpta4)">{{ rpta4 }}</button>
      </div>
    </div>
    
    <div v-if="selectedOption !== null" class="result-box">
      <p v-if="correctOption" class="correct">¡Correcto!</p>
      <p v-else class="incorrect">Incorrecto, intenta de nuevo.</p>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

img {
  width: 300px;
  height: 300px;
  float: left;
  margin-right: 10px;
  border-radius: 20%;
  border: black 5px solid;
}

h1 {
  font-size: 40px;
}

p {
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
}

.nav-item {
  padding: 20px 20px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.2s, opacity 0.2s;
  margin: 30px 10px;
}

.nav-item:hover {
  background-color: rgba(71, 167, 255, 0.7);
}

.nav-item:active {
  opacity: 0.4;
}

.container {
  display: flex;
  align-items: center;
}

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
  font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif;
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

.result-box {
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.correct {
  background-color: #27ae60;
  color: #fff;
  padding: 20px;
    margin: 20px;
    font-size: 20px;
    line-height: 1.5;
}

.incorrect {
  background-color: #e74c3c;
  color: #fff;
  padding: 20px;
    margin: 20px;
    font-size: 20px;
    line-height: 1.5;
}
</style>
