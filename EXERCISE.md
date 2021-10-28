# Exercise
We would like to build a small *E-commerce* project that should include a list of products.

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

		- A list of product categories, as checkbox options, for the user to toggle them. Their initial state should be CHECKED.

		- A search input field, for the user to filter the products list by *product title*.

		- A message showing the active search criteria in this format:
		  *“Showing X results in categories CATEGORIES containing "SEARCH INPUT VALUE".*
		  (E.g: *"Showing 3 results in categories women's clothing, men's clothing, jewelry, electronics containing "casual"*)

	- Search criteria:
      - Only show products of the categories whose checkboxes are CHECKED.
      - If the search input field has a value, filter the products list and only show the products whose *product title* matches the input value.
      - You should consider partial matches (e.g: If the product title is *“Mens Casual Slim Fit”*, entering *“casu”* in the text field should return this product).
