import BaseEntity from "./BaseEntity.js";
import ProductStatus from "../enums/ProductStatus.js";

/**
 * Product Entity
 *
 * Relationships:
 * - Many Products belong to one Category (many-to-one)
 * - One Product has many Reviews (one-to-many)
 * - One Product is referred to in many CartItems (one-to-many)
 * - One Product is included in many Wishlist items (one-to-many)
 * - One Product may have many Discounts applied (one-to-many)
 */
class Product extends BaseEntity {
  constructor(data) {
    super();
    this.product_id = data.product_id; // Primary Key
    this.category_id = data.category_id; // Foreign Key -> Category
    this.name = data.name?.slice(0, 100);
    this.description = data.description?.slice(0, 500);
    this.price = Math.max(0, parseFloat(data.price) || 0);
    this.discount_percent = Math.max(
      0,
      Math.min(100, parseFloat(data.discount_percent) || 0)
    );
    this.stock = Math.max(0, parseInt(data.stock) || 0);
    this.status = ProductStatus.includes(data.status) ? data.status : "active"; // ENUM: active, hidden, out_of_stock
    this.image_url = data.image_url || null;

    // Relationships
    this.reviews = []; // One-to-Many with Review
    this.cartItems = []; // One-to-Many with CartItem
    this.wishlists = []; // One-to-Many with Wishlist
    this.discounts = []; // One-to-Many with Discount
  }
}

export default Product;
