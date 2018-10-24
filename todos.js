//check off todos by clicking
$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});
//Clicking on X to Delete a Todo.
$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function(){
    $(this).remove();
});
event.stopPropagation();
});
$(`input[type="text"]`).keypress(function(event){
if(event.which === 13){
    //grapping new todo text from input
    var todoText= $(this).val();
    $(this).val(" ");
    $("ul").append("<li><span>X</span> " + todoText +"</li>");
}
});





















// $("li").click(function(){
//     //If li is Gray 
//     if ($(this).css("color") === "rgb(128, 128, 128)"){
//     //turn it Black
//     $(this).css({
//         color: "black",
//         textDecoration: "none"
//     });
//     //else, Turn it Gray
//     }else{
//         $(this).css({
//             color:"gray",
//             textDecoration:"line-through"
//     });
//     }
// });