```bash

dotnet tool update --global dotnet-ef

dotnet ef 

dotnet ef migrations add InitialCreate -o Data/Migrations

dotnet ef database update
```