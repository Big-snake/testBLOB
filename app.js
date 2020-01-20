function onload() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./robloxapp-20191027-0901570.wmv");
    xhr.responseType = "arraybuffer";
 
    xhr.onload = function(error) {
        var blob = new Blob([xhr.response]);
        var blobUrl = URL.createObjectURL(blob);
        console.log(blobUrl);
        document.getElementById("video").src = blobUrl;
    }
    xhr.send();
}
