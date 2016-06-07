
// You will get JSON from Chicago public data.
// Console.log the output.
// Create a success and error function that log out information.
// You do not need to get very detailed; this is a basic function that just fetches and logs out all the data.

// Use jQuery to create an $.ajax request that gets JSON.
$.getJSON({
    url     : 'https://data.cityofchicago.org/resource/cwig-ma7x.json',
    type    : "GET",
    dataType: 'json',

    success : function(data) {
        console.log(data)
    },
    fail    : function(err) {
        console.log(error);
    }
});
