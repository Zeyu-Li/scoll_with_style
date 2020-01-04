
var new_name, checked, old_name;

function change(option) {
    $('#inlineRadio'+option).attr('checked', true);
    new_name = option;
}


function design() {

    var name = '#inlineRadio'+ new_name;
    checked = new_name;

    $(name).parent().css({'border': '1px solid black','background-color': 'rgb(224, 224, 224)'});
    old_name = checked;

}

// Variable number of scrollbar options
$(document).ready(function () {
    let options = ['No scrollbar', 'Regular', 'Mac', 'Thicker Mac', 'Dark', 'Light', 'Ubuntu', 'Minty', 'Colored', 'Rainbow'];
    for (i=0; i<options.length; i++) {
        $('.options').append('<div class="flex-container"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio'+ i +'" value="option'+ i +'"><label class="form-check-label" for="inlineRadio'+ i +'">'+ options[i] +'</label> </input></div><br></div>');
    }

    chrome.storage.sync.get('option', function(option) {
        // data.links will be either the stored value, or defaultValue if nothing is set
        change(option['option']);
        design();
    });

    // Highlights selected
    $('.form-check-input').click(function () {

        if (typeof old_name !== "undefined") {
            $('inlineRadio'+old_name).parent().css({'border': 'none', 'background-color': 'white'});
        }
    
        console.log(typeof old_name !== "undefined");
        if (new_name){
            var name = $("input[name='inlineRadioOptions']:checked");
            check = 1;
        } else {
            var name = '#inlineRadio'+ new_name;
            checked = new_name;
        }
        $(name).parent().css({'border': '1px solid black','background-color': 'rgb(224, 224, 224)'});
        old_name = checked;
    
        chrome.storage.sync.set({'option': old_name}, function() {
        });
    
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
