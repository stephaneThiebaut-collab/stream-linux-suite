const netflixMedia = document.getElementById("netflix");
const amazonMedia = document.getElementById("primevideo");
const disneyMedia = document.getElementById("disney");
const streamVue = document.getElementById("streamVue");

netflixMedia.addEventListener("click", () => {
    appStreamOpen('https://www.netflix.com')
})

amazonMedia.addEventListener("click", () => {
    appStreamOpen('https://www.primevideo.com/')
})

disneyMedia.addEventListener("click", () => {
    appStreamOpen('https://www.disneyplus.com/')
})

function appStreamOpen(url) {
    window.open(url, '_blank', 'top=500,left=200,frame=true,nodeIntegration=no')
}