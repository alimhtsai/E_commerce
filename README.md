## E-Commerce Shopping Website 
> C#, .Net Core, ASP.NET, JWT; REST; SQLite; TypeScript, Angular, Bootstrap; Redis, Docker

### Introduction
* Applied generic repository in C#/ .NET Core backend
* Used ASP.NET Identity and JWT for user registration and login
* Developed sorting, paging, searching, and routing using TypeScript/ Angular in frontend
* Built basket feature with Redis in-memory storage and Docker
* Reference: https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/

https://github.com/alimhtsai/skinet/assets/48788292/eb2f8323-cd26-4a30-b521-95c5edb0c6ab

----

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

<b>Step 3. Start frontend</b>
1. Go to the `client` folder.
2. Run `ng serve` in the terminal.
3. Open [https://localhost:4200](https://localhost:4200/)


