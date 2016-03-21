var createEl = function(div,attribute,name){
  var el = document.createElement(div);
  el.setAttribute(attribute,name);
  // el.innerText = "HELLLLOOOOO UNIVERSE"
  body.appendChild(el);
}

var onename = function(){

  createEl('button','id','onename-button');
  var onenameButton = document.getElementById('onename-button');
  onenameButton.innerText = "Search";
  onenameButton.addEventListener('click', function(){
    createEl('div','id','onename-container');

    ;
    console.log(query);

    $.ajax({
      url: query,
      dataType: "JSONP"
    }).done(function(response){
      console.log(response);
    })//end of done function
  }) //end of eventListener
} //end of onename function
