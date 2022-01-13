const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

//API
const count = 30;
const apiKey = "gTZTAeOlqPesvXHnq56-P1vdfn7Mcr2UWzGWKe9ha8k";
const apiUrl = `https://api.unsplash.com/photos/random
/?client_id=${apiKey}&count=${count}
`;
//image loader
function imageLoaded() {
  console.log("Image loaded");
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    console.log("ready =", ready);
  }
}

//helper function
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// create elements for links and photos add to dom
function displayPhotos() {
  totalImages = photosArray.length;
  console.log("total images", totalImages);
  //run function fr each object in photoarray
  photosArray.forEach((photo) => {
    // create <a> to link to unspash
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    //create img for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // eveent listener, check when is finished loading
    img.addEventListener("load", imageLoaded);
    //put img inside a,
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//get photos from unsplash api
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

//check to see if scrolling is near bottom of page, load more pics

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
    console.log("load more");
  }
});

//On load
getPhotos();
