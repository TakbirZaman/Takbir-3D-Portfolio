# EmailJS Setup Guide

To enable the contact form to send emails, follow these steps:

## 1. Create a Free EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up with any email address
- Verify your email

## 2. Get Your Public Key
- Go to Account → API Keys
- Copy your **Public Key** (it looks like: `abc123def456...`)

## 3. Create Email Service
- Click "Add Service"
- Choose "Gmail" or "Email.js" (recommending Gmail for reliability)
- Follow the setup wizard to connect your email
- Note the **Service ID** (e.g., `service_abc123`)

## 4. Create Email Template
- Click "Email Templates"
- Click "Create new template"
- Use these template variables:
  ```
  FROM_NAME: {{from_name}}
  FROM_EMAIL: {{from_email}}
  SUBJECT: {{subject}}
  MESSAGE: {{message}}
  ```
- Note the **Template ID** (e.g., `template_abc123`)

## 5. Update Contact.tsx
Replace these placeholders in `src/components/sections/Contact.tsx`:

```typescript
emailjs.init('YOUR_PUBLIC_KEY')  // Line 12
// Change to:
emailjs.init('your_actual_public_key_here')
```

And in the `handleSubmit` function, replace:
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',   // Line ~XX
  'YOUR_TEMPLATE_ID',  // Line ~XX
  ...
)
```

With your actual IDs:
```typescript
await emailjs.send(
  'service_abc123',    // Your Service ID
  'template_abc123',   // Your Template ID
  ...
)
```

## You're done!
- Test the contact form
- Free tier allows 200 emails/month
- Check EmailJS dashboard for delivery reports

---

**Security Note:** Never commit your keys to GitHub. If you accidentally do:
1. Regenerate keys immediately in EmailJS dashboard
2. Update your code
3. Force push (if necessary)
