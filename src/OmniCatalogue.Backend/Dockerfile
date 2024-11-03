# Backend Dockerfile (OmniCatalogue.Backend/Dockerfile)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

# Copy project files for dependency restore
COPY src/OmniCatalogue.Backend/*.csproj ./OmniCatalogue.Backend/
WORKDIR /app/OmniCatalogue.Backend
RUN dotnet restore

# Copy all backend source files and build
COPY src/OmniCatalogue.Backend/ .
RUN dotnet publish -c Release -o /publish

# Use a smaller runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /publish
COPY --from=build-env /publish .

# Expose port for the backend service
EXPOSE 5106
ENTRYPOINT ["dotnet", "OmniCatalogue.Backend.dll"]
