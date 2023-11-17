# API Endpoint Testing Documentation

## Endpoint: /locations

1. GET /locations
   - Description: Get All locations
   - Authorization: Bearer Token
   - URL Parameter: /locations?filters[name][$contains]=Hobart
     - filters[name][$contains]=Hobart
   - Status: ✅ Working

2. POST /locations
   - Description: Create locations
   - Authorization: Bearer Token
   - Body: JSON data
        ```          
        {
            "name": "Example location", 
            "email": "example@Location.com",
            "streetNumber": "1",
            "street": "Example Place",
            "suburb": "Subrubia",
            "postcode": "7000",
            "phone": "0362223333"
        }   
        ```
   - Status: ✅ Working