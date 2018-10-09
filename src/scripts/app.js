
const app = {};


app.readURL = function(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.childPhoto').attr('src', e.target.result);
            $('.childPhoto').hide();
            $('.childPhoto').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function () {
    app.readURL(this);
});

app.init = function (){
    // app.redirect();
}

$(function(){
    app.init();
});