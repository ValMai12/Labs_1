/**
 * Cart Entity
 *
 * Relationships:
 * - Many Carts belong to one User (many-to-one)
 * - One Cart contains many CartItems (one-to-many)
 * - One Cart is converted to one Order (one-to-one)
 */
class Cart {
  constructor(data) {
    this.cart_id = data.cart_id; // Primary Key
    this.user_id = data.user_id; // Foreign Key -> User
    this.created_at = data.created_at || new Date();
    this.is_active = data.is_active ?? true;

    // Relationships
    this.items = []; // One-to-Many with CartItem
    this.order = null; // One-to-One with Order
  }
}

export default Cart;
