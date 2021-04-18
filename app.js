// Creating Constants
const searchBox = document.querySelector('.search-box')
const searchBtn = document.querySelector('.search-btn')
const image = document.querySelector('.image')
const description = document.querySelector('.description')
const extraDetailsContainer = document.querySelector('.extra-details-container')
const animeContainer = document.querySelector('.anime-container')
const details = document.querySelector('.details-btn')

// Event Listeners
searchBtn.addEventListener('click', getAnime)
searchBtn.addEventListener('mouseOver', hoverOn)
searchBtn.addEventListener('mouseOut', hoverOff)
// details.addEventListener('mouseOut', hoverOff)
// details.addEventListener('mouseOver', hoverOn)
// details.addEventListener('click', getDetails)

// Functions
function getAnime() {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${searchBox.value.trim()}`)
    .then(response => response.json())
    .then(result => {
        let html = document.querySelector('.anime-container');
        if(result.data) {
            result.data.forEach(item => {
                animeContainer.innerHTML += `
                    <div class = "anime-img-container">
                        <h3 class="anime-title">${item.attributes.titles.en}</h3>
                        <img class="anime-img" src = "${item.attributes.posterImage.medium}" alt = "food"></br>
                        <button class="search-btn details-btn" onmouseover="hoverOn()" onmouseout="hoverOff()">Details</button>
                    </div>
                `;
            })
        }
    }
)}

function hoverOn() {
    searchBtn.style.fontSize = '1.7rem';
    searchBtn.style.backgroundColor = 'rgb(95, 202, 221)';
}
function hoverOff() {
    searchBtn.style.fontSize = '1.5rem';
    searchBtn.style.backgroundColor = 'rgb(25, 164, 189)';
}
