<script setup>
import { reactive } from 'vue'
import '@fullcalendar/core'
import FullCalendar from '@fullcalendar/vue3'
</script>

<script>
  import {reactive} from "vue";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import listPlugin from "@fullcalendar/list";
  import interactionPlugin from "@fullcalendar/interaction";


  export default {
   name: "Calender"
  }
  const options = reactive({
   plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
   initialView: 'dayGridMonth',
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
      },
  })
</script>

<template>
    <full-calendar v-bind:options="options"/>
    <br>
    <div>
        <button class="active-days"></button>
        <span class="text">Dias activos</span>
    </div>
    <br>
    <div>
        <button class="nonactive-days"></button>
        <span class="text">Dias inactivos</span>
    </div>
</template>

<style scoped>

.fc{
    height: 530px;
    width: auto;
    border: none;
    background-color: #32393F;
    color: white;
    --fc-border-color:white;
    --fc-today-bg-color: #29CB97;
    --fc-button-bg-color: #29CB97;
    --fc-button-border-color: white;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    padding: 10px;
}

.active-days{
    border: 1px solid #000000;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    padding: 10px;
    background-color: #29CB97;
    width: 50px;
    vertical-align: middle;
}
.nonactive-days{
    border: 1px solid #000000;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    padding: 10px;
    background-color: #32393F;
    width: 50px;
    vertical-align: middle;
}

.text{
    font-style: normal;
    font-weight: 700;
    margin: 10px;
    align-content: center;
}

</style>