/**
 * PaymentStatus Enum
 *
 * Used in: Payment entity (status field)
 *
 * Values:
 * - pending: Payment is pending
 * - success: Payment completed successfully
 * - failed: Payment failed
 * - refunded: Payment has been refunded
 */
const PaymentStatus = Object.freeze([
  "pending",
  "success",
  "failed",
  "refunded",
]);

export default PaymentStatus;
