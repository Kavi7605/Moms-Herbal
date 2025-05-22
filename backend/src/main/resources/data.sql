-- Herbal Hair Pack
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Herbal Hair Pack', 'hair', 'Treats frizz, hair fall, and dandruff', 80, 30, '/images/HairPack.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Herbal Hair Pack');

-- Herbal Hair Shampoo
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Herbal Hair Shampoo', 'hair', 'Natural cleanser with shine boost', 60, 30, '/images/Shampoo.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Herbal Hair Shampoo');

-- Herbal Hair Oil
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Herbal Hair Oil', 'hair', 'Controls hair fall and promotes growth', 100, 30, '/images/HairOil.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Herbal Hair Oil');

-- Herbal Face Serum
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Herbal Face Serum', 'face', 'Makes skin radiant and smooth', 100, 30, '/images/FaceSerum.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Herbal Face Serum');

-- Herbal Face Pack
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Herbal Face Pack', 'face', 'Gives clear, glowing skin', 50, 30, '/images/FacePack.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Herbal Face Pack');

-- Coffee & Milk Soap
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Coffee & Milk Soap', 'soap', 'Removes tanning and moisturizes', 40, 30, '/images/CoffeeSoap.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Coffee & Milk Soap');

-- Neem & Aloevera Soap
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Neem & Aloevera Soap', 'soap', 'Soothes and heals skin', 30, 30, '/images/NeemAloe.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Neem & Aloevera Soap');

-- Herbal Ubtan Soap
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Herbal Ubtan Soap', 'soap', 'Gives glow and soft texture to skin', 40, 30, '/images/UbtanSoap.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Herbal Ubtan Soap');

-- Herbal Lemonzest Soap
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Herbal Lemonzest Soap', 'soap', 'Cleanses and refreshes skin with lemon extract', 50, 30, '/images/Lemonzest.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Herbal Lemonzest Soap');

-- Herbal Kesar & Palash Soap
INSERT INTO product (name, category, description, price, stock, image_url)
SELECT 'Herbal Kesar & Palash Soap', 'soap', 'Softens and smoothens skin with herbal touch', 30, 30, '/images/KesarPalash.jpg'
    WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Herbal Kesar & Palash Soap');
