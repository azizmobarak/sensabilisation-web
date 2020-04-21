var count = 0;
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

function hideimg() {
    if (count == 0) {
        img1.style.display = "none";
        img2.style.display = "block";
        img3.style.display = "block";
        img4.style.display = "block";
    }
    if (count == 1) {
        img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "block";
        img4.style.display = "block";
    }
    if (count == 2) {
        img1.style.display = "block";
        img2.style.display = "block";
        img3.style.display = "none";
        img4.style.display = "block";
    }
    if (count == 3) {
        img1.style.display = "block";
        img2.style.display = "block";
        img3.style.display = "block";
        img4.style.display = "none";
    }
    count++;
    if (count >= 4) {
        count = 0;
    }
}