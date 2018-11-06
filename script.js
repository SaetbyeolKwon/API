
var baseURL;
var pokemon;
var name;
var tag;
var fullURL;

var title = document.getElementById("title");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var sprites = document.getElementById("sprites");
var ajaxButton = document.getElementById("ajaxButton");


(function() {
 
  document.getElementById("ajaxButton").addEventListener("click", makeRequest);
 
  var httpRequest;
  function makeRequest() {

    baseURL = "https://pokeapi.co/api/v2";
    pokemon = "/pokemon/";
    name = "celebi";
    tag = "/";
    name = document.getElementById("name").value;
    fullURL = baseURL + pokemon + name + tag;

    httpRequest = new XMLHttpRequest();
       if (!httpRequest) {
      alert("It did not work :(");
      return false;
    }
    httpRequest.onreadystatechange = fillInfo;
    httpRequest.open(
      "GET", fullURL
    );
    httpRequest.send();
  }

  function fillInfo() {
    var responseContent;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          // console.log(httpRequest.responseText);
          responseContent = httpRequest.responseText;
          // console.log(responseContent);

          var parsed = JSON.parse(responseContent);
          console.log('Name = '+parsed.name);
          console.log('Height = '+parsed.height);
          console.log('Weight = '+parsed.weight);
          console.log('Sprite = '+parsed.sprites.front_default);
          title.innerHTML = parsed.name;
          height.innerHTML = "height: "+parsed.height;
          weight.innerHTML = "weight: "+parsed.weight; 
          sprites.innerHTML = "<img src = " + parsed.sprites.front_default + ">";
          ajaxButton.innerHTML = "Getcha!";
          

      } else {
        alert("There was a problem with the request.");
      }
    }
  }
})();