// Constructors are essentially classes/blueprints for Javascript.
// Create a re-usable constructor for bands
// bands have members, names, date formed, and albums.
// They also have an onTour attribute as well.
// Use this constructor to create three of your favourite bands!

function Bands(members, names, dateFormed, albums, onTour) {
  this.members     = members;
  this.names       = names;
  this.dateFormed  = dateFormed;
  this.albums      = albums;
  this.onTour      = onTour;
}

var ledZep         = new Bands(4, "Jimmy Page", 1965, "House of the Holy", 1967);
var gratefulDead   = new Bands(5, "Jerry Garcia", 1965, "American Beauty", 1967);
var theWho         = new Bands(4, "Pete Townshend", 1965, "Who's Next", 1967);
