# Stock portfolio dashboard
The Stock Portfolio Dashboard helps users efficiently buy and sell stocks based on available stock quantities. It includes robust validation checks to ensure:

1. Users cannot sell more stocks than they own.

2. Users cannot buy more stocks than the available quantity.

3. Invalid inputs are properly handled to prevent errors and maintain data integrity.

## State Management Tool Used: Context API
I chose Context API for managing state in the Stock Portfolio Dashboard because:

1. Simplified State Management: It allows easy sharing of stock data across multiple components without prop drilling.
2. Lightweight and Easy to Implement: Minimal setup makes it ideal for the current scope of the app.

Since the app focuses primarily on stock transactions and basic validations, Context API was a suitable and efficient choice. If the app scales with more complex features, transitioning to Redux can be considered for better scalability.

<img width="1028" alt="image" src="https://github.com/user-attachments/assets/00f73ed4-c454-4f52-9afe-8c98e9340814" />

<img width="545" alt="image" src="https://github.com/user-attachments/assets/38a5b875-48c6-4f25-8577-5c2231fbba1f" />


## Getting Started

To get started with the app, follow these steps:

### Running the App

To start the app, run the following command in your terminal:

1. npm install
2. npm run dev

### Running Tests

To run the test cases, run the following command in your terminal:

1. npm run test

