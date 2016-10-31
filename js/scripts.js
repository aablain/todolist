//business logic
function Place(locations, visitor, visited, landmark, notes, imagez) {
  debugger;
  this.locations = locations;
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

    var newPlace = new Place(inputtedLocation, inputtedVisitor, inputtedVisited, inputtedLandmarks, inputtedNotes, inputtedImagez);

    $("ul#show-place").append("<li><span class='place'>" + newPlace.locations + "</span></li>");

    $(".place").last().click(function() {
		 $("#showplace").show();
		 $("#showplace h2").text(newPlace.locations);
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
