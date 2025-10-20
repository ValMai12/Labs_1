import PaymentMethod from "../enums/PaymentMethod.js";
import PaymentStatus from "../enums/PaymentStatus.js";

/**
 * Payment Entity
 *
 * Relationships:
 * - Many Payments belong to one Order (many-to-one)
 */
class Payment {
  constructor(data) {
    this.payment_id = data.payment_id; // Primary Key
    this.order_id = data.order_id; // Foreign Key -> Order
    this.method = PaymentMethod.includes(data.method) ? data.method : "card"; // ENUM: card, paypal, cash_on_delivery
    this.amount = Math.max(0, parseFloat(data.amount) || 0);
    this.status = PaymentStatus.includes(data.status) ? data.status : "pending"; // ENUM: pending, success, failed, refunded
    this.transaction_id = data.transaction_id?.slice(0, 100);
    this.created_at = data.created_at || new Date();
  }
}

export default Payment;
