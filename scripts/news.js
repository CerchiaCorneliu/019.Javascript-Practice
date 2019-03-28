function latestNews() {
  // createElement
  var newPara = document.createElement("p");
  // createTextNode
  var add_news = document.createTextNode("The latest news goes here.");
  // appendChild
  newPara.appendChild(add_news);
  var getFooter = document.getElementById("footer");
  // insertBefore
  document.body.insertBefore(newPara, getFooter);
}

function appendText() {
  var newText = document.createTextNode("New Text");
  document.getElementById("latest").appendChild( newText );
}
