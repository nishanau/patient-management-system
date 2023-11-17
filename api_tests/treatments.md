# API Endpoint Testing Documentation

## Endpoint: /treatments

1. GET /treatments
   - Description: Get all Treatments
   - Authorization: Bearer Token
   - URL Parameter: /treatments?populate=*&filters[title]
        - populate=*
        - filters[title]
   - Status: ✅ Working

2. POST /treatments
   - Description: Get all Treatments
   - Authorization: Bearer Token
   - Data Body: JSON data
        ```
        {
            "title": "Consultation", // title of treatment
            "description": "A consultation to see what treatments may best suit you.", // description for website
            "appointments": {
                "connect": [1,2] // appointments this treatment connects to
            },
            "locations": {
                "connect": [1] // locations this treatment is offered at
            },
            "users": {
                "connect": [1,2,3] // users (doctors) who offer this treatment
            }

        }
        ```
   - Status: ✅ Working