<template>
    <div class="menu-container">
        <div class="menu-container_icon hideDesktop" v-on:click="mostrarMenu()" >
            <img id="iconMenu" src="../assets/menu.svg" alt="" />
        </div>
        <div class="menu-container_logo">
            <img src="../assets/One-Piece-Logo1.svg" alt="" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuContainer",
        methods:{
        mostrarMenu(){
        let menuOptions = document.getElementById("menuOptions")
        let iconMenu = document.getElementById("iconMenu")
        if(window.getComputedStyle(menuOptions).display == 'none'){
            menuOptions.style.display = 'block';
            iconMenu.src =require("../assets/close.svg");
        }
        else{
            menuOptions.style.display = 'none';
            iconMenu.src = require("../assets/menu.svg");
        }
    }
        }
    }
</script>
<style>
</style>