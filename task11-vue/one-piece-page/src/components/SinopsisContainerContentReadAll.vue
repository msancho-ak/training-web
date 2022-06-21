<template>
    <div class="sinopsis-container_content_readAll hideDesktop" v-on:click="readMoreOrLess()">
        <img id="readMoreIcon" src='../assets/readMore.svg' alt="" />
        <span id="readMoreText">Read All</span>
    </div>
</template>

<script>
    export default {
        name:"SinopsisContainerContentReadAll",
        methods:{
                readMoreOrLess(){
                let readMoreDiv = document.getElementById("readMoreSipnosis")
                let readMoretext = document.getElementById("readMoreText")
                let readMoreIcon = document.getElementById("readMoreIcon")
                let logoReadMore = document.getElementById("logoReadMore")
                if(window.getComputedStyle(readMoreDiv).display == 'none'){
                    logoReadMore.style.display = 'block';
                    readMoreDiv.style.display = 'block';
                    readMoretext.innerText = "Read Less"
                    readMoreIcon.src =require("../assets/readLess.svg");
                }
                else{
                    logoReadMore.style.display = 'none';
                    readMoreDiv.style.display = 'none';
                    readMoretext.innerText = "Read All";
                    readMoreIcon.src =require("../assets/readMore.svg");
                }
            }
        }
    }
</script>

<style scoped>

</style>