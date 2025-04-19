export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Poppins', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f5f5f5;">
  <table cellpadding="0" cellspacing="0" style="width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; margin: 20px auto; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    <tr>
      <td>
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 30px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Verify Your Email</h1>
        </div>
        
        <!-- Content -->
        <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 5px 5px;">
          <p style="font-size: 16px; margin-top: 0;">Hello,</p>
          <p style="font-size: 16px;">Thank you for signing up! Your verification code is:</p>
          
          <!-- Verification Code Box -->
          <div style="text-align: center; margin: 30px 0;">
            <div style="display: inline-block; background-color: #f9f9f9; border: 1px dashed #4CAF50; border-radius: 8px; padding: 20px 40px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
              <span style="font-size: 36px; font-weight: 700; letter-spacing: 8px; color: #4CAF50;">{verificationCode}</span>
            </div>
          </div>
          
          <p style="font-size: 16px;">Enter this code on the verification page to complete your registration.</p>
          
          <!-- Important Note Box -->
          <div style="background-color: #f8f9fa; border-left: 4px solid #4CAF50; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 0; font-size: 15px;"><strong>Note:</strong> This code will expire in 15 minutes for security reasons.</p>
          </div>
          
          <p style="font-size: 16px;">If you didn't create an account with us, please ignore this email.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="margin-bottom: 5px;">Best regards,</p>
            <p style="font-weight: 600; color: #4CAF50; margin-top: 0;">ZMR Companies</p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
          <p style="color: #888; font-size: 14px; margin: 0;">This is an automated message, please do not reply to this email.</p>
          <div style="margin-top: 15px;">
            <a href="#" style="display: inline-block; margin: 0 5px; color: #4CAF50; text-decoration: none;">Privacy Policy</a>
            <span style="color: #ddd; margin: 0 5px;">|</span>
            <a href="#" style="display: inline-block; margin: 0 5px; color: #4CAF50; text-decoration: none;">Terms of Service</a>
            <span style="color: #ddd; margin: 0 5px;">|</span>
            <a href="#" style="display: inline-block; margin: 0 5px; color: #4CAF50; text-decoration: none;">Contact Us</a>
          </div>
          <p style="color: #888; font-size: 14px; margin-top: 15px;">© 2025 ZMR Companies. All rights reserved.</p>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to {{company_name}}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; color: #333333;">
  <!-- Email Container -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    <!-- Header -->
    <tr>
      <td style="padding: 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 30px 20px; text-align: center;">
              <!-- Company Logo -->
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Welcome to {{company_name}}!</h1>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Main Content -->
    <tr>
      <td style="padding: 30px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <!-- Greeting -->
          <tr>
            <td style="padding-bottom: 20px;">
              <p style="font-size: 16px; margin-top: 0; margin-bottom: 10px;">Hello {{user_name}},</p>
              <p style="font-size: 16px; margin-top: 0; margin-bottom: 20px;">Thank you for joining {{company_name}}! We're thrilled to have you as part of our community.</p>
            </td>
          </tr>
          
          <!-- Welcome Box -->
          <tr>
            <td style="padding-bottom: 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f0f7f0; border-radius: 8px;">
                <tr>
                  <td style="padding: 25px; text-align: center;">
                    <!-- Success Icon -->
                    <h2 style="color: #4CAF50; margin: 0 0 15px 0; font-size: 22px;">Your account is now active!</h2>
                    <p style="margin: 0; font-size: 16px;">We've successfully verified your email address.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Support Message -->
          <tr>
            <td style="padding-bottom: 20px;">
              <p style="font-size: 16px; margin: 0;">If you have any questions or need assistance, please don't hesitate to <a href="{{help_url}}" style="color: #4CAF50; text-decoration: underline;">contact our support team</a>.</p>
            </td>
          </tr>
          
          <!-- Signature -->
          <tr>
            <td style="padding-top: 20px; border-top: 1px solid #eeeeee;">
              <p style="margin-bottom: 5px; margin-top: 0;">Best regards,</p>
              <p style="font-weight: 600; color: #4CAF50; margin-top: 0;">The {{company_name}} Team</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="padding: 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; border-top: 1px solid #eeeeee;">
              <!-- Links -->
              <p style="margin-bottom: 15px; margin-top: 0;">
                <a href="#" style="color: #4CAF50; text-decoration: none; margin: 0 5px;">Privacy Policy</a>
                <span style="color: #dddddd;">|</span>
                <a href="#" style="color: #4CAF50; text-decoration: none; margin: 0 5px;">Terms of Service</a>
                <span style="color: #dddddd;">|</span>
                <a href="#" style="color: #4CAF50; text-decoration: none; margin: 0 5px;">Contact Us</a>
              </p>
              
              <!-- Company Info -->
              <p style="color: #888888; font-size: 14px; margin: 0;">© {{current_year}} {{company_name}}. All rights reserved.</p>
              <p style="color: #888888; font-size: 14px; margin-top: 10px; margin-bottom: 10px;">123 Business Street, Suite 100, City, Country</p>
              
              <!-- Unsubscribe -->
              <p style="color: #888888; font-size: 12px; margin: 0;">
                <a href="{{unsubscribe_url}}" style="color: #888888; text-decoration: underline;">Unsubscribe</a> from our emails
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>ZMR Companies</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;
