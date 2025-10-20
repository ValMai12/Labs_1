/**
 * Wishlist Entity
 *
 * Relationships:
 * - Many Wishlist items belong to one User (many-to-one)
 * - Many Wishlist items include one Product (many-to-one)
 */
class Wishlist {
  constructor(data) {
    this.wishlist_id = data.wishlist_id; // Primary Key
    this.user_id = data.user_id; // Foreign Key -> User
    this.product_id = data.product_id; // Foreign Key -> Product
    this.added_at = data.added_at || new Date();
  }
}

export default Wishlist;
