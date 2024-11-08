# SwiggyClone

SwiggyClone is a web application for food delivery, built with Angular. It allows users to explore various restaurants, browse through their menus, add menu items to a cart, and complete a checkout process. The project replicates core features of a typical food delivery service.

## Table of Contents

- [Key Features](#key-features)
- [Usage Guide](#usage-guide)
- [Component Breakdown](#component-breakdown)
- [Services Overview](#services-overview)
- [Wishlist Feature](#wishlist-feature)
- [Cart and Checkout Functionality](#cart-and-checkout-functionality)
- [Development Instructions](#development-instructions)
- [Contributing](#contributing)

---

## Key Features

- **Restaurant Selection**: Displays available restaurants in a list format for users to choose from.
- **Menu Display**: Shows the menu items of each selected restaurant.
- **Cart Management**: Allows adding items to a cart, adjusting quantities, and viewing total cost.
- **Wishlist**: Enables users to save restaurants for future visits.
- **Dynamic Pricing**: Updates the cart total in real time as items are added or removed.
- **Checkout**: Completes the order by clearing the cart after submission.

---

## Component Breakdown

- **app-root** - The root component that loads the main structure of the application.
- **RestaurantComponent** - Displays a list of restaurants in a grid layout, with the option to add/remove restaurants from the wishlist.
- **MenuComponent** - Lists menu items available at a selected restaurant.
- **CartComponent** - Shows items added to the cart with quantity controls and displays the total cost, with a checkout button to submit the order.

## Services Overview

- **CartServiceService**: Manages the cart, including items, quantities, and the cart’s total count. It handles order submission by sending data to a mock API and clears the cart after a successful order.

## Development Instructions

Run `ng serve` to start a development server. Go to `http://localhost:4200/` to view the app in your browser. The app will reload automatically with any changes to source files.

## Usage Guide

- **Restaurant Browsing**: Restaurants are presented in a grid format. Users can click on a restaurant to access its menu, and add/remove restaurants from their wishlist.
- **Adding to Cart**: Users can add items from the menu to the cart with a single click. Quantities can be modified in the cart, with prices updating in real time.
- **Checkout**: Pressing the Checkout button sends the order to a mock API endpoint and clears the cart on successful submission.

## Wishlist Feature
The Wishlist feature allows users to save their favorite restaurants for quick access. In `RestaurantComponent`, the `toggleWishlist` function adds or removes a restaurant from the wishlist based on its `isFavorite` status.

## Cart and Checkout Functionality

- **CartServiceService**:
  - Adds items to the cart.
  - Updates item quantities.
  - Calculates and displays the cart’s total items and cost.
  
- **Real-Time Price Updates**: In `CartComponent`, the `cartItems$` observable monitors cart content changes, recalculating the total whenever items are updated.

- **Checkout**: The `checkout` function in `CartComponent` submits order details (item name, quantity, price) to the mock API and empties the cart once the order is completed.

## Code Scaffolding

Use `ng generate component component-name` to create new components. Additional options include generating directives, pipes, services, classes, guards, interfaces, enums, and modules.

## Build

Run `ng build` to compile the project. The compiled files will be saved in the `dist/` directory.

## Running Tests

- **Unit Tests**: Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).
- **End-to-End Tests**: Run `ng e2e` to execute end-to-end tests using a testing platform of your choice. Ensure an end-to-end testing package is installed first.

## Contributing

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your updates (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin feature-name`).
5. Submit a pull request.

## Further Assistance

For more information on the Angular CLI, run `ng help` or visit the [Angular CLI Documentation](https://angular.io/cli).
