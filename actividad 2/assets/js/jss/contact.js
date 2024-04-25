 const nombre = $('#form-name')
 const email = $('#form-email')
 const p = $('#p-contact')
 $( function() {
    $( "#dialog" ).dialog({
        autoOpen: false
    });
  } );
 
 $('#btn-contact').click(function () {
    if (nombre.val().length == 0) {
        nombre.addClass('warning')
        $('#p-contact').text('* Nombre necesario')
    }else if (email.val().length == 0) {
        email.addClass('warning')
        p.text('* Email necesario')
    }else {
        nombre.removeClass('warning')
        email.removeClass('warning')
        p.text('')
        $( "#dialog" ).dialog('open');
    }
    
 })
