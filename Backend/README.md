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