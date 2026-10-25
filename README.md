# FRESHVERSE 3D — Next-Generation Interactive Supermarket Website

FRESHVERSE 3D is a browser-based, real-time 3D spatial supermarket built with **Three.js / WebGL**, **Tailwind CSS**, **React + Vite + TypeScript**, and a **Web Audio API** procedural soundscape.

---

## ✨ Key Features & Architecture

1. **Art-Directed Spatial Retail Environment (`deep forest green #071A12`, `rich emerald #10B981`, `warm ivory #FAF8F5`, `vibrant lime #A3E635`)**:
   - Terrazzo reflective floor with illuminated aisle guide strips, perimeter architectural signage, suspended ceiling acoustic baffles, and linear LED lighting.
   - **8 Distinct Supermarket Aisles / Departments**:
     - **Aisle 1**: Fresh Produce (Ratnagiri Alphonso Mangoes, Kodaikanal Hass Avocados, Kinnaur Apples, Hydroponic Baby Spinach, Heirloom Cherry Tomatoes)
     - **Aisle 2**: Artisan Bakery (36-Hour Sourdough Boule, Cultured Butter Croissants, Cardamom Saffron Brioche, Iranian Pistachio Biscotti)
     - **Aisle 3**: Dairy & Chilled (A2 Gir Cow Milk, Erode Malai Paneer, Alphonso Greek Yogurt, Himalayan Pink Salt Bilona Butter, Cave-Aged Cheddar)
     - **Aisle 4**: Gourmet Snacks (Black Truffle Makhana, Idukki 72% Dark Chocolate, Tellicherry Pepper Crisps, Kashmiri Walnut Trail Mix, Ragi Millet Twists)
     - **Aisle 5**: Craft Beverages (Coorg Nitrogen Cold Brew, Makaibari First Flush Darjeeling Tea, Cold-Pressed Valencia Orange Turmeric Juice, Himalayan Yuzu Sparkling Water, Uji Ceremonial Matcha)
     - **Aisle 6**: Global Pantry (24-Month Aged Dehraduni Basmati, Single-Estate Extra Virgin Olive Oil, Nilgiri Wild Forest Honey, Bronze-Die Durum Rigatoni)
     - **Aisle 7**: Eco Household (Malabar Lemongrass Dish Liquid, Reusable Bamboo Kitchen Towels, Himalayan Cedarwood Linen Mist, Bio-Compostable Bin Liners)
     - **Aisle 8**: Botanical Personal Care (Wild Vetiver & Neem Body Cleanser, Bhringraj & Argan Hair Elixir, Bamboo Charcoal & Matcha Face Cleanser, Kokum & Cardamom Hand Balm)
   - **Central Entrance Promo Pedestal**: Floating 3D promotional products with seasonal discounts.
   - **Self-Checkout Pavilion**: Optical laser conveyor belt, interactive terminal screen, and reusable Freshverse bag.

2. **Reliable Movement, Camera & Collision Controls**:
   - **Desktop**:
     - `W, A, S, D` or `Arrow Keys`: Continuous velocity-damped movement with normalized diagonal vectors.
     - `Mouse Drag` or `Pointer Lock`: Smooth 360° camera look around the store.
     - `E` or `Left Click`: Inspect highlighted 3D product or open the Self-Checkout Terminal when near the checkout zone.
     - `Escape`: Release pointer lock or close active drawers/modals.
     - **AABB + Cylinder Sliding Collision**: Prevents walking through gondolas, walls, promo pedestals, or checkout counters while sliding smoothly along edges.
   - **Mobile & Touch**:
     - Virtual 360° Touch Joystick (bottom-left) + single-finger touch-drag camera look + dedicated `Interact (E)` and `Checkout` buttons.

3. **3D Wayfinding & Live Radar Minimap**:
   - Search any product by name, category, or aisle number.
   - Click **Route / Guide Me to Shelf** to draw a glowing **3D Emerald Floor Path & Beacon** from your current position directly to the product shelf, or click **Teleport** for a smooth camera glide.
   - Click any aisle on the bottom-right **Live Store Radar Minimap** to teleport directly to that department.

4. **Persistent Client-Side Shopping Cart (`localStorage`)**:
   - Add products, adjust quantities within stock limits, remove items, or clear the cart with an in-drawer confirmation prompt.
   - Automatically calculates item subtotal, promotional savings, 5% demo GST, and grand total in Indian Rupees (`₹`), persisting across page refreshes.

5. **Animated 3D Self-Checkout & Downloadable/Printable Receipt**:
   - Products spawn on the 3D checkout conveyor belt, glide across the optical laser scanner (with synthesized 2450Hz barcode scanner beep and laser flash), and pack into the Freshverse shopping bag.
   - Choose a simulated demo payment mode (*UPI Instant QR*, *Contactless Tap Card*, or *Freshverse Green Pass*), confirm the demo purchase, and download (`.txt`) or print the formatted receipt.

---

## 🚀 Running Locally

### Option A: Instant Standalone 3D Bundle (`freshverse_3d.html`)
Open `freshverse_3d.html` directly in any modern browser (Chrome, Edge, Firefox, Safari) or serve the root directory with any static server:
```bash
python3 -m http.server 8080
```

### Option B: Vite + React + TypeScript Development Server
In an environment with Node.js and npm network access:
```bash
npm install
npm run dev
```

---

## ⚠️ Demo Limitations
- All prices (`₹`), inventory counts, GST calculations, and payment modes are **sample/demo simulations** for interactive portfolio and spatial retail demonstration purposes. No real commercial transactions or payments are processed.
