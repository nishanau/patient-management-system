# API Endpoint Testing Documentation

## Endpoint: /availability

1. GET /availabilities
   - Description: Get all availabilities
   - Authorization: Bearer Token
   - URL Parameter: /availabilities
   - Status: ✅ Working

2. POST /availability
   - Description: Create an availability
   - Authorization: Bearer Token
   -Data Body: JSON data
        ```
        {
            "recurring":true,   // true if recurring that day every week
            "day":"monday",     // lowercase day of the week (enum)
            "start":"23:00:00.000",    // time availabiltiy block starts (format: HH:mm:ss.SSS in UTC)
            "end":"06:00:00.000",   // time availabiltiy block ends (format: HH:mm:ss.SSS in UTC)
            "user":1            // ID of doctor with availability
        }
        ```
    - Status: ❌ Not Working (Missing Admin Token)