
### Xcampus Backend API
This is the backend API for XCampus written in Express JS. This API is a middleware to connect all the client-server machines together and establish the connection securely.


### API Reference

#### Test API connection
To test the API connectivity you can send a simple HTTP request at the host URL. 

```request
  GET /
```

Response when the connection is successsful.
```response
    "response": {
        "message": "API connection established successfully!"
    },
    "status": 200
```
Response when the connection is unsuccesssful.
```response
    "response": {
        "message": "API connection established successfully!"
    },
    "status": 200
```


### Authentication Routes
To send a login request, I have defined two routes. If your application has chosen a form where you want to get user ID and user password together, then you can directly use the second route. But if you have divided user ID input and user password input into two different layouts, then you can use the first layout to verify if the user's account exits and then jump on to the next route.

```request
  POST /auth/login/check-account-exist
```

Response for the first route if the user's account exits
```response
    "response": {
        "message": "Account exits!"
    },
    "status": 200
```

Response for the first route if the user's account does't exits
```response
    "response": {
        "message": "Login failed!"
        "reason": "Account not found.",
    },
    "status": 401
```

### Author

- Sudarshan Mhasrup (https://www.github.com/sudarshanmhasrup)

