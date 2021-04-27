// Creating Constants
const searchBox = document.querySelector('.search-box')
const searchBtn = document.querySelector('.search-btn')
const image = document.querySelector('.image')
const animeContainer = document.querySelector('.anime-container')
const detailsBtn = document.querySelector('.details-btn')

var animeStore;


// Event Listeners
searchBtn.addEventListener('click', getAnime)

// Hover On/Off functions
function hoverDetailsOn(btn) {
    btn.style.backgroundColor = 'rgb(13, 108, 128)';
}
function hoverDetailsOff(btn) {
    btn.style.backgroundColor = 'rgb(0, 10, 12)';
}
function hoverOn() {
    searchBtn.style.backgroundColor = 'rgb(95, 202, 221)';
}
function hoverOff() {
    searchBtn.style.backgroundColor = 'rgb(25, 164, 189)';
}
// Functions
function getAnime() {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${searchBox.value.trim()}`)
    .then(response => response.json())
    .then(result => {
        let html = document.querySelector('.anime-container');
        if(result.data) {
            animeStore = result.data.filter((item) => {
                return item.attributes.titles.en_us !== undefined
            })
            animeContainer.innerHTML = ''
            animeStore.forEach((item,idx) => {

                animeContainer.innerHTML += `
                    <div class = "anime-img-container">
                        <h4 class="anime-title">${item.attributes.titles.en_us}</h4>
                        <img class="anime-img" src = "${item.attributes.posterImage.medium}" alt = "food"></br>
                        <button class="search-btn details-btn" onclick="getDetails(${idx})" onmouseover="hoverDetailsOn(this)" onmouseout="hoverDetailsOff(this)">More details on ${item.attributes.titles.en_us}</button>
                    </div>
                `;
            })
        }
    }
)}

function getDetails(idx) {    
    // alert("You clicked the details button") 
// };
    const extraDetailsContainer = document.querySelector('.extra-details-container')
    let item = animeStore[idx]
    let desc = item.attributes.description ? item.attributes.description : 'No Description Avaliable'
    extraDetailsContainer.innerHTML = `
            <div class = "extra-details">
                <button class="close-btn" onclick="closeExtraDetails()">&#10006;</button>
                <div class="flex-container">
                    <div class="container1">
                    <h3 class="anime-title">${item.attributes.titles.en_us}</h3>
                        <img class="anime-img" src = "${item.attributes.posterImage.small}"></br>
                    </div>
                    <div class="container2">
                        <p class="description">${desc}</p>
                    </div>
                </div>
            </div>
    `;         
    // const description = document.querySelector('.description')
    extraDetailsContainer.style.display = 'block';
    const closeBtn = document.querySelector('.close-btn')
    closeBtn.addEventListener('click', closeExtraDetails)
}

function closeExtraDetails() {
    document.querySelector('.extra-details-container').style.display = 'none';
    const extraDetailsContainer = document.querySelector('.extra-details-container')
    extraDetailsContainer.innerHTML = '';
}
