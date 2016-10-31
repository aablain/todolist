//business logic
function Place(location, visitor, visited, landmark, notes, imagez) {
  this.location = location;
  this.visitor = visitor;
	this.visited = visited;
	this.landmark = landmark;
  this.notes = notes;
  this.imagez = imagez;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedVisitor = $("input#new-visitor").val();
    var inputtedVisited = $("input#new-visited").val();
    var inputtedLandmarks = $("input#new-landmark").val();
    var inputtedNotes = $("input#new-notes").val();
    var inputtedImagez = $("input#new-imagez").val();

    var newPlace = new Contact(inputtedLocation, inputtedVisitor, inputtedVisited, inputtedLandmarks, inputtedNotes, inputtedImagez);

    $("ul#show-place").append("<li><span class='place'>" + Place.location + "</span></li>");

    $(".place").last().click(function() {
		 $("#show-place").show();
		 $("#show-place h2").text(newPlace.location);
		 $(".visitor").text(newPlace.visitor);
     $(".visited").text(newPlace.visited);
		 $(".landmark").text(newPlace.landmark);
		 $(".notes").text(newPlace.notes);
		 $(".imagez").text(newPlace.imagez);
		});

    $("input#new-location").val("");
    $("input#new-visitor").val("");
	  $("input#new-visited").val("");
	  $("input#new-landmark").val("");
    $("input#new-notes").val("");
    $("input#new-imagez").val("");
  });
});
