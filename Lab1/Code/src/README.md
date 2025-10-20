# E-Commerce Database Structure

Цей проект містить структуру даних для системи електронної комерції (інтернет-магазину).

## 📋 Структура проекту

```
src/
├── entities/          # Сутності бази даних
│   ├── BaseEntity.js  # Базова сутність з полями created_at, updated_at
│   ├── User.js        # Користувачі системи
│   ├── Address.js     # Адреси доставки
│   ├── Category.js    # Категорії товарів
│   ├── Product.js     # Товари
│   ├── Cart.js        # Кошики покупців
│   ├── CartItem.js    # Елементи кошика
│   ├── Order.js       # Замовлення
│   ├── Payment.js     # Платежі
│   ├── Delivery.js    # Доставка
│   ├── Review.js      # Відгуки на товари
│   ├── Wishlist.js    # Список бажань
│   └── Discount.js    # Знижки
├── enums/            # Enumeration типи
│   ├── UserRole.js           # Ролі користувачів
│   ├── ProductStatus.js      # Статуси товарів
│   ├── OrderStatus.js        # Статуси замовлень
│   ├── PaymentMethod.js      # Методи оплати
│   ├── PaymentStatus.js      # Статуси платежів
│   ├── DeliveryStatus.js     # Статуси доставки
│   └── DiscountType.js       # Типи знижок
```

## 🔗 Зв'язки між сутностями

### User (Користувач)
**Первинний ключ:** `user_id`

**Зв'язки:**
- `User` → `Address` (one-to-many): Один користувач має багато адрес
- `User` → `Cart` (one-to-many): Один користувач має багато кошиків
- `User` → `Order` (one-to-many): Один користувач робить багато замовлень
- `User` → `Review` (one-to-many): Один користувач пише багато відгуків
- `User` → `Wishlist` (one-to-many): Один користувач має багато товарів у списку бажань

**Enum поля:**
- `role`: UserRole (customer, admin, manager, support)

---

### Address (Адреса)
**Первинний ключ:** `address_id`  
**Зовнішні ключі:** `user_id` → User

**Зв'язки:**
- `Address` → `User` (many-to-one): Багато адрес належать одному користувачу
- `Address` → `Order` (one-to-many): Одна адреса використовується в багатьох замовленнях

---

### Category (Категорія)
**Первинний ключ:** `category_id`  
**Зовнішні ключі:** `parent_id` → Category (самопосилання)

**Зв'язки:**
- `Category` → `Category` (one-to-many, self-referencing): Категорія може мати підкатегорії
- `Category` → `Product` (one-to-many): Одна категорія містить багато товарів

---

### Product (Товар)
**Первинний ключ:** `product_id`  
**Зовнішні ключі:** `category_id` → Category

**Зв'язки:**
- `Product` → `Category` (many-to-one): Багато товарів належать одній категорії
- `Product` → `CartItem` (one-to-many): Один товар може бути в багатьох елементах кошика
- `Product` → `Review` (one-to-many): Один товар має багато відгуків
- `Product` → `Wishlist` (one-to-many): Один товар може бути в багатьох списках бажань
- `Product` → `Discount` (one-to-many): На один товар може діяти багато знижок

**Enum поля:**
- `status`: ProductStatus (active, hidden, out_of_stock)

---

### Cart (Кошик)
**Первинний ключ:** `cart_id`  
**Зовнішні ключі:** `user_id` → User

**Зв'язки:**
- `Cart` → `User` (many-to-one): Багато кошиків належать одному користувачу
- `Cart` → `CartItem` (one-to-many): Один кошик містить багато елементів
- `Cart` → `Order` (one-to-one): Один кошик конвертується в одне замовлення

---

### CartItem (Елемент кошика)
**Первинний ключ:** `cart_item_id`  
**Зовнішні ключі:** `cart_id` → Cart, `product_id` → Product

**Зв'язки:**
- `CartItem` → `Cart` (many-to-one): Багато елементів належать одному кошику
- `CartItem` → `Product` (many-to-one): Багато елементів посилаються на один товар

---

### Order (Замовлення)
**Первинний ключ:** `order_id`  
**Зовнішні ключі:** `user_id` → User, `address_id` → Address, `cart_id` → Cart

**Зв'язки:**
- `Order` → `User` (many-to-one): Багато замовлень належать одному користувачу
- `Order` → `Address` (many-to-one): Багато замовлень використовують одну адресу
- `Order` → `Cart` (one-to-one): Одне замовлення створюється з одного кошика
- `Order` → `Payment` (one-to-many): Одне замовлення може мати багато платежів
- `Order` → `Delivery` (one-to-one): Одне замовлення має одну доставку
- `Order` → `Discount` (one-to-many): На одне замовлення може діяти багато знижок

**Enum поля:**
- `status`: OrderStatus (pending, paid, shipped, delivered, cancelled)

---

### Payment (Платіж)
**Первинний ключ:** `payment_id`  
**Зовнішні ключі:** `order_id` → Order

**Зв'язки:**
- `Payment` → `Order` (many-to-one): Багато платежів належать одному замовленню

**Enum поля:**
- `method`: PaymentMethod (card, paypal, cash_on_delivery)
- `status`: PaymentStatus (pending, success, failed, refunded)

---

### Delivery (Доставка)
**Первинний ключ:** `delivery_id`  
**Зовнішні ключі:** `order_id` → Order

