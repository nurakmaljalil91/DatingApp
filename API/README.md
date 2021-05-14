```bash

dotnet tool update --global dotnet-ef

dotnet ef 

dotnet ef migrations add InitialCreate -o Data/Migrations

dotnet ef database update

dotnet ef migrations add UserPasswordAdded

dotnet ef database update

dotnet ef database drop

dotnet ef database update
```