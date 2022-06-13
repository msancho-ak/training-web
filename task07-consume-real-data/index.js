document.addEventListener("DOMContentLoaded", function() {
    paintData();    
});

function readMoreOrLess(){
    let readMoreDiv = document.getElementById("readMoreSipnosis")
    let readMoretext = document.getElementById("readMoreText")
    let readMoreIcon = document.getElementById("readMoreIcon")
    let logoReadMore = document.getElementById("logoReadMore")
    
    if(window.getComputedStyle(readMoreDiv).display == 'none'){
        logoReadMore.style.display = 'block';
        readMoreDiv.style.display = 'block';
        readMoretext.innerText = "Read Less"
        readMoreIcon.src ="images/readLess.svg"

    }
    else{
        logoReadMore.style.display = 'none';
        readMoreDiv.style.display = 'none';
        readMoretext.innerText = "Read All"
        readMoreIcon.src ="images/readMore.svg"
    }
    
}

function showOrHideMenu(){

    let menuOptions = document.getElementById("menuOptions")
    let iconMenu = document.getElementById("iconMenu")
    if(window.getComputedStyle(menuOptions).display == 'none'){
        menuOptions.style.display = 'block';
        iconMenu.src ="images/close.svg"
    }
    else{
        menuOptions.style.display = 'none';
        iconMenu.src ="images/menu.svg"
    }
}
async function readRealData() {
    try {
        let response =  await fetch("https://static.akurey.com/trainings/OnePieceInformation.json");
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        return json;
    }
    catch(error) {
        console.error(`Could not get data: ${error}`);
    }
}
function compareStrings(a, b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

const paintData = ()=>{
    const json = readRealData();
    json.then((result)=>{
        let sortedIslands = result.islands.sort(function(a, b) {
            return compareStrings(a.name, b.name);
        })
        let sortedCharacters = result.characters.sort(function(a, b) {
            return compareStrings(a.name, b.name);
        })
        let sortedMysticObjects = result.mysticObjects.sort(function(a, b) {
            return compareStrings(a.name, b.name);
        })
        populateCharacters(sortedCharacters);
        populateIslands(sortedIslands);
        populateMysticObjects(sortedMysticObjects);
    })
}



const populateCharacters = (charactersList)=>{
    let  charactersGrid = document.getElementById('characters-grid');
    let charactersListSlice = charactersList.slice(0,4);
    charactersListSlice.forEach((element,index) => {
        let html = charactersHTML(element);
        charactersGrid.innerHTML = charactersGrid.innerHTML + html;
    });
}
const charactersHTML = (character) => {
    const htmlStructure = `<div class="characters-container_grid_item">
                                <img src="images/${character.img}" alt="" />
                                <p class="characters-container_grid_item_characterName">
                                    ${character.name}
                                </p>
                            </div>`
    return htmlStructure;
}


const populateIslands = (islandsList)=>{
    let  islandGrid = document.getElementById('island-grid');
    let islandListSlice = islandsList.slice(0,3);
    islandListSlice.forEach((element,index) => {
        let html = islandsHTML(element);
        islandGrid.innerHTML = islandGrid.innerHTML + html;
    });
}


const islandsHTML = (island) => {
        const htmlStructure = `<div class="island-container_grid_item">
                                    <img src="images/${island.img}" alt="" />
                                    <div class="island-container_grid_item_descripcion">
                                    <b><span>${island.name}</span></b>
                                    <div class="island-container_grid_item_descripcion_region">
                                        <img
                                        style="width: 10px; height: 10px"
                                        src="images/loc.svg"
                                        alt=""
                                        />
                                        <span>${island.Location}</span>
                                    </div>
                                    </div>
                                </div>`
    return htmlStructure;
}


const populateMysticObjects = (mysticObjectsList)=>{
    let  mysticObjectsGrid = document.getElementById('mysticObjects-grid');
    let mysticObjectsSlice = mysticObjectsList.slice(0,4);
    mysticObjectsSlice.forEach((element) => {
        let html = mysticObjectsHTML(element);
        mysticObjectsGrid.innerHTML = mysticObjectsGrid.innerHTML + html;
    });
}

const mysticObjectsHTML = (object) => {
    const htmlStructure = `<div class="mist-objects-container_grid_item">
                            <img src="images/gommu.svg" alt="" />
                            <div class="mist-container_grid_item_descripcion">
                            <b><span>${object.name}</span></b> 
                            <span>${object.description.length > 190 ? object.description.substring(0,191)+"...":object.description }</span>
                            </div>
                        </div>`
return htmlStructure;
}