function FavoriteListings() {
  this.listings = [];
}

FavoriteListings.prototype.isListingFavorited = function(listing) {
  for (var i = 0; i < this.listings.length; i++) {
    if (this.listings[i].listing_id == listing.listing_id) {
      if(this.listing[i].listing_id in listing.listing_id){
        return false; //this code will check if the listing of the item is already in there, and if it is then it will return false.
      }
      else{ //however if the listing is not already in there it will retun true.
        return true;

      }
    }
  }
  return false;
}


FavoriteListings.prototype.addListing = function(listing) {
  this.listings.push(listing);
};

FavoriteListings.prototype.removeListing = function(listing) {

};

FavoriteListings.prototype.getFavorites = function() {
  return this.listings;
}

module.exports = FavoriteListings;