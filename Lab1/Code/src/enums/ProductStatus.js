/**
 * ProductStatus Enum
 *
 * Used in: Product entity (status field)
 *
 * Values:
 * - active: Product is available and visible
 * - hidden: Product is hidden from customers
 * - out_of_stock: Product is temporarily out of stock
 */
const ProductStatus = Object.freeze(["active", "hidden", "out_of_stock"]);

export default ProductStatus;
