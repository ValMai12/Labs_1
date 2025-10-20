class BaseEntity {
  constructor() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export default BaseEntity;