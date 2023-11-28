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
