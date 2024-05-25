## E-Commerce Shopping Website 
> C#, .Net Core, ASP.NET, JWT; REST; SQLite; TypeScript, Angular, Bootstrap; Redis, Docker

### Introduction
* Applied the repository, unit of work, and specification pattern in C#/ .NET Core backend to decouple the data layer from the business logic layer, facilitating test-driven development (TDD)
* Used ASP.NET Identity and JWT for user registration and login
* Built basket feature with Redis in-memory storage and Docker
* Developed pagination, sorting, searching, and filtering features in frontend using TypeScript, Angular, and Bootstrap

### Live Demo
From shopping to basket, users can sort, search, and filter products. They can easily add items to their basket and update quantities as needed.

https://github.com/alimhtsai/E_commerce/assets/48788292/e2dbf0f5-f539-48b4-9fd6-07900b6a2fc1

From basket to checkout, users can save a default address, choose their preferred shipping method, review their order, and submit it. Once the order is submitted, the basket is automatically emptied. Users can also view specific orders or review all their previous orders.

https://github.com/alimhtsai/E_commerce/assets/48788292/a445c7d4-6394-4e3b-bf2a-aa608e404a77

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
                              ├── AccountController.cs
                              ├── BaseApiController.cs
                              ├── BasketController.cs
                              ├── BuggyController.cs
                              ├── ErrorController.cs
                              ├── OrdersController.cs
                              ├── ProductsController.cs
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
                              ├── Identity
                                                      ├── Address.cs
                                                      ├── AppUser.cs
                              ├── OrderAggregate
                                                      ├── Address.cs
                                                      ├── DeliveryMethod.cs
                                                      ├── Order.cs
                                                      ├── OrderItem.cs
                                                      ├── OrderStatus.cs
                                                      ├── ProductItemOrdered.cs
                              ├── BasketItem.cs
                              ├── CustomerBasket.cs
                              ├── Product.cs
                              ├── ProductBrand.cs
                              ├── ProductType.cs
           ├── Interfaces
                              ├── IBasketRepository.cs
                              ├── IGenericRepository.cs
                              ├── IOrderService.cs
                              ├── IProductRepository.cs
                              ├── ITokenService.cs
                              ├── IUnitOfWork.cs
           ├── Specifications

├── Infrastructure
           ├── Data
                              ├── BasketRepository.cs
                              ├── GenericRepository.cs
                              ├── ProductRepository.cs
                              ├── SpecificationEvaluator.cs
                              ├── StoreContext.cs
                              ├── StoreContextSeed.cs
                              ├── UnitOfWork.cs
           ├── Identity
           ├── Services
                              ├── OrderSercive.cs
                              ├── TokenService.cs

├── client
           ├── src
                              ├── app
                                                      ├── account
                                                      ├── basket
                                                      ├── checkout
                                                      ├── home
                                                      ├── shared
                                                      ├── shop
```


