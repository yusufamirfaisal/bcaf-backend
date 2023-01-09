## CODING TES BCA FINANCE

## Getting Started
### Tools
- [MySQL](https://www.mysql.com/)
- [Node.js®](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)

### Install
- Setup Database password at config/config.json
- Create Database
```
npm run db-create
```
- Migration
```
npx run db-migrate
```
- Start Apps
```
npm start
```

## API ROUTES
### Saldo
- Method: POST | Create Saldo
```
http://localhost:4000/api/v1/saldo
```
example JSON: { name: "Faisal" }
- Method: GET | Read Saldo
```
http://localhost:4000/api/v1/saldo
```
- Method: PUT | Update Saldo
```
http://localhost:4000/api/v1/saldo/:id
```
- Method: DELETE | Delete Saldo
```
http://localhost:4000/api/v1/saldo/:id
```
### Transaksi
- Method: POST | Create Transaksi
```
http://localhost:4000/api/v1/transaksi
```
- Method: GET | Read Transaksi
```
http://localhost:4000/api/v1/transaksi
```
- Method: PUT | Update Transaksi
```
http://localhost:4000/api/v1/transaksi/:id
```
- Method: DELETE | Delete Transaksi
```
http://localhost:4000/api/v1/transaksi/:id
```