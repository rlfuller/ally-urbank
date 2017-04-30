(function(){
    
    var $login = document.querySelector(".login a");
    var $modal = document.getElementById("modal-shadow");
    var $form = $modal.querySelector("form");
    var $username = $form.querySelector("#username");
    var $password = $form.querySelector("#password");
    var $btn = $form.querySelector("button");
    var $close = $form.querySelector("a");
    
    $login.addEventListener("click", function(e){
        $modal.className = "active";
    });
    
    $close.addEventListener("click", function(e){
        close();
    });
    
    $form.addEventListener("submit", function(e){
        e.preventDefault();
        close();
    });
    
    function close(){
        $modal.className = "";
    }
})();