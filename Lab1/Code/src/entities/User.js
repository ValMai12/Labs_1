import BaseEntity from "./BaseEntity.js";
import UserRole from "../enums/UserRole.js";

/**
 * User Entity
 *
 * Relationships:
 * - One User has many Addresses (one-to-many)
 * - One User owns many Carts (one-to-many)
 * - One User saves many Wishlist items (one-to-many)
 * - One User writes many Reviews (one-to-many)
 * - One User places many Orders (one-to-many)
 */
class User extends BaseEntity {
  constructor(data) {
    super();
    this.user_id = data.user_id; // Primary Key
    this.first_name = data.first_name?.slice(0, 50);
    this.last_name = data.last_name?.slice(0, 50);
    this.email = data.email;
    this.password_hash = data.password_hash;
    this.phone = data.phone || null;
    this.role = UserRole.includes(data.role) ? data.role : "customer"; // ENUM: customer, admin, manager, support
    this.is_active = data.is_active ?? true;

    // Relationships
    this.addresses = []; // One-to-Many with Address
    this.carts = []; // One-to-Many with Cart
    this.wishlist = []; // One-to-Many with Wishlist
    this.reviews = []; // One-to-Many with Review
    this.orders = []; // One-to-Many with Order
  }
}

export default User;
