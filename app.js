function onload() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", ".//testBLOB/videoa.mp4");
    xhr.responseType = "blob";
 
    xhr.onload = function(error) {
        var blob = new Blob([xhr.response]);
        var blobUrl = URL.createObjectURL(blob);
        console.log(blobUrl);
        document.getElementById("video").src = blobUrl;
    }
    xhr.send();
}
