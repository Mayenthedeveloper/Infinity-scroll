const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

//API
const count = 10;
const apiKey = "gTZTAeOlqPesvXHnq56-P1vdfn7Mcr2UWzGWKe9ha8k";
const apiUrl = `https://api.unsplash.com/photos/random
/?client_id=${apiKey}&count=${count}
`;

// create elements for links and photos add to dom
function displayPhotos() {
  //run function fr each object in photoarray
  photosArray.forEach((photo) => {
    // create <a> to link to unspash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    //craete img for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    //put img inside a,
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//get photos from unspalsh api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);

    displayPhotos();
  } catch (error) {
    //catch error here
  }
}

//on load
getPhotos();
