const API_KEY = "YOUR_API_KEY_HERE";
const primary = document.getElementById("primary");
const primaryParent = primary.parentNode;
primary.parentNode.removeChild(primary);
const quote = document.createElement("div");
quote.textContent = "Get back to achieving your coding dreams";
quote.classList.add("quote");

// infinite new image triggered by onclick
// for the first call - generate a image etc and appends the onclick event
function getImage() {
  $.ajax({
    method: "GET",
    url: `https://api.unsplash.com/photos/random?client_id=${API_KEY}&query=motivational+quotes&w=1024&h=768`,
    // take out the entire "success" function as a callback
    success: onSuccess,
    error: function (err) {
      console.log(err);
    },
  });
}

function getOtherImages() {
  $.ajax({
    method: "GET",
    url: `https://api.unsplash.com/photos/random?client_id=${API_KEY}&query=motivational+quotes&w=1024&h=768`,
    success: function (result) {
      document.getElementById(
        "inspirationalImage"
      ).src = `${result.urls.custom}`;
      console.log(result);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

// onclick event = call AJAX again and pass in a new callback this time to replace the img src
function onSuccess(result) {
  const responseObj = result;
  console.log(responseObj);
  const wrapper = document.createElement("div");
  const image = document.createElement("img");
  image.id = "inspirationalImage";
  image.src = `${responseObj.urls.custom}`;
  wrapper.appendChild(quote);
  wrapper.appendChild(image);
  primaryParent.prepend(wrapper);
  image.onclick = function onClick() {
    // getImage(callback);
    getOtherImages();
  };
  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      getOtherImages();
    }
  });
}

getImage();
