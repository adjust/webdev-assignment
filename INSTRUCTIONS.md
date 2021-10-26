# Exercise
We would like to build a small *E-commerce* project that should include:

- a list of products page.
- a product detail page.
- a global cart, shared across pages.

## Frontend framework:
We want to create this project using [NuxtJS](https://nuxtjs.org/) as our frontend framework.

## API:
As for the products, the information to be used should be consumed from this API:
https://fakestoreapi.com/

## Project Features:
We want our project to include the following:

1. A page listing all the available products, with a filtering option ([example](https://assignment-webdev.netlify.app/)):
	- The route should be: */*.
	- And the page should include:

		- A list of all products, as a 3x3 grid of cards.
		  Each product card should include:
			- Product Title
			- Product Description
			- Product Image
			- Product Price
			- “View Details” button:
				- On click, the user should navigate to the details page for the product.

		- A list of product categories, as checkbox options, for the user toggle categories. Their initial state should be CHECKED.

		- A search input field, for the user filter the products list by *product title*.

		- A message showing the active search criteria in this format:
		  *“Showing X results. in categories CATEGORIES containing "SEARCH INPUT VALUE".*
		  E.g: *"Showing 3 results. in categories women's clothing, men's clothing, jewelry, electronics containing "casual"*

	- Search criteria:
		- Only show products of the categories whose checkboxes are CHECKED.
		- If the search input field has a value, filter the products list and only show the products whose *product title* matches the input value.
    - The filter should consider partial matches (e.g: If the product title is *“Mens Casual Slim Fit”*, entering *“casu”* in the text field should return this product).

2.  A page showing details of the product ([example](https://assignment-webdev.netlify.app/products/2)):
	- The route(s) should be: */products/{product_id}*.
	- And the page should include:
		- Product Title
		- Product Description
		- Product Price
		- Product Image
		- Product ranking in a “5 stars” rank style.
		- “Go back” button:
			- On click, it should navigate to the previous page.
		- “Add to cart” button:
			- On click, it should add the product to the system’s cart

3. Additionally, all pages should share a *common header component*. This header should include:
	- Logo image of the project (The asset can be found in *static/logo.svg*)
	- Cart information including:
    - Cart icon (The asset can be found in *static/icon-cart.svg*)
		- Number of products in the cart.
		- Price to pay for all products in the cart.
		- “Checkout” button:
			- On click, it should open a modal box window, showing the products contained in the cart.

	- Modal window expected behaviour:
	    - It should contain a “close” button:
			  - On click, the modal window should close itself.
		- It should show the total price to pay for all products in the cart.
		- It should show a list of all products added to the cart so far. Each product item should include:
			- Product Title
			- Product Image (of a height 50px)
			- Product Quantity
			- Product Price by unit
			- Product Price combined (if quantity > 1)

			**Important:**
			If a product item is added into the cart many times:
			- The cart list should *show the product item only once*
			- The *Product Item Quantity* value should show how many times the item was added into the cart.
			- The *Product Item Price combined* value should show the sum of all unit prices of the item.
