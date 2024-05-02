var map = L.map("map").setView([37.239752, 67.296635], 14);
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
L.marker([37.249741, 67.274079], { icon: greenIcon }).addTo(map);
L.marker([37.239, 67.2747], { icon: greenIcon }).addTo(map);
L.marker([37.228135, 67.274476], { icon: greenIcon }).addTo(map);
L.marker([37.246721, 67.291052], { icon: greenIcon }).addTo(map);
L.marker([37.239752, 67.296635], { icon: greenIcon }).addTo(map);
L.marker([37.230527, 67.287789], { icon: greenIcon }).addTo(map);
L.marker([37.240093, 67.283237], { icon: greenIcon }).addTo(map);
L.marker([37.249522, 67.305733], { icon: greenIcon }).addTo(map);
L.marker([37.241118, 67.313978], { icon: greenIcon }).addTo(map);
L.marker([37.233943, 67.302644], { icon: greenIcon }).addTo(map);
L.marker([37.250998, 67.286119], { icon: greenIcon }).addTo(map);
L.marker([37.244808, 67.307194], { icon: greenIcon }).addTo(map);
L.marker([37.232809, 67.311814], { icon: greenIcon }).addTo(map);
L.marker([37.252378, 67.299], { icon: greenIcon }).addTo(map);
L.marker([37.229406, 67.30034], { icon: greenIcon }).addTo(map);
