const resetPasswordEmail = (url) => {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CampusNavigator Password Reset</title>
        <style>
            /* Reset CSS */
            body,
            h1,
            p {
                margin: 0;
                padding: 0;
            }
    
            /* Container */
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                border-radius: 10px;
            }
    
            /* Header */
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
    
            .header h1 {
                color: #333;
            }
    
            /* Content */
            .content {
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
            }
    
            .content p {
                line-height: 1.6;
            }
    
            /* Token */
            .token {
                background-color: #f0f0f0;
                padding: 10px;
                border-radius: 5px;
                margin-top: 20px;
            }
    
            .token p {
                font-weight: bold;
                color: #333;
            }
    
            /* Footer */
            .footer {
                text-align: center;
                margin-top: 20px;
            }
    
            .footer p {
                color: #666;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <h1>CampusNavigator Password Reset</h1>
            </div>
            <div class="content">
                <p>Hello,</p>
                <p>We received a request to reset your password for your CampusNavigator account. Please use the following  to reset your password:</p>
                <div class="token">
                    <a href=${url}>RESET YOUR PASSWORD</a>
                </div>
                <p>If you did not request a password reset, you can safely ignore this email.</p>
            </div>
            <div class="footer">
                <p>Regards,<br>CampusNavigator Team</p>
            </div>
        </div>
    </body>
    
    </html>
    `;
};

module.exports = resetPasswordEmail;
