const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const map = L.map("mapid", options).setView([-19.4557392, -44.2513197], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([-19.4557392, -44.2513197], { icon }).addTo(map);

/*image galery*/

function selectImage(event) {
  const button = event.currentTarget;

  /*remove o .active da image atual*/
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  /*seleciona a image clicada*/
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img");

  /*atualiza o container da image*/
  imageContainer.src = image.src;

  /*adiciona o .active novamente a image atual*/
  button.classList.add("active");
}
