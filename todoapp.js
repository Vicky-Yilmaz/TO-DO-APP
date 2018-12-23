// Check Off the to dos by clicking:
//creating a list for css, so we don't need to write too much

//here we changed ("li") to ("ul) because in jquery the
//event would run only in the elements that is defined before
//since we want an added li to carry this event we first define the
//event in all ul. 
$("ul").on("click", "li", function(){
	
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 			$(this).css({
// 				color: "black",
// 				textDecoration: "none"}
// 				)}
	
// 	else {$(this).css({
// 				color: "gray",
// 				textDecoration: "line-through"}
// 				)};
// });


// shorter way: create a class and use .toggle feature

$(this).toggleClass("completed");

});


//click on x to delete
//there is one issue: even though we specify span, since
//span is inside of a ul, the event in ul is also is triggered
//that is called event bubbling. To stop that we use
//event.stopPropagation

//parent() gives the parent element - the li

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Dikkat burada input'u secerken, type='text' yani tekli
//tirnak isareti kullanmak gerekiyor.
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabing the new text
		var todoText= $(this).val();
		//clearing the text box after hitting enter
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
	}
})

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle(100);
})








