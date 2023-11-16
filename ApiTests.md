# API Endpoint Testing Documentation

## Endpoints

### 1. /users | GET
# 1a. /users/me
- Description: Get the details of logged in user
- Status: ✅ Working

# 1b. /users?populate=*
- Description: Get all users
- Status: ✅ Working

# 1c. /users?populate=*
- Description: Count users
- Status: ✅ Working

### 2. /users | POST
# 2a. /user
- Description: Create User
- Status: ✅ Working

# 2b. /auth/local
- Description: Authenticate the user
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