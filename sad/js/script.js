
document.addEventListener("DOMContentLoaded", function(event){
    
    document.querySelector("button").addEventListener("click", function(){
        $ajaxUtils.sendGetRequest("data/name.json", function(res){
            var message = "Hello! My name is " +  res.name + " . My fave food is " + res.food + " and my pet's name is " + res.pet;
            document.querySelector("div").innerHTML = message;
        });
    });

} );
