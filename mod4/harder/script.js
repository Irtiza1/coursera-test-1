
(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var name in names) {

  var firstletter = names[name].charAt(0).toUpperCase();
  if ( firstletter == "J") {
    
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}
})(window);
