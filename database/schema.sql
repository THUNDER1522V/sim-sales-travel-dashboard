-- =========================================================
-- AURA SIM: Travel SIM Sales & Commercial BI Database Schema
-- Compatible with Supabase PostgreSQL & PostgREST API
-- =========================================================

-- Enable UUID extension if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CUSTOMERS / USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(30),
    country VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. DESTINATIONS TABLE
CREATE TABLE IF NOT EXISTS destinations (
    destination_id VARCHAR(10) PRIMARY KEY,
    destination_name VARCHAR(100) NOT NULL,
    region VARCHAR(50),
    currency VARCHAR(10) DEFAULT 'INR',
    active BOOLEAN DEFAULT TRUE
);

-- 3. PRODUCTS / SIM PACKAGES TABLE
CREATE TABLE IF NOT EXISTS products (
    prod_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    country VARCHAR(50),
    coverage_destinations TEXT,
    data_limit VARCHAR(20) NOT NULL,
    validity_days INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    order_no VARCHAR(50) UNIQUE NOT NULL,
    user_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    product_id INT REFERENCES products(prod_id) ON DELETE SET NULL,
    salesperson_name VARCHAR(100),
    amount DECIMAL(10,2) NOT NULL,
    discount_amount DECIMAL(10,2) DEFAULT 0.00,
    payment_method VARCHAR(50) DEFAULT 'Card',
    status VARCHAR(30) DEFAULT 'Completed',
    order_date_time TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. DAILY SUMMARY (Aggregated Telemetry)
CREATE TABLE IF NOT EXISTS daily_summary (
    summary_date DATE PRIMARY KEY,
    total_orders INT DEFAULT 0,
    total_revenue DECIMAL(12,2) DEFAULT 0.00,
    top_destination VARCHAR(100),
    top_salesperson VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Realtime publication enabling (for Supabase Realtime)
ALTER PUBLICATION supabase_realtime ADD TABLE orders;
ALTER PUBLICATION supabase_realtime ADD TABLE daily_summary;
