## E-Commerce Shopping Website 
> C#, .Net Core, ASP.NET, JWT; REST; SQLite; TypeScript, Angular, Bootstrap; Redis, Docker

### Introduction
* Applied [the repository and unit of work patterns](https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions/getting-started-with-ef-5-using-mvc-4/implementing-the-repository-and-unit-of-work-patterns-in-an-asp-net-mvc-application) in C#/ .NET Core backend
* Used ASP.NET Identity and JWT for user registration and login
* Developed sorting, paging, searching, and routing using TypeScript/ Angular in frontend
* Built basket feature with Redis in-memory storage and Docker
<!--- Reference: https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/ --->

https://github.com/alimhtsai/skinet/assets/48788292/eb2f8323-cd26-4a30-b521-95c5edb0c6ab

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


### Local build for MacOS
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

<b>Step 3. Start frontend</b>
1. Go to the `client` folder.
2. Run `ng serve` in the terminal.
3. Open [https://localhost:4200](https://localhost:4200/)


