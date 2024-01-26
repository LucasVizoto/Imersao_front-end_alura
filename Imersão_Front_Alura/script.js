const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists")
//querySelector pega sempre o primeiro
//querySelectorAll seletor do Node 


function requestAPI(searchTerm){
    const url = `http://localhost:3000/artists/name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
}

document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden'); //mexe nas classes usadas aqui. 
        return;
    }

    requestAPI(searchTerm);
})

//tô escutando esse evento x pra quando acontecer, fazer tal coisa