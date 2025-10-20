/**
 * Review Entity
 *
 * Relationships:
 * - Many Reviews belong to one User (many-to-one)
 * - Many Reviews are about one Product (many-to-one)
 */
class Review {
  constructor(data) {
    this.review_id = data.review_id; // Primary Key
    this.user_id = data.user_id; // Foreign Key -> User
    this.product_id = data.product_id; // Foreign Key -> Product
    this.rating = Math.min(5, Math.max(1, parseInt(data.rating) || 1));
    this.comment = data.comment?.slice(0, 500);
    this.is_approved = data.is_approved ?? false;
    this.created_at = data.created_at || new Date();
  }
}

export default Review;
