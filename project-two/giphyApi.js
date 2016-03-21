var createEl = function(div,attribute,name){
  var el = document.createElement(div);
  el.setAttribute(attribute,name);
  // el.innerText = "HELLLLOOOOO UNIVERSE"
  body.appendChild(el);
}
var giphyApi = function (){

  // createEl('input','id','fun-input');
  createEl('div','id','fun-pic') //create an img container
  createEl('button','id','fun-button');
  var funbutton = document.getElementById('fun-button');
  funbutton.innerText = "Do you dare to click me?";

  funbutton.addEventListener("click", function(){
    var fishEl = document.querySelector('.fish')
    fishEl.style.display= "none";
    var funPicEl = document.getElementById('fun-pic');

    var query = "http://api.giphy.com/v1/gifs/ujUdrdpX7Ok5W?api_key=dc6zaTOxFJmzC";
    console.log(query);
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/ujUdrdpX7Ok5W?api_key=dc6zaTOxFJmzC",
      // dataType: "JSONP"
    }).done(function(response){
      console.log(response);

      var templateSource = document.getElementById('giphy-template').innerHTML;
      // console.log(templateSource);

      var template = Handlebars.compile(templateSource);
      // console.log(template);

      var computedHTML = template(response);
      // console.log(computedHTML);

      funPicEl.innerHTML = computedHTML;

      // var gif = response.data.images.downsized.url;
      // funPicEl.innerHTML = "<a href=" + gif + "><img src="" alt=""></a>";

    }) //end of
  }) //end of eventListener
} //end of giphiApi
