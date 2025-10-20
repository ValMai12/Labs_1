import OrderStatus from "../enums/OrderStatus.js";

/**
 * Order Entity
 *
 * Relationships:
 * - Many Orders belong to one User (many-to-one)
 * - Many Orders use one Address (many-to-one)
 * - One Order is converted from one Cart (one-to-one)
 * - One Order has many Payments (one-to-many)
 * - One Order is tracked by one Delivery (one-to-one)
 * - One Order may have many Discounts applied (one-to-many)
 */
class Order {
  constructor(data) {
    this.order_id = data.order_id; // Primary Key
    this.user_id = data.user_id; // Foreign Key -> User
    this.address_id = data.address_id; // Foreign Key -> Address
    this.cart_id = data.cart_id; // Foreign Key -> Cart
    this.total_amount = Math.max(0, parseFloat(data.total_amount) || 0);
    this.status = OrderStatus.includes(data.status) ? data.status : "pending"; // ENUM: pending, paid, shipped, delivered, cancelled
    this.created_at = data.created_at || new Date();
    this.shipped_at = data.shipped_at || null;
    this.delivered_at = data.delivered_at || null;

    // Relationships
    this.payments = []; // One-to-Many with Payment
    this.delivery = null; // One-to-One with Delivery
    this.discounts = []; // One-to-Many with Discount
  }
}

export default Order;
