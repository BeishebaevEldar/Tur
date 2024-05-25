let img = document.getElementById("img");
let arrImg = ["./immages/i1.avif", "./immages/s2.png", "./immages/s3.png"];
let el = 0;
img.src = arrImg[el];
function startImg() {
  return el++;
}
setInterval(() => {
  startImg();
  if (el >= 3) {
    el = 0;
  }
  img.src = arrImg[el];
}, 5000);
