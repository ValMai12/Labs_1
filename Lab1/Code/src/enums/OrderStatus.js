/**
 * OrderStatus Enum
 *
 * Used in: Order entity (status field)
 *
 * Values:
 * - pending: Order is pending payment/processing
 * - paid: Order has been paid
 * - shipped: Order has been shipped
 * - delivered: Order has been delivered to customer
 * - cancelled: Order has been cancelled
 */
const OrderStatus = Object.freeze([
  "pending",
  "paid",
  "shipped",
  "delivered",
  "cancelled",
]);

export default OrderStatus;
