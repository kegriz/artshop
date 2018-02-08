import './style/main.scss';
import $ from 'jquery';
import 'bootstrap';
import { data } from './js/data.js';

$( () => {

    //printing content
    for (var i in data) {
        var links = "";
        for (var n in data[i]) {
            links += "<p>"+data[i][n]+"</p>";
        }
        var element = '<div class="col-md-4"><div class="category box-shadow"><h3 class="category__title">'
        +i+'</h3><div class="category__content container-fluid">'+links+'</div></div></div>';
        $(".categories").children().append(element);
    }

    //search by category name
    $("#search-input").keyup(function() {
        var value = $("#search-input").val();
        if(value=="") {
            $(".category__title").each( function() {
                this.parentElement.parentElement.style.display = "unset";
            });
        } else {
            $.each( $(".category__title"), function() {
                var categoryName = $(this).html();
                var contain = categoryName.indexOf(value);
                if(contain!==-1) {
                    this.parentElement.parentElement.style.display = "unset";
                } else {
                    this.parentElement.parentElement.style.display = "none";
                }
            });
        }
    });

});
