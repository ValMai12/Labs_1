/**
 * CartItem Entity
 *
 * Relationships:
 * - Many CartItems belong to one Cart (many-to-one)
 * - Many CartItems refer to one Product (many-to-one)
 */
class CartItem {
  constructor(data) {
    this.cart_item_id = data.cart_item_id; // Primary Key
    this.cart_id = data.cart_id; // Foreign Key -> Cart
    this.product_id = data.product_id; // Foreign Key -> Product
    this.quantity = Math.max(1, parseInt(data.quantity) || 1);
    this.added_at = data.added_at || new Date();
  }
}

export default CartItem;
