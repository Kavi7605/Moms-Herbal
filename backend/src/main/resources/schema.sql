CREATE TABLE IF NOT EXISTS product (
                                       id SERIAL PRIMARY KEY,
                                       name VARCHAR(255),
    category VARCHAR(100),
    description TEXT,
    price INT,
    stock INT,
    image_url TEXT
    );
