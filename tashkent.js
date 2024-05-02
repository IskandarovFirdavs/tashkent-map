var map = L.map("map").setView([41.322627, 69.282773], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
let greenIcon = L.icon({
  iconUrl:
    "https://seeklogo.com/images/E/easy-logo-BFD61E2870-seeklogo.com.png",
  iconSize: [40, 40],
});
L.marker([41.322627, 69.282773], { icon: greenIcon }).addTo(map);
L.marker([41.325012, 69.265338], { icon: greenIcon }).addTo(map);
L.marker([41.341421, 69.265697], { icon: greenIcon }).addTo(map);
L.marker([41.344205, 69.291703], { icon: greenIcon }).addTo(map);
L.marker([41.340557, 69.307745], { icon: greenIcon }).addTo(map);
L.marker([41.337181, 69.284758], { icon: greenIcon }).addTo(map);
L.marker([41.308484, 69.261345], { icon: greenIcon }).addTo(map);
L.marker([41.332566, 69.306539], { icon: greenIcon }).addTo(map);
L.marker([41.319031, 69.307312], { icon: greenIcon }).addTo(map);
L.marker([41.306769, 69.289499], { icon: greenIcon }).addTo(map);
L.marker([41.316877, 69.249185], { icon: greenIcon }).addTo(map);
L.marker([41.337967, 69.244873], { icon: greenIcon }).addTo(map);
L.marker([41.328493, 69.243069], { icon: greenIcon }).addTo(map);
L.marker([41.311681, 69.279864], { icon: greenIcon }).addTo(map);
L.marker([41.308819, 69.313571], { icon: greenIcon }).addTo(map);
