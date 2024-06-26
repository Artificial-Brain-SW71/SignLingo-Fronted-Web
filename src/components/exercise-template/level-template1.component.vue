<script setup>
import { ref } from 'vue';

const props = defineProps({
  src1: {
    type: String,
    required: true,
  },
  src2: {
    type: String,
    required: true,
  },
  src3: {
    type: String,
    required: true,
  },
  src4: {
    type: String,
    required: true,
  },
  señal: {
    type: String,
    required: true,
  },
});

const selectedOption = ref(null);
const correctOption = ref(null);

const handleOptionSelect = (option) => {
  selectedOption.value = option;
  if (option === 'src3') {
    correctOption.value = true;
  } else {
    correctOption.value = false;
  }
};
</script>

<template>
  <div class="block font-bold text-center border-round mb-3">
    <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
      <h1>Elegir la señal de {{ señal }}</h1>
    </div>
    <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
      <div class="border-round w-20rem h-20rem text-white font-bold flex align-items-center justify-content-center">
        <img :src="src1" alt="" @click="handleOptionSelect('src1')">
      </div>
      <div class="border-round w-20rem h-20rem text-white font-bold flex align-items-center justify-content-center">
        <img :src="src2" alt="" @click="handleOptionSelect('src2')">
      </div>
    </div>
    <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
      <div class="border-round w-20rem h-20rem text-white font-bold flex align-items-center justify-content-center">
        <img :src="src3" alt="" @click="handleOptionSelect('src3')">
      </div>
      <div class="border-round w-20rem h-20rem text-white font-bold flex align-items-center justify-content-center">
        <img :src="src4" alt="" @click="handleOptionSelect('src4')">
      </div>
    </div>
    <div v-if="selectedOption !== null" class="result-box">
      <p v-if="correctOption" class="correct">¡Correcto!</p>
      <p v-else class="incorrect">Incorrecto, intenta de nuevo.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'level-template1',
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

h1 {
  font-size: 40px;
}

img {
  width: 300px;
  height: 300px;
  float: left;
  margin-right: 10px;
  border-radius: 20%;
  border: black 5px solid;
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
