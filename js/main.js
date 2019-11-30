
$(document).ready(function () {
    let options = ['No scrollbar', 'Regular', 'Mac', 'Thicker Mac', 'Dark', 'Light', 'Ubuntu', 'Minty', 'Colored', 'Rainbow' ]
    for (i=0; i<options.length; i++) {
        $('.options').append('<div class="flex-container"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio'+ i +'" value="option'+ i +'" onchange="change()"><label class="form-check-label" for="inlineRadio'+ i +'">'+ options[i] +'</label> </input></div><br></div>')
    }
})
$('#hid').click( function() {
    if ($('#hid').is(':checked')) {
        $('.modal-content').css('background-color', 'white');
    } else {
        $('.modal-content').css('background-color', 'rgb(224, 224, 224)');
    }
});
function change() {
    for (i=0; i<$('.options input').length; i++) {
        let name = '#inlineRadio'+i;
        if ($(name).is(':checked')) {
            $(name).parent().css({'border': '1px solid black',
                                    'background-color': 'rgb(224, 224, 224)'});
        } else {
            $(name).parent().css({'border': 'none',
                                    'background-color': 'white'});
        }
    }
};