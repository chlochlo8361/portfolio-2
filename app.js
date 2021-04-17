// Creating Constants
const searchBox = document.querySelector('.search-box')
const searchBtn = document.querySelector('.search-btn')
const image = document.querySelector('.image')
const description = document.querySelector('.description')
const results = document.querySelector('.results')

// Event Listeners
searchBtn.addEventListener('click', getAnime)

// Functions
function getAnime() {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${searchBox.value.trim()}`)
    .then(response => response.json())
    .then(result => {
        let html = '';
        if(result.data) {
            result.data.forEach(item => {
                html += `
                <div class = "anime-item">
                    <div class = "anime-img">
                        <img src = "${item.attributes.posterImage.medium}" alt = "food">
                    </div>
                    <div class = "anime-name">
                        <h3>${item.attributes.titles.en}</h3>
                    </div>
                </div>
                `;
            })
            results.innerHTML = html;
        }
    }

)}