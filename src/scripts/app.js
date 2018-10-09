
const app = {};

app.redirect = function (){
    $(".submit").on('click', function(e){
        e.preventDefault();
        window.location.replace("thank-you.html");
        
    });
}

app.init = function (){
    app.redirect();
}

$(function(){
    app.init();
});