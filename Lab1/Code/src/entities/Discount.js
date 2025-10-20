import DiscountType from "../enums/DiscountType.js";

/**
 * Discount Entity
 *
 * Relationships:
 * - Many Discounts may apply to one Product (many-to-one, optional)
 * - Many Discounts may apply to one Order (many-to-one, optional)
 */
class Discount {
  constructor(data) {
    this.discount_id = data.discount_id; // Primary Key
    this.code = data.code?.slice(0, 50);
    this.type = DiscountType.includes(data.type) ? data.type : "percent"; // ENUM: percent, fixed
    this.value = Math.max(0, parseFloat(data.value) || 0);
    this.valid_from = new Date(data.valid_from);
    this.valid_to = new Date(data.valid_to);
    this.is_active = data.is_active ?? true;
    this.product_id = data.product_id || null; // Foreign Key -> Product (optional)
    this.order_id = data.order_id || null; // Foreign Key -> Order (optional)
  }
}

export default Discount;
