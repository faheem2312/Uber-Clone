# User Registration Endpoint Documentation

## Endpoint
**POST** `/users/register`

## Description
This endpoint registers a new user by accepting their full name, email, and password. It validates the input data before creating a new user. If any required field is missing or invalid, it returns a 400 error with details.

## Request Body Format
- **fullname:** Object containing:
  - **firstname:** String (required, minimum 3 characters)
  - **lastname:** String (optional, minimum 3 characters if provided)
- **email:** String (required, must be a valid email format)
- **password:** String (required, minimum 6 characters)

**Example:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Example Response
On a successful registration, the API returns a 201 status code along with the authentication token and the created user object (password field is omitted):

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "645141eefd293c2c60cb6791",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$abcdefgHijklmnopqrs"
  }
}
```

# User Login Endpoint Documentation

## Endpoint
**POST** `/users/login`

## Description
This endpoint allows an existing user to log in by verifying their email and password. The input data is validated, and if incorrect credentials are provided, it returns a 401 error with an appropriate message. If the validation fails, a 400 error is returned.

## Request Body Format
- **email:** String (required, must be a valid email format)
- **password:** String (required, minimum 6 characters)

**Example Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Example Response

### On Successful Login (Status Code 200)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "645141eefd293c2c60cb6791",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$abcdefgHijklmnopqrs"
  }
}
```

# User Login Endpoint Documentation

## Endpoint
**POST** `/users/login`

## Description
This endpoint allows an existing user to log in by verifying their email and password. The input data is validated, and if incorrect credentials are provided, it returns a 401 error with an appropriate message. If the validation fails, a 400 error is returned.

## Request Body Format
- **email:** String (required, must be a valid email format)
- **password:** String (required, minimum 6 characters)

**Example Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```
## Example Response

### On Successful Login (Status Code 200)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "645141eefd293c2c60cb6791",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$abcdefgHijklmnopqrs"
  }
}
```

### On Validation Failure (Status Code 400)
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address.",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### On Authentication Failure (Status Code 401)
```json
{
  "message": "Invalid credentials"
}
```

---

# User Profile Endpoint Documentation

## Endpoint
**GET** `/users/profile`

## Description
This protected endpoint retrieves the authenticated user's profile data. The user must be authenticated via a valid token supplied in cookies or the `Authorization` header.

## Example Response

### On Success (Status Code 200)
```json
{
  "_id": "645141eefd293c2c60cb6791",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

---

# User Logout Endpoint Documentation

## Endpoint
**GET** `/users/logout`

## Description
This protected endpoint logs out the authenticated user by clearing the token cookie and blacklisting the token. After logout, the API returns a confirmation message.

## Example Response

### On Success (Status Code 200)
```json
{
  "message": "Logged out"
}
```

# Captain Endpoints Documentation

This document outlines the API endpoints for managing captain-related operations in the Uber Clone application.

---

## Captain Registration Endpoint

### Endpoint
**POST** `/captain/register`

### Description
This endpoint registers a new captain by accepting the captain’s full name, email, password, and vehicle details. The request data is validated and, if valid and the email is not already registered, a new captain account is created. Upon successful registration, an authentication token is issued.

### Request Body Format
- **fullname:** Object containing:
  - **firstname:** String (required, minimum 3 characters)
  - **lastname:** String (optional, minimum 3 characters if provided)
- **email:** String (required, must be a valid email format)
- **password:** String (required, minimum 6 characters)
- **vehicle:** Object containing:
  - **color:** String (required, minimum 3 characters)
  - **plate:** String (required, minimum 3 characters)
  - **capacity:** Number (required, minimum value of 1)
  - **vehicleType:** String (required, must be one of `car`, `motorcycle`, or `auto`)

**Example Request Body:**
```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "securePass123",
  "vehicle": {
    "color": "Black",
    "plate": "XYZ-123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response

#### On Successful Registration (Status Code 201)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "6400a1c2ef1234567890abcd",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "XYZ-123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "password": "$2b$10$abcdefgHijklmnopqrs"
  }
}
```

#### On Duplicate Email (Status Code 400)
```json
{
  "message": "Captain already exists"
}
```

---

## Captain Login Endpoint

### Endpoint
**POST** `/captain/login`

### Description
This endpoint allows an existing captain to log in by verifying their email and password. The request data is validated, and if the credentials are correct, a new authentication token is issued.

### Request Body Format
- **email:** String (required, must be a valid email format)
- **password:** String (required, minimum 6 characters)

**Example Request Body:**
```json
{
  "email": "alice.smith@example.com",
  "password": "securePass123"
}
```

### Example Response

#### On Successful Login (Status Code 200)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "6400a1c2ef1234567890abcd",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "XYZ-123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "password": "$2b$10$abcdefgHijklmnopqrs"
  }
}
```

#### On Validation Failure (Status Code 400)
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address.",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### On Authentication Failure (Status Code 400)
```json
{
  "message": "Invalid email or password"
}
```

---

## Captain Profile Endpoint

### Endpoint
**GET** `/captain/profile`

### Description
This protected endpoint retrieves the authenticated captain’s profile data. The captain must be authenticated via a valid token supplied in cookies or the `Authorization` header.

### Example Response

#### On Success (Status Code 200)
```json
{
  "captain": {
    "_id": "6400a1c2ef1234567890abcd",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "XYZ-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

## Captain Logout Endpoint

### Endpoint
**GET** `/captain/logout`

### Description
This protected endpoint logs out the authenticated captain by clearing the token cookie and blacklisting the token. After logout, a confirmation message is returned.

### Example Response

#### On Success (Status Code 200)
```json
{
  "message": "Logged out successfully"
}
```

---

Ensure that your routes, controllers, and models are correctly set up to match this documentation. Adjust the documentation as needed based on any future changes to your API.