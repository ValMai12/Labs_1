/**
 * DeliveryStatus Enum
 *
 * Used in: Delivery entity (status field)
 *
 * Values:
 * - preparing: Order is being prepared for shipment
 * - in_transit: Order is in transit to customer
 * - delivered: Order has been delivered
 * - returned: Order has been returned
 */
const DeliveryStatus = Object.freeze([
  "preparing",
  "in_transit",
  "delivered",
  "returned",
]);

export default DeliveryStatus;
