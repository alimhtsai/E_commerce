## E-Commerce Shopping Website 
> C#, TypeScript; .Net Core, ASP.NET, Angular, Bootstrap, REST; JWT; SQLite; Redis, Docker

### Introduction
* Applied the repository, unit of work and specification pattern in **.NET Core** to decouple the data layer from the business logic layer, facilitating test-driven development (TDD) and improve code maintainability by 50%
* Built basket and caching with **Redis** and **Docker**, boosting response time by 30%; Used **ASP.NET** Identity and **JWT** for user authentication
* Developed pagination, sorting, searching, and filtering features in frontend using **TypeScript**, **Angular**, and **Bootstrap**
* Utilized **Stripe** Webhooks to handle payments with a 99% success rate; Deployed the app to production through **Linux Ubuntu**

### Live Demo Website -> [http://143.198.75.149](http://143.198.75.149)
* Demo account:
  * email: bob@test.com
  * password: Pa$$w0rd
* Demo test credit card:
  * card number: 4242 4242 4242 4242
  * card expiry: any future date
  * card cvc: any three digits

----

### Demo
From shopping to basket, users can sort, search, and filter products. They can easily add items to their basket and update quantities as needed.

https://github.com/alimhtsai/E_commerce/assets/48788292/9ec515bc-d29e-448e-a7c2-4869db533903

From basket to checkout, users can save a default address, select their preferred shipping method, review their order, and submit it. Once the order is submitted, the basket is automatically emptied. Additionally, users can view specific orders or review their entire order history. For demonstration purposes, we use the test credit card provided by Stripe to simulate a successful order.

https://github.com/alimhtsai/E_commerce/assets/48788292/b2772caa-2c50-45fc-baf9-f24f2f55a033

----

### Local build
<b>Step 1. Clone the GitHub project to the local directory</b>

`git clone https://github.com/alimhtsai/E_commerce.git`

<b>Step2. Create a Stripe developer account</b>
1. Go to offical Stripe website to register for a developer account to use the payment feature: [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)

<b>Step 3. Start backend</b>
1. Go to the `API` folder.
2. Fill in your Stripe `PublishableKey` and `SecretKey` in the `appsettings.json` file.
```shell
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Information"
    }
  },
  "StripeSettings": {
    "PublishableKey": "Fill in your public key from Stripe developer tool",
    "SecretKey": "Fill in your secret key from Stripe developer tool",
    "WhSecret": "Fill in your webhook signing key"
  },
  "AllowedHosts": "*"
}
```
4. Use [Stripe CLI](https://docs.stripe.com/stripe-cli#login-account) to test Webhooks functions.
   * (1) Run `stripe login` in the terminal.
   * (2) Run `stripe listen -f https://localhost:5001/api/payments/webhooks` to create a local listener. You will get a webhook signing key returned by this command. Pass the webhook signing key to the `WhSecret` in the `appsettings.json` file.

5. Run `dotnet watch` in the terminal.
6. If the backend runs successfully, the terminal should show messages like this:
```shell
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: https://localhost:5001
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: .../skinet/API
```
7. Use a list of test card provided by Stripe to test the payment function: [https://docs.stripe.com/testing#cards](https://docs.stripe.com/testing#cards)
8. (Optional) open [https://localhost:5001/swagger/index.html](https://localhost:5001/swagger/index.html) to see Swagger API.

<b>Step 4. Start Docker to use Redis in-memory storage for the basket</b>
1. Run `docker-compose up` in the terminal.
<!---
3. Open [http://localhost:8081/](http://localhost:8081/) to access the Redis:
   - username: `root`
   - password: `secret`
--->

<b>Step 5. Start frontend</b>
1. Go to the `client` folder.
2. Run `npm install` to install dependencies if it's your first time running the project.
3. Run `ng serve` in the terminal.
4. Open [https://localhost:4200](https://localhost:4200/)

----

### Project Structure

<img width="1000" alt="Screen Shot 2024-05-19 at 4 45 34 PM" src="https://github.com/alimhtsai/E_commerce/assets/48788292/1188d7de-715e-412c-bb64-92aba618458d">

```
..
├── API

           ├── Controllers
           ├── Dtos
           ├── Errors
           ├── Extensions
           ├── Helpers
           ├── MiddleWare
           ├── Properties
           ├── program.cs                       # Entry point of the back-end application
           ├── appsettings.Development.json     # Use only for development stage

├── Core                                        # Business logic

           ├── Entities
           ├── Interfaces                       # The repository pattern
           ├── Specifications                   # The specification pattern

├── Infrastructure                              # Connect with database

           ├── Data                             # Store repository 
           ├── Identity
           ├── Services

├── client                                      # Client side
```
