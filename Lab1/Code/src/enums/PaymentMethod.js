/**
 * PaymentMethod Enum
 *
 * Used in: Payment entity (method field)
 *
 * Values:
 * - card: Credit/Debit card payment
 * - paypal: PayPal payment
 * - cash_on_delivery: Cash payment on delivery
 */
const PaymentMethod = Object.freeze(["card", "paypal", "cash_on_delivery"]);

export default PaymentMethod;
