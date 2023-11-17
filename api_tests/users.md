# API Endpoint Testing Documentation

## Endpoint: /users

1. GET /users/me
    - Description: Get the details of logged in user
    - Authorization: Bearer Token
    - URL Parameter: /users/me?populate=*
        - populate
    - Status: ✅ Working

2. GET /users?populate=*
    - Description: Get all users
    - Authorization: Bearer Token
    - URL Parameter: /users?populate=*&pagination[page]=1&pagination[pageSize]=2
        - populate=*
        - pagination[page]
        - pagination[pageSize]
    - Status: ✅ Working

3. GET /users/count
    - Description: Count users
    - Authorization: Bearer Token
    - URL Parameter: /users/count
        -count
    - Status: ✅ Working


4. POST /users
    - Description: Create User
    - Authorization: User API Token
    - Data Body: Form data
        - username: text
        - email: text
        - password: text
        - role: text
        - dateOfBirth: Date
        - gender: enum (Male, Female or Others)
        - streetNumber: number
        - street: text
        - suburb: text
        - country: text
        - postcode: number
        - firstName: text
        - lastName: text
        - middleName: text
    - Status: ✅ Working

5. POST /auth/local
    - Description: Authenticate user
    - Authorization: No auth
    - Data Body: Form data
        - username: text
        - password: text
    - Status: ✅ Working

6. POST /api/token/refresh
    - Description: Refresh api token
    - Authorization: Bearer Token
    - URL Parameter: /api/token/refresh
    - Status: ✅ Working

7. POST /auth/forgot-password
    - Description: Forgot Password
    - Authorization: No Auth
    - Data Body: Form Data
        - email: text
    - Status: ✅ Working

    

# 2c. /api/token/refresh
- Description: Refrest JWT
- Response received: Method not allowed

# 2d. /auth/forgot-password
- Description: Forgot password
- Response received: Status 500, internal server error

# 3. Locations
# 3a. /locations
- Description: Get All Locations
- Status: ✅ Working

# 3a. /locations
- Description: Create Location
- Status: ✅ Working

# 4. Appointments
# 4a. GET /appointments
- Description: Get All Appointments
- Status: ✅ Working

# 4b. GET /appointments/{appointment_id}
- Description: Get a single appointment Appointment
- Status: ✅ Working

# 4c. POST /appointment
- Description: Create an appointment
- Status: ❌ Not Working
- Response: Status 500, Internal Server Error

# 4d. GET /faa
- Description: Find Available appointments based on treatment type in a given date
- Status: ✅ Working

# 5. Availability
# 5a. GET /availabilities
- Description: Find Availabilities
- Status: ✅ Working

# 5b. POST /availability
- Description: Create availability for a doctor
- Status: ❌ Not Working
- Response Method Not Allowed

# 6. Record
# 6a. GET /records
- Description: Get all the records
- Status: ✅ Working

# 7. Treatment
# 7a. Get /treatments
- Description: Get all treatments available
- Status: ✅ Working

# 7b. POST /treatments
- Description: Create a treatment
- Status: ✅ Working

# 8. Roles
# 8a. Get /users-permissions/roles/
- Description: Get all roles
- Status: ✅ Working

# 8b. Get /users-permissions/roles/{role_id}
- Description: Get a single role
- Status: ✅ Working

# 9. Permissions
# 9a. Get /users-permissions/permissions
- Description: Requests permissions 
- Status: ✅ Working