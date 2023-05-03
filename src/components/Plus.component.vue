<template>
    <div class="img-container">
        <img src="src/imgs/plus.svg" alt="plus-logo">
    </div>
    <p id="p1">
        Learnsign es una aplicación que busca ayudar a mas personas a aprender este hermoso lenguaje.
    </p>
    <p id="p2">
        Con tu membrecia nos ayudas a seguir mejorando
    </p>
    <p id="p3">
        Beneficios:
    </p>
    <div class="list-container">
        <ul class="myUL">
            <li>Vidas infinitas</li>
            <li>0 anuncios</li>
        </ul>
    </div>
    <div class="Buttons-container">
        <pv-button label="Comprar a $3.00" class="myButton"/>
        <pv-button label="Volver"/>
    </div>

</template>

<script>
export default {
    name: "Plus"
}
</script>

<style scoped>

.img-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3em 3em;
}

img{
    width: 15%;
}

#p1{
   text-align: center;
   margin-bottom: 1px;
}

#p2{
    text-align: center;
}

#p3{
    text-align: center;
    margin-bottom: 1px;
}

.list-container{
    text-align: center;
}

.myUL{
    display: inline-block;
    text-align: left;
}

.Buttons-container{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

button{
    background-color: #3D8AFF;
    color: white;
    font-weight: bold;
    padding: 0.4em 3em;
    border: none;
    border-radius: 2em;
    cursor: pointer;
}

</style>