**Зв'язки:**
- `Delivery` → `Order` (one-to-one): Одна доставка відстежує одне замовлення

**Enum поля:**
- `status`: DeliveryStatus (preparing, in_transit, delivered, returned)

---

### Review (Відгук)
**Первинний ключ:** `review_id`  
**Зовнішні ключі:** `user_id` → User, `product_id` → Product

**Зв'язки:**
- `Review` → `User` (many-to-one): Багато відгуків написані одним користувачем
- `Review` → `Product` (many-to-one): Багато відгуків стосуються одного товару

---

### Wishlist (Список бажань)
**Первинний ключ:** `wishlist_id`  
**Зовнішні ключі:** `user_id` → User, `product_id` → Product

**Зв'язки:**
- `Wishlist` → `User` (many-to-one): Багато записів списку бажань належать одному користувачу
- `Wishlist` → `Product` (many-to-one): Багато записів списку бажань містять один товар

---

### Discount (Знижка)
**Первинний ключ:** `discount_id`  
**Зовнішні ключі:** `product_id` → Product (опціонально), `order_id` → Order (опціонально)

**Зв'язки:**
- `Discount` → `Product` (many-to-one, optional): Багато знижок можуть застосовуватись до одного товару
- `Discount` → `Order` (many-to-one, optional): Багато знижок можуть застосовуватись до одного замовлення

**Enum поля:**
- `type`: DiscountType (percent, fixed)

---

## 📊 Енумерації (Enums)

### UserRole
- `customer` - Звичайний покупець
- `admin` - Адміністратор з повним доступом
- `manager` - Менеджер з обмеженим адміністративним доступом
- `support` - Співробітник служби підтримки

### ProductStatus
- `active` - Товар доступний та видимий
- `hidden` - Товар прихований від покупців
- `out_of_stock` - Товар тимчасово відсутній на складі

### OrderStatus
- `pending` - Замовлення очікує оплати/обробки
- `paid` - Замовлення оплачено
- `shipped` - Замовлення відправлено
- `delivered` - Замовлення доставлено покупцю
- `cancelled` - Замовлення скасовано

### PaymentMethod
- `card` - Оплата картою (кредитна/дебетова)
- `paypal` - Оплата через PayPal
- `cash_on_delivery` - Оплата готівкою при отриманні

### PaymentStatus
- `pending` - Платіж очікується
- `success` - Платіж успішно завершено
- `failed` - Платіж не вдався
- `refunded` - Платіж повернуто

### DeliveryStatus
- `preparing` - Замовлення готується до відправки
- `in_transit` - Замовлення в дорозі до покупця
- `delivered` - Замовлення доставлено
- `returned` - Замовлення повернуто

### DiscountType
- `percent` - Знижка у відсотках від ціни
- `fixed` - Знижка фіксованою сумою

---

## 🎯 Основні бізнес-процеси

### 1. Реєстрація та управління користувачами
- Користувач створює акаунт (User)
- Додає адреси доставки (Address)

### 2. Перегляд та вибір товарів
- Користувач переглядає категорії (Category) та товари (Product)
- Додає товари до списку бажань (Wishlist)
- Додає товари до кошика (Cart → CartItem)

### 3. Оформлення замовлення
- Користувач оформлює замовлення з кошика (Order створюється з Cart)
- Вибирає адресу доставки (Order → Address)
- Обирає метод оплати (Payment)

### 4. Обробка замовлення
- Замовлення оплачується (Payment status: success)
- Статус замовлення змінюється (OrderStatus: pending → paid → shipped)
- Створюється запис доставки (Delivery)
- Відстежується статус доставки (DeliveryStatus)

### 5. Після отримання
- Користувач отримує товар (OrderStatus: delivered)
- Залишає відгук на товар (Review)

---

## 💡 Особливості реалізації

1. **BaseEntity**: Базовий клас для User та Product, що додає поля `created_at` та `updated_at`

2. **Валідація даних**: Всі сутності мають вбудовану валідацію:
   - Обмеження довжини рядків
   - Перевірка енамів
   - Валідація числових значень (ціни, кількості тощо)

3. **Зв'язки**: Кожна сутність містить масиви або посилання на пов'язані сутності для навігації

4. **Знижки**: Гнучка система знижок, що може застосовуватись як до товарів, так і до замовлень

5. **Історія**: Відстежування часових міток для критичних подій (created_at, shipped_at, delivered_at)

---

## 🔧 Використання

```javascript
// Приклад створення користувача
import User from './entities/User.js';
import UserRole from './enums/UserRole.js';

const user = new User({
  user_id: 1,
  first_name: 'Іван',
  last_name: 'Петренко',
  email: 'ivan@example.com',
  password_hash: 'hashed_password',
  role: 'customer',
  is_active: true
});

// Приклад створення товару
import Product from './entities/Product.js';
import ProductStatus from './enums/ProductStatus.js';

const product = new Product({
  product_id: 1,
  category_id: 5,
  name: 'Ноутбук',
  description: 'Потужний ноутбук для роботи',
  price: 25000,
  discount_percent: 10,
  stock: 15,
  status: 'active',
  image_url: '/images/laptop.jpg'
});
```

---

## 📝 Примітки

- Всі Foreign Key поля мають коментарі, що вказують на пов'язану сутність
- Всі Primary Key поля позначені коментарем `// Primary Key`
- Всі Enum поля мають коментарі з переліком можливих значень
- Кожна сутність має JSDoc коментар з описом зв'язків

