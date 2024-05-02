var map = L.map("map").setView([38.839871, 65.790898], 13);
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
L.marker([38.839871, 65.790898], { icon: greenIcon }).addTo(map);
L.marker([38.835994, 65.779647], { icon: greenIcon }).addTo(map);
L.marker([38.845962, 65.78249], { icon: greenIcon }).addTo(map);
L.marker([38.845286, 65.767882], { icon: greenIcon }).addTo(map);
L.marker([38.834697, 65.76848], { icon: greenIcon }).addTo(map);
L.marker([38.846891, 65.803797], { icon: greenIcon }).addTo(map);
L.marker([38.837832, 65.804055], { icon: greenIcon }).addTo(map);
L.marker([38.832504, 65.795852], { icon: greenIcon }).addTo(map);
L.marker([38.821892, 65.780873], { icon: greenIcon }).addTo(map);
L.marker([38.821658, 65.762408], { icon: greenIcon }).addTo(map);
L.marker([38.83479, 65.757512], { icon: greenIcon }).addTo(map);
L.marker([38.848829, 65.756361], { icon: greenIcon }).addTo(map);
L.marker([38.852599, 65.772911], { icon: greenIcon }).addTo(map);
L.marker([38.85663, 65.793756], { icon: greenIcon }).addTo(map);
L.marker([38.824239, 65.793094], { icon: greenIcon }).addTo(map);
