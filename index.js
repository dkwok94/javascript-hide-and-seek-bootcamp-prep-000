function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div div div div')
}

function increaseRankBy(n){
  var ranked = document.querySelectorAll('ul.ranked-list li')

  for(var i=0; i<ranked.length; i++){
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
}

function deepestChild(){
  var grandNode = document.querySelectorAll('div#grand-node div')

  for(var i=0; i<grandNode.length; i++){
    if(grandNode[i].firstElementChild==null){
      return grandNode[i]
    }
  }
}
