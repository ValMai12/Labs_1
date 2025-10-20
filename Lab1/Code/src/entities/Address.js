/**
 * Address Entity
 *
 * Relationships:
 * - Many Addresses belong to one User (many-to-one)
 * - One Address is used for many Orders (one-to-many)
 */
class Address {
  constructor(data) {
    this.address_id = data.address_id; // Primary Key
    this.user_id = data.user_id; // Foreign Key -> User
    this.country = data.country?.slice(0, 50);
    this.city = data.city?.slice(0, 50);
    this.street = data.street?.slice(0, 100);
    this.postal_code = data.postal_code?.slice(0, 20);
    this.is_default = data.is_default ?? false;

    // Relationships
    this.orders = []; // One-to-Many with Order
  }
}

export default Address;
