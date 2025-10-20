import DeliveryStatus from "../enums/DeliveryStatus.js";

/**
 * Delivery Entity
 *
 * Relationships:
 * - One Delivery tracks one Order (one-to-one)
 */
class Delivery {
  constructor(data) {
    this.delivery_id = data.delivery_id; // Primary Key
    this.order_id = data.order_id; // Foreign Key -> Order
    this.courier = data.courier?.slice(0, 50);
    this.tracking_number = data.tracking_number?.slice(0, 100);
    this.status = DeliveryStatus.includes(data.status)
      ? data.status
      : "preparing"; // ENUM: preparing, in_transit, delivered, returned
    this.updated_at = data.updated_at || new Date();
  }
}

export default Delivery;
