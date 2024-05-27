## E-Commerce Shopping Website 
> C#, TypeScript; .Net Core, ASP.NET, Angular, Bootstrap, REST; JWT; SQLite; Redis, Docker

#### Live Demo Website: [http://146.190.37.229/](http://146.190.37.229/)

### Introduction
* Applied the repository, unit of work, and specification pattern in C#/ .NET Core backend to decouple the data layer from the business logic layer, facilitating test-driven development (TDD)
* Used ASP.NET Identity and JWT for user registration and login
* Built basket feature with Redis in-memory storage and Docker
* Developed pagination, sorting, searching, and filtering features in frontend using TypeScript, Angular, and Bootstrap
* Utilized Stripe and Webhooks to handle payments
* Deployed the app to production through Linux

### Live Demo
From shopping to basket, users can sort, search, and filter products. They can easily add items to their basket and update quantities as needed.

https://github.com/alimhtsai/E_commerce/assets/48788292/9ec515bc-d29e-448e-a7c2-4869db533903

From basket to checkout, users can save a default address, select their preferred shipping method, review their order, and submit it. Once the order is submitted, the basket is automatically emptied. Additionally, users can view specific orders or review their entire order history. For demonstration purposes, we use the test credit card provided by Stripe to simulate a successful order.

https://github.com/alimhtsai/E_commerce/assets/48788292/b2772caa-2c50-45fc-baf9-f24f2f55a033

----

### Local build
<b>Step 1. Clone the GitHub project to the local directory</b>

`git clone https://github.com/alimhtsai/E_commerce.git`

<b>Step 2. Start backend</b>
1. Go to the `API` folder.
2. Run `dotnet watch` in the terminal.
3. If the backend runs successfully, the terminal should show messages like this:
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
4. Open [https://localhost:5001/swagger/index.html](https://localhost:5001/swagger/index.html) to see Swagger API.

<b>Step 3. Start Docker to use Redis in-memory storage for the basket</b>
1. Run `docker-compose up` in the terminal.
2. Open [http://localhost:8081/](http://localhost:8081/) to access the Redis:
   - username: `root`
   - password: `secret`

<b>Step 4. Start frontend</b>
1. Go to the `client` folder.
2. Run `ng serve` in the terminal.
3. Open [https://localhost:4200](https://localhost:4200/)

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

├── Core

           ├── Entities
           ├── Interfaces                       # The repository pattern
           ├── Specifications                   # The specification pattern

├── Infrastructure

           ├── Data                             # Store repository 
           ├── Identity
           ├── Services

├── client                                      # Client side
```


