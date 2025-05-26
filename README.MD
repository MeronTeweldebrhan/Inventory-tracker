# Inventory Tracker - Lab 6.1

## 📌 Overview
A console-based inventory management system built with **TypeScript** and **object-oriented programming (OOP)** principles.

## 🎯 The Challenge
- Model products using a base `Product` class.
- Extend with `PhysicalProduct` and `DigitalProduct` classes.
- Implement a `DiscountableProduct` interface.
- Apply:
  - 10% bulk discount for physical products (if qty > 10 or weight > 5kg).
  - 10% tax for physical products.
  - No tax for digital products.
- Display detailed pricing and tax info in the console.

## 🛠️ Built With
- **TypeScript**: Static typing & OOP features
- **Node.js**: Run compiled JavaScript
- OOP Principles: Inheritance, Encapsulation, Polymorphism
 
## 🧠 What I Learned
- TypeScript interfaces and inheritance
- Bulk discount and tax logic
- Project structure and modular imports


## 🚀 Continued Development
- Add product management features (add/remove, stock tracking)
- Implement seasonal or promotional discounts
- Build a React UI
- Write unit tests using **Jest**

## 🔗 Useful Resources
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Node.js Documentation](https://nodejs.org/en/docs)

## 👤 Author
**Name:** Meron Teweldebrhan 
**GitHub:** [Meron](https://github.com/MeronTeweldebrhan)  
**Email:** meronqelati@gmail.com

## 📂 Project Structure
inventory-tracker/
│
├── src/
│ ├── models/
│ │ ├── Product.ts
│ │ ├── PhysicalProduct.ts
│ │ ├── DigitalProduct.ts
│ │ └── main.ts
│ └── utils/
│ ├── DiscountableProduct.ts
│ └── taxCalculator.ts
├── tsconfig.json
├── .gitignore
└── README.md