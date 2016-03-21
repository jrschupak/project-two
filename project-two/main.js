var body = document.querySelector('body');
var form = document.querySelector('form');


window.onload = function(){



var enterButton = document.getElementById('enter-button');
console.log(enterButton);
enterButton.addEventListener("click", function(){

  onename();
  form.style.display = "block";
  console.log("event listener working!");
  var enterEl = document.querySelector('.enter');
  enterEl.remove();

  var headingEl = document.createElement('div');
  headingEl.setAttribute("class","header");

  var p = document.createElement('p');
  p.setAttribute("class","title")
  p.innerText = "Fishing Galure";



  body.appendChild(headingEl);
  headingEl.appendChild(p);

  headingEl.style.width = 100+"%";

  createEl("button","id","fish-button")
  var fishButton = document.getElementById('fish-button');
  fishButton.innerText = "Search";
  body.appendChild(fishButton);

  var fishEl = document.createElement('p');
  fishEl.setAttribute("class","fish");
  // fishEl.innerHTML = "This is the container for fish";
  fishEl.style.color = "white"

  body.appendChild(fishEl);

  createEl("div","class","Tester")


  // createEl("p","id","fish-heading")
  // var fishH3 = document.getElementById('fish-heading');
  // fishH3.innerText = "Click search to get the current fishs";
  createEl("div","id","fish-container");
    //var makeEl = function(element,)

    fishButton.addEventListener("click", function(){
      console.log("button eventListener is working");


      var fishInput = document.getElementById('fish-input').value;
      console.log(fishInput);

      $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&titles=" + fishInput + "&prop=revisions&rvprop=content&format=json",
        dataType: "JSONP"
        // data: queryData,
        // dataType: 'JSONP',
        // type: 'POST',
        // headers: { 'Api-User-Agent': 'Example/1.0' }
      }).done(function(response){
        giphyApi();
        console.log(response);
        // console.log(response.query.pages[47576].revisions[0]['*']);
        var pagesObj = response.query.pages;
        var idObject = pagesObj[Object.keys(pagesObj)[0]];
        console.log(idObject);
        var pageId = idObject[Object.keys(idObject)[0]];
        console.log(pageId);
        // if(pagesObj. === ){
        //   alert(fishInput + "is not a valid input");
        // }
        // var revisions = revisions[0]['*'];
        response.query.pages.pageText = response.query.pages[pageId].revisions[0]['*'];
        // response.query.pages.pageText = pagesObj + pageId + '.' + revisions[0]['*'];
        // txtwiki.parseWikitext(response.query.pages.pageText);
        // console.log(response.pageText);



        var templateSource = document.getElementById('fish-template').innerHTML;
        // console.log(templateSource);

        var template = Handlebars.compile(templateSource);
        // console.log(template);

        var computedHTML = template(response.query.pages);
        // console.log(computedHTML);

        fishEl.innerHTML = computedHTML;
        // console.log(fishEl.innerHTML);
      })

    }) //end of fishButton eventListener
}) //end of button event listener.

  var createEl = function(div,attribute,name){
    var el = document.createElement(div);
    el.setAttribute(attribute,name);
    // el.innerText = "HELLLLOOOOO UNIVERSE"
    body.appendChild(el);
  }

}//end of the window.onload.
