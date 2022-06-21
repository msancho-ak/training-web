<template>
    <div v-if="type==='Characters'" class="common-items-container_grid">
        <CharactersContainerGridItemVue v-for="(character,index) in Characters" :key="index" 
                                    :mostrar="index<2"  :text="character.name" :imgPath="character.imgPath"/>
    </div>
</template>

<script>
    import CharactersContainerGridItemVue from './CharactersContainerGridItem.vue'
    export default {
        name:"CommonItemsContainerGrid",
        props:["type"],
        components:{CharactersContainerGridItemVue},
        data(){
            return{
                Characters :[
                    {
                        name:"Monkey D. Luffy",
                        imgPath:require("../assets/monkeydluffy.svg")
                    },
                    {
                        name:"Portgas D. Ace",
                        imgPath:require("../assets/ace.svg")
                    },
                    {
                        name:"Roronoa Zoro",
                        imgPath:require("../assets/zoro.svg")
                    },
                    {
                        name:"Nico Robin",
                        imgPath:require("../assets/nico.svg")
                    },
                ],
                Islands :[
                    {
                        name:"Dawn Island",
                        img:'',
                        location: "East Blue"
                    },
                    {
                        name:"Reverse Island",
                        img:"reverse",
                        location: "East Blue"
                    },
                    {
                        name:"Reverse Island",
                        img:"reverse",
                        location: "East Blue"
                    },
                    {
                        name:"Reverse Island",
                        img:"reverse",
                        location: "East Blue"
                    },
                ],
                Mist :[
                    {
                        name:"Gomu Gomu No Mi",
                        img:"gomu",
                        description: "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."
                    },
                    {
                        name:"Gomu Gomu No Mi",
                        img:"gomu",
                        description: "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."
                    },
                    {
                        name:"Gomu Gomu No Mi",
                        img:"gomu",
                        description: "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."
                    },
                    {
                        name:"Gomu Gomu No Mi",
                        img:"gomu",
                        description: "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>