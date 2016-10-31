//business logic
function toDo(names, items, descriptions, completed) {
  this.names = names;
  this.items = items;
	this.descriptions = descriptions;
	this.completed = completed;
}

// User Interface Logic
$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-names").val();
    var inputtedItem = $("input#new-items").val();
    // var inputtedItem = inputtedItemSpace.replace(^/a-zA-Z/g, '')
    var inputtedDescription = $("input#new-descriptions").val();
    var inputtedComplete = $("input#new-completed").val();

    var newList = new toDo(inputtedName, inputtedItem, inputtedDescription, inputtedComplete);

    $("ul#showtodo").append('<li><span class="place" id="' + newList.items + '">' + newList.items + "</span></li>");


    $("#showtodo li").last().click(function() {
		 $("#show-todo").show();
		 $("#show-todo h2").text(newList.items);
     $(".name").text(newList.names);
		 $(".description").text(newList.descriptions);
     $(".complete").text(newList.completed);
     $("#show-todo").click(function(event) {
       event.preventDefault();
      //  console.log("click!");
       $("#showtodo li span#" + newList.items).parent().remove();
     });
		});

      $("input#new-names").val();
      $("input#new-items").val();
      $("input#new-descriptions").val();
      $("input#new-completed").val();

  });
});
