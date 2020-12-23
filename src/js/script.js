
$(function() {
    $("#price-range").slider({
        range: "max",
        min: 1000,
        max: 70000,
        value: 1,
        slide: function( event, ui ) {
        $( "#priceRange" ).val(  ui.value + " mdl" );
        }
    });
    $("#priceRange").val(  $("#price-range").slider("values", 0)+ " mdl");
} );

// $(function() {
//     $("#price-range").slider({
//     range: true,
//     min: 0,
//     max: 200000,
//     values: [0, 200000],
//     slide: function(event, ui) {
//         $("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);
//     }
//     });
//     $("#priceRange").val("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));
// }
