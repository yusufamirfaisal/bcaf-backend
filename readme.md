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
- [Postman Collection](https://api.postman.com/collections/15112453-094020ed-edf8-4f3f-b258-6cc46a9d81bd?access_key=PMAT-01GPBGGRJP4WMV7QPKKVJE4HWY)
### Saldo
- Method: POST | Create Saldo
```
http://localhost:4000/api/v1/saldo
```
- Example Input Create Saldo
```JSON
{
    "nama": "Faisal"
}
 ```
- Method: GET | Read Saldo
```
http://localhost:4000/api/v1/saldo
```
- Example Output Read Saldo
```JSON
{
    "status": "success",
    "data": [
        {
            "id": "c5a31208-146a-4756-a289-61131c915eb4",
            "nama": "Faisal",
            "saldo": 0,
            "createdAt": "2023-01-09 21:40:50",
            "updatedAt": "2023-01-09 21:40:50"
        }
    ]
}
```
- Method: PUT | Update Saldo
```
http://localhost:4000/api/v1/saldo/:id
```
- Example Input Update Saldo
```JSON
{
    "nama": "Yusuf"
}
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
- Example Input Create Transaksi
```JSON
{
    "saldo_id": "c5a31208-146a-4756-a289-61131c915eb4",
    "nominal": 200000,
    "jenis": "Kredit",
    "tanggal": "2023-01-07"
}
```
- Method: GET | Read Transaksi
```
http://localhost:4000/api/v1/transaksi
```
- Example Output Read Transaksi
```JSON
{
    "status": "success",
    "data": [
        {
            "id": "9bfacab9-86e9-4576-bfa6-74b85a81b25e",
            "saldo_id": "c5a31208-146a-4756-a289-61131c915eb4",
            "nominal": 200000,
            "jenis": "Kredit",
            "tanggal": "2023-01-07 07:00:00",
            "createdAt": "2023-01-09 21:45:25",
            "updatedAt": "2023-01-09 21:45:25",
            "Saldo": {
                "id": "c5a31208-146a-4756-a289-61131c915eb4",
                "nama": "Faisal",
                "saldo": 200000,
                "createdAt": "2023-01-09 21:40:50",
                "updatedAt": "2023-01-09 21:45:25"
            }
        }
    ]
}
```
- Method: PUT | Update Transaksi
```
http://localhost:4000/api/v1/transaksi/:id
```
- Example Input Update Transaksi
```JSON
{
    "nominal": 300000,
    "jenis": "Kredit",
    "tanggal": "2023-01-07"
}
```
- Method: DELETE | Delete Transaksi
```
http://localhost:4000/api/v1/transaksi/:id
```