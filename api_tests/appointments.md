# API Endpoint Testing Documentation

## Endpoint: /appointments

1. GET /appointments
   - Description: Get All appointments
   - Authorization: Bearer Token
   - URL Parameter: /appointments
   - Status: ✅ Working

2. GET /appointments/{appointmnent_id}
   - Description: Get a single appointment
   - Authorization: Bearer Token
   - URL Parameter: /appointments/{appointmnent_id}
        -{appointmnent_id}
   - Status: ✅ Working

3. POST /appointments
   - Description: Create an appointment
   - Authorization: Bearer Token
   - Data Body: JSON data
        ```
        {
            "start": "2023-08-22T11:30:00+1000", // start datetime (ISO 8601 format)
            "end": "2023-08-22T12:00:00+1000", // end datetime (ISO 8601 format)
            "treatment": 1, // ID of treatment
            "doctor": 4, // ID of doctor
            "location": 1, // ID of location
            "patient": 5 // ID of patient
            //"record": 2 // Optional: assign a record at creation
        }
        ```
   - Status: ✅ Working

4. GET /faa?treatment=1&date=2023-08-31T00:00:00.000Z
    - Description: Create an appointment
    - Authorization: No Auth
    - URL parameters: /faa?treatment=1&date=2023-08-31T00:00:00.000Z
        - treatment=1 //treatment id
        - date=2023-08-31T00:00:00 
   - Status: ✅ Working