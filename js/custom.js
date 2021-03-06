

$(".myinput").on("keydown", function(event){
    if(event.which === 13){
        additem();
    }
});

$(".container").sortable({
    handle: ".handle"
});

function additem(){
    let myname = $(".myinput").val();

    $(".container").append("<div contenteditable='true' class='row'>"+
        "<i class='handle fas fa-circle'></i>"+
        "<span>"+ myname +"</span>" +
        "<i class='complete fas fa-check-square'></i>"+
    "</div>");

    $(".myinput").val("");

    $(".complete").click(function(){

        $(this).parent().animate({
            opacity: 0,
            left: "+=200"
        }, 800, function(){
            //when animation is done
            $(this).remove();
        });
    });

}

function clearlist(){
    $(".row").remove();
}
