
-- CUSTOMERS TABLE


CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    country VARCHAR(50)
);


-- PRODUCTS TABLE


CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    sim_name VARCHAR(100) NOT NULL,
    country VARCHAR(50),
    data_limit VARCHAR(20),
    validity_days INT,
    price DECIMAL(10,2)
);


-- ORDERS TABLE


CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    product_id INT REFERENCES products(product_id),
    quantity INT DEFAULT 1,
    total_price DECIMAL(10,2),
    payment_method VARCHAR(30),
    purchase_date DATE
);