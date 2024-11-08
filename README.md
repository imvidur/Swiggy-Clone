# SwiggyClone

SwiggyClone is a food delivery web application built using Angular. It lets users explore restaurants, browse food menus, manage their cart, and complete a checkout. The application features wishlist functionality and real-time price updates, emulating a real-world food delivery service.

## Table of Contents

- [Key Features](#key-features)
- [Usage Guide](#usage-guide)
- [Component Breakdown](#component-breakdown)
- [Services Overview](#services-overview)
- [Data Models and Interfaces](#data-models-and-interfaces)
- [Development Instructions](#development-instructions)
- [Contributing](#contributing)

---

## Key Features

- **Restaurant & Menu Browsing**: Users can view available restaurants and their menus.
- **Search**: Find restaurants or specific items through the search functionality.
- **Cart Management**: Add, remove, and adjust items in the cart, with real-time price updates.
- **Wishlist**: Save favorite restaurants and menu items for quick access.
- **Dynamic Pricing**: Cart totals update automatically based on the quantity and selection of items.
- **Checkout**: Complete an order and clear the cart after submission.

---

## Component Breakdown

- **app-root** - Main root component that initializes the application.
- **HomeComponent** - Displays the homepage with an overview of restaurants and featured items.
- **FoodPageComponent** - Shows details of a specific food item, including images, description, and price.
- **FoodMenuComponent** - Lists menu items for each restaurant.
- **FavoriteComponent** - Shows the user’s wishlist of saved items.
- **CartPageComponent** - Displays items in the user’s cart with quantity adjustments and checkout options.
- **SearchComponent** - Allows users to search for restaurants or menu items.
- **NotFoundComponent** - Error page that appears when a route or item is not found.
- **StarRatingComponent** - Displays the star rating for food items.
- **TagComponent** - Displays tags related to each food item, such as cuisine type or dietary information.

## Services Overview

- **CartService**: Manages cart state, including item quantities and total price calculations. Handles checkout by submitting data to the API and clearing the cart after completion.
- **FoodService**: Manages data retrieval for restaurants, menu items, and specific food details.
- **FavoriteService**: Allows users to add/remove items from their wishlist and maintains the list across user sessions.

## Data Models and Interfaces

- **cart.ts** - Defines the Cart interface, detailing properties such as cart items and total price.
- **cartitem.ts** - Interface for individual items in the cart, including name, quantity, and price.
- **food.ts** - Interface for food items, including attributes like name, price, rating, and tags.
- **tag.ts** - Interface for tags associated with food items, such as cuisine type, dietary preferences, etc.

## Development Instructions

Run `ng serve` to start a development server. Navigate to `http://localhost:4200/` to view the app in the browser. The application will automatically reload if you make changes to the source files.

## Usage Guide

- **Restaurant & Menu Browsing**: The homepage shows restaurants in a grid. Clicking a restaurant reveals its full menu.
- **Search**: The search bar allows users to quickly locate restaurants or menu items.
- **Add to Cart**: Users can add menu items to their cart from the Food Menu or Food Page components. Quantities can be adjusted in the cart, and the total cost updates automatically.
- **Wishlist**: Users can add restaurants or menu items to a wishlist for easy access in the FavoriteComponent.
- **Checkout**: Clicking the Checkout button on the Cart Page submits the order to the API and clears the cart after a successful order.

## Code Scaffolding

Use `ng generate component component-name` to create a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to compile the project. The build artifacts will be stored in the `dist/` directory.

## Running Tests

- **Unit Tests**: Run `ng test` to execute unit tests with [Karma](https://karma-runner.github.io).
- **End-to-End Tests**: Run `ng e2e` to execute end-to-end tests. Ensure that an e2e testing package is installed.

## Contributing

To contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Further Assistance

For more information on Angular CLI commands, use `ng help` or visit the [Angular CLI Documentation](https://angular.io/cli).
