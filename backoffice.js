/**
 * Created by arvidhogberg on 15-04-22.
 */
/*$(document).ready(function(){
    $('.header').click(function(){
        $(this).siblings('.child-'+this.id).toggle('fast');
    });
    $('tr[class^=child-]').hide().children('tr');
});*/


/*jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});*/

var dataSet = [];
var markers = [];
var editor; // use a global for the submit and return data rendering in the examples

function start() {
    //-------------------------som expempel---------------------------------------------
    var marker = [];
    marker.category = "knaskategori";
    var test = [marker.category, "$button", "beskrvning av problemet", "2015-04-45", "Ofixat", "null"];
        dataSet = [

            ["Cykel2", "Knas med cykel", "beskrvning av problemet", "2015-04-46", "Ofixat", "EXTRA"],
            ["Cykel3", "Knas med cykel", "beskrvning av problemet", "2015-04-47", "Fixat", "needs to be at least null"],
            ["Cykel3", "Knas med cykel", "beskrvning av problemet", "2015-04-47", "Fixat", "needs to be at least null"],
            ["Cykel3", "Knas med cykel", "beskrvning av problemet", "2015-04-47", "Fixat", "needs to be at least null"],
            ["Cykel3", "Knas med cykel", "beskrvning av problemet", "2015-04-47", "Fixat", "needs to be at least null"],
            ["Cykel3", "Knas med cykel", "beskrvning av problemet", "2015-04-47", "Fixat", "needs to be at least null"],
            ["Cykel3", "Knas med cykel", "beskrvning av problemet", "2015-04-47", "Fixat", "needs to be at least null"]
        ];
    dataSet.push(test);
    //--------------------------------------exempel slut, detta ska bort sen om koden under funkar

    //här sätts datan in från markers till dataSet som alltså är datan som hamnar i table.
    for(var i = 0; i < markers.length; i++){
        console.log(dataSet);
        var newTableRow = [markers[i].category, markers[i].titel,  markers[i].description, markers[i].datum,markers[i].status];
        dataSet.push(newTableRow);
    }
}

$(document).ready(function() {
    start();
    $('#tablediv').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="issue-table"></table>' );

    var table = $('#issue_table').DataTable();
    $('#issue-table').dataTable( {
        "data": dataSet,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "columns": [
            { "title": "Kategori" },
            { "title": "Titel" },
            { "title": "Desription" },
            { "title": "Datum"},
            { "title": "Status"},
            { "title": "ExtraTitel"}
        ]
    } );

    //------MULTIPLE ROW SELECTION--------//
    $('#tablediv tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );

    $('#button').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected' );
    } );
    //---------------ADD ROW----------------//
    var counter = 1;
    $('#addRow').on( 'click', function () {
        table.row.add( ["Cykel"+counter, "Knas med cykel"+counter, "beskrvning av problemet", "2015-04-46", "Ofixat", "EXTRA"] ).draw();

        counter++;
    } );

    // Automatically add a first row of data
    $('#addRow').click();

} );