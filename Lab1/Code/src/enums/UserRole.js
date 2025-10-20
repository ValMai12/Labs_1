/**
 * UserRole Enum
 *
 * Used in: User entity (role field)
 *
 * Values:
 * - customer: Regular customer user
 * - admin: Administrator with full access
 * - manager: Manager with limited administrative access
 * - support: Support staff user
 */
const UserRole = Object.freeze(["customer", "admin", "manager", "support"]);

export default UserRole;
