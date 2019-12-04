
// Variable number of scrollbar options
$(document).ready(function () {
    let options = ['No scrollbar', 'Regular', 'Mac', 'Thicker Mac', 'Dark', 'Light', 'Ubuntu', 'Minty', 'Colored', 'Rainbow'];
    for (i=0; i<options.length; i++) {
        $('.options').append('<div class="flex-container"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio'+ i +'" value="option'+ i +'"><label class="form-check-label" for="inlineRadio'+ i +'">'+ options[i] +'</label> </input></div><br></div>');
    }


    // Highlights selected
    var old_name = 0;
    $('.form-check-input').click(function () {
        if (old_name !== 0) {
            $(old_name).parent().css({'border': 'none', 'background-color': 'white'});
        }
        var name = $("input[name='inlineRadioOptions']:checked");

        $(name).parent().css({'border': '1px solid black','background-color': 'rgb(224, 224, 224)'});
        old_name = name;

        console.log(name, old_name);

    });
});

// Hid scollbar after certain time period
$('#hid').click( function() {
    if ($('#hid').is(':checked')) {
        $('.modal-content').css('background-color', 'white');
    } else {
        $('.modal-content').css('background-color', 'rgb(224, 224, 224)');
    }
});