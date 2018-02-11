import './style/main.scss';
import $ from 'jquery';
import 'bootstrap';

$( () => {

    //ajax from local node.js server or .json file (in comment under)
    $.getJSON('http://localhost:3000/categories', function(data) {
    // $.getJSON('/src/data.json', function(data) {
        //printing content
        for (var i in data) {
            var links = "";
            for (var n in data[i]) {
                links += "<a href='/'>"+data[i][n]+"</a>";
            }
            var element = '<div class="col-sm-6 col-md-6 col-lg-4"><div class="category box-shadow"><h3 class="category__title">'
            +i+'</h3><div class="category__content container-fluid">'+links+'</div></div></div>';
            $(".categories").children().append(element);
        }
    });

    //search by category name and category content
    $("#search-input").keyup(function() {
        var value = $("#search-input").val().toLowerCase();;
        if(value=="") {
            $(".category__title").each( function() {
                $( this ).parent().parent().fadeIn( "fast" );
                $(this).parent().find(".category__content").children().css("background-color", "transparent");
            });
        } else {
            $.each( $(".category__title"), function() {
                var categoryName = $(this).html();
                var contain = categoryName.indexOf(value);
                var contentContain = 0;
                var content = $(this).parent().find(".category__content").children();
                $.each( content, function( i ) {
                  var element = content[i].innerHTML.toLowerCase();
                  var elementContain = element.indexOf(value);
                  if(elementContain!==-1) {
                      contentContain += 1;
                      $( this ).css("background-color", "#f1f3f4");
                  } else {
                      $( this ).css("background-color", "transparent");
                  }
                });
                if(contain!==-1 || contentContain!==0) {
                    $( this ).parent().parent().fadeIn( "slow" );
                } else {
                    $( this ).parent().parent().fadeOut( "slow" );
                }
            });
        }
    });

});
