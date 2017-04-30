(function(){
    var $newsTab = document.getElementById("news-tab");
    var $archiveTab = document.getElementById("archive-tab");
    var $news = document.getElementById("news");
    var $archive = document.getElementById("archive");
    var divs = [$news, $archive];
    var tabs = [$newsTab, $archiveTab];
    
    function clearDivs(){
        divs.forEach(function(div){
            div.className = "";
        });
       
        tabs.forEach(function(tab){
            tab.className = "unselected";
        });
        
    }
    function selectDiv($tab, $div){
        clearDivs();
        $tab.className = $div.className = "selected";
    }
    
    clearDivs();
    selectDiv($newsTab, $news);
            
    [
        [$news, $newsTab],
        [$archive, $archiveTab]
    ].forEach(function(bundle){
        bundle[1].addEventListener("click", function(e){
            selectDiv(bundle[1], bundle[0]);
        });
    })
    
    
})();