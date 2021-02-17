function searchMusic() {
    var artistName = document.getElementById('artistInput').value;
    //var albumName = document.getElementById('albumInput').value;

    var url = "https://www.theaudiodb.com/api/v1/json/1/discography.php?s=" + artistName;

    var albumDiv = document.getElementById('albumArt');

    fetch(url)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Problem, status code is' + response.status);
                return;
            }
            response.json().then(function(data) {
                console.log(data);
                let jsonContent = data.album;
                console.log(jsonContent);
                for (i in jsonContent) {
                    var discographyDiv = document.getElementById('discography');
                    var albumYearDiv = document.createElement('span');
                    albumYearDiv.setAttribute('class', 'h4');
                    albumYearDiv.innerText = jsonContent[i].intYearReleased;
                    var albumNameDiv = document.createElement('span');
                    albumNameDiv.setAttribute('class', 'h4');
                    albumNameDiv.innerText = jsonContent[i].strAlbum;
                    discographyDiv.appendChild(albumYearDiv);
                    discographyDiv.appendChild(albumNameDiv);
                }
                //albumDiv.src = jsonContent.strAlbumThumb;
                document.getElementById('albumYear').innerText = jsonContent.intYearReleased;
                document.getElementById('albumName').innerText = jsonContent.strAlbum;
            });
        });
    }