var table = <HTMLTableElement>document.querySelector(".table");
var playListTable = <HTMLTableElement>document.querySelector(".playlist-table");
var songBody = <HTMLAnchorElement>document.getElementById("song-body");
var playListBody = <HTMLAnchorElement>document.getElementById("playlist-body");
var redirectPlaylist = <HTMLButtonElement>document.getElementById("playlist");
var playList = [];

async function fetchMusic() {
  try {
    playListTable.style.display = "none";
    const result = await fetch(
      "http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
    );
    const data = await result.json();
    var response = data.tracks;
    response.forEach((item) => {
      var tr = <HTMLTableRowElement>document.createElement("tr");
      var link = <HTMLAnchorElement>document.createElement("a");
      link.setAttribute("class", "link");
      link.innerHTML = item.name;
      link.href = item.previewURL;
      var td1 = <HTMLTableDataCellElement>document.createElement("td");
      td1.appendChild(link);
      var td2 = <HTMLTableDataCellElement>document.createElement("td");
      td2.innerHTML = item.artistName;
      var td3 = <HTMLTableDataCellElement>document.createElement("td");
      td3.innerHTML = item.albumName;
      var playlistButton = <HTMLButtonElement>document.createElement("button");
      playlistButton.setAttribute("id", item.name + "-" + item.previewURL);
      playlistButton.innerHTML = "Add to playlist";
      playlistButton.setAttribute("class", "btn btn-success");
      playlistButton.addEventListener("click", () => {
        playList.push(item.name + "-" + item.previewURL);
      });
      var td4 = <HTMLTableDataCellElement>document.createElement("td");
      td4.appendChild(playlistButton);
      tr.append(td1, td2, td3, td4);
      songBody.appendChild(tr);
    });
    redirectPlaylist.addEventListener("click", () => {
      table.style.display = "none";
      playListTable.style.display = "table";
      redirectPlaylist.style.display = "none";
      playList.forEach((item) => {
        var name = item.split("-")[0];
        var songLink = item.split("-")[1];
        var tr = <HTMLTableRowElement>document.createElement("tr");
        let td1 = <HTMLTableDataCellElement>document.createElement("td");
        td1.innerHTML = name;
        let td2 = <HTMLTableDataCellElement>document.createElement("td");
        var playButton = <HTMLButtonElement>document.createElement("button");
        playButton.innerHTML = "Play";
        playButton.setAttribute("class", "btn btn-success");
        playButton.addEventListener("click", () => {
          location.href = songLink;
        });
        td2.appendChild(playButton);
        tr.append(td1, td2);
        playListBody.appendChild(tr);
      });
    });
  } catch {
    alert("Error!!!.Something went Wrong");
  }
}

window.addEventListener("load", () => {
  fetchMusic();
});
