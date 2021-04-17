// Creating Constants
const searchBox = document.querySelector('.search-box')
const searchBtn = document.querySelector('.search-btn')
const image = document.querySelector('.image')
const description = document.querySelector('.description')
const results = document.querySelector('.results')
const animeContainer = document.querySelector('.anime-container')

// Event Listeners
searchBtn.addEventListener('click', getAnime)

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
                        <img class="anime-img" src = "${item.attributes.posterImage.medium}" alt = "food">
                    </div>
                `;
            })
        }
    }
)}