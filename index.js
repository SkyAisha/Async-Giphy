require("dotenv").config();
async function getImages(query) {
  try {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=cats&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const imageURL = data.data[0].url;
    return imageURL;
  } catch (err) {
    console.log(err);
  }
}

getImages("cats").then((imageURL) => {
  console.log("GIF Image URL:", imageURL);
});
