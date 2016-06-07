//
// Create an $.ajax request that fetches your favourite movie from OMDB.
// http://www.omdbapi.com/
// In the success function, you need to console.log five attributes about the movie.
// In the error function, you need to console.log that 'an error has occured. sorry!'

$.ajax({
    url     : 'http://www.omdbapi.com/?t=the+master&y=&plot=short&r=json',
    type    : "GET",
    dataType: 'json',
    success : function(data) {
        console.log(data.Title + " was released in " + data.Year +". The movie is rated " + data.Rated + ", starring " + data.Actors "and the plot is: " + data.Plot )
    },
    fail    : function(err) {
        console.log(error);
    }
});
