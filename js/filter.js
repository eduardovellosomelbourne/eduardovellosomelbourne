

var publications = document.getElementsByClassName("ev-bib-entry");
for (var paper = 0; paper < publications.length; paper++) {
  for (var child = 0; child < publications[paper].childNodes.length; child++) {
    if (publications[paper].childNodes[child].className == "ev-bib-entry--tag-list") {
      tags = publications[paper].childNodes[child];
      for (var tag = 0; tag < tags.childNodes.length; tag++) {
        tags.childNodes[tag].onclick = filterPubs;
      }
    }    
  }
}


function filterPubs(){
  var publications = document.getElementsByClassName("ev-bib-entry");
  var toShow = [];
  var searchText = this.textContent.trim();
  var searchText = searchText.toLowerCase();

  
  for (var paper = 0; paper < publications.length; paper++) {
    publications[paper].style.opacity = 0.3;
    for (var child = 0; child < publications[paper].childNodes.length; child++) {
      if (publications[paper].childNodes[child].className == "ev-bib-entry--tag-list") {
        tags = publications[paper].childNodes[child];
        for (var tag = 0; tag < tags.childNodes.length; tag++) {
          if (tags.childNodes[tag].textContent.toLowerCase().includes(searchText)) {
            console.log(tags.childNodes[tag].textContent);
            toShow.push(paper);
            tags.childNodes[tag].onclick = resetFilters;
          }
          else{
            tags.childNodes[tag].onclick = filterPubs;
          }
        }
      }    
    }
  }
  while (toShow.length > 0){
    paper = toShow.pop();
    publications[paper].style.opacity = 1;
  }
}

function resetFilters(){
  var publications = document.getElementsByClassName("ev-bib-entry");
  
  for (var paper = 0; paper < publications.length; paper++) {
    publications[paper].style.opacity = 1;

    for (var child = 0; child < publications[paper].childNodes.length; child++) {
      if (publications[paper].childNodes[child].className == "ev-bib-entry--tag-list") {
        tags = publications[paper].childNodes[child];
        for (var tag = 0; tag < tags.childNodes.length; tag++) {
          tags.childNodes[tag].onclick = filterPubs;
        }
      }
    }
  }
}



