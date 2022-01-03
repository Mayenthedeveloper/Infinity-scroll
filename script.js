//API
const count = 10;
const apiKey = "gTZTAeOlqPesvXHnq56-P1vdfn7Mcr2UWzGWKe9ha8k";
const apiUrl = `https://api.unsplash.com/photos/random
/?client_id=${apiKey}&count=${count}
`;

//get photos from unspalsh api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //catch error here
  }
}

//on load
getPhotos();
