/**
 * Category Entity
 *
 * Relationships:
 * - One Category contains many Products (one-to-many)
 * - One Category can have many subcategories (self-referencing, one-to-many)
 * - Many Categories belong to one parent Category (many-to-one)
 */
class Category {
  constructor(data) {
    this.category_id = data.category_id; // Primary Key
    this.name = data.name?.slice(0, 100);
    this.description = data.description?.slice(0, 255);
    this.parent_id = data.parent_id || null; // Foreign Key -> Category (self-referencing)

    // Relationships
    this.products = []; // One-to-Many with Product
    this.subcategories = []; // One-to-Many with Category (self-referencing)
  }
}

export default Category;
