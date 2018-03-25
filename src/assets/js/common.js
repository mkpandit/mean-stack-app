$(document).ready(function() {
    $('.datepicker').datepicker({
        dateFormat: 'yy-mm-dd',
        onSelect: function(datetext){
            var d = new Date(); // for now
            var h = d.getHours();
            h = (h < 10) ? ("0" + h) : h ;
            var m = d.getMinutes();
            m = (m < 10) ? ("0" + m) : m ;
            var s = d.getSeconds();
            s = (s < 10) ? ("0" + s) : s ;
            datetext = datetext + " " + h + ":" + m + ":" + s;
            $('.datepicker').val(datetext);
        }
    });

    $(".view-in-popup").on('click', function(e){
        e.preventDefault();
        $('#view-todo-details').modal('show').find('.modal-body').load($(this).attr('href') + " #show-content");
    });

});