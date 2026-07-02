# Vercel Environment Variables Setup

## Problem

Contact form shows **403 Forbidden** error because environment variables are not configured in Vercel production.

## Solution

### Step 1: Get Resend API Key

1. Go to https://resend.com
2. Sign up / Log in
3. Go to **API Keys** section
4. Create a new API key
5. Copy the key (starts with `re_`)

### Step 2: Configure Environment Variables in Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project: **harshaa2** or **harshaagurnani**
3. Click on **Settings** tab
4. Click on **Environment Variables** in left sidebar
5. Add the following variables:

#### Required Variables:

| Variable Name    | Value                                                | Environment                      |
| ---------------- | ---------------------------------------------------- | -------------------------------- |
| `RESEND_API_KEY` | Your actual Resend API key (e.g., `re_abc123xyz...`) | Production, Preview, Development |
| `CONTACT_EMAIL`  | `marigoldmagick@harshaagurnani.com`                  | Production, Preview, Development |
| `FROM_EMAIL`     | `onboarding@resend.dev`                              | Production, Preview, Development |

**Important:**

- Click "Add" for each variable
- Select all three environments (Production, Preview, Development)
- Click "Save"

### Step 3: Verify Sender Email in Resend

1. Go to https://resend.com/domains
2. Add your domain: `harshaagurnani.com`
3. Add the DNS records shown by Resend to your domain provider
4. Wait for verification (usually takes a few minutes)
5. Once verified, you can send from `noreply@harshaagurnani.com` or any email on your domain

**OR** use the default `onboarding@resend.dev` for testing (already working)

### Step 4: Redeploy

After adding environment variables:

1. Go to **Deployments** tab in Vercel
2. Click the **︙** (three dots) on the latest deployment
3. Click **Redeploy**

OR simply push new code to GitHub (automatic deployment)

### Step 5: Test

1. Go to https://www.harshaagurnani.com/contact
2. Fill the contact form
3. Submit
4. Check your email at `marigoldmagick@harshaagurnani.com`

## Verification Checklist

- [ ] Resend account created
- [ ] API key generated
- [ ] Environment variables added to Vercel
- [ ] All three environments selected (Production, Preview, Development)
- [ ] Project redeployed
- [ ] Contact form tested on production
- [ ] Email received successfully

## Troubleshooting

### Still getting 403 error?

- Check Vercel deployment logs
- Verify environment variables are set in **Production** environment
- Ensure RESEND_API_KEY is valid and not expired

### Email not received?

- Check Resend dashboard for delivery logs
- Verify CONTACT_EMAIL is correct
- Check spam folder
- If using custom domain email, ensure domain is verified in Resend

### Check Vercel Function Logs

1. Go to Vercel dashboard → Your project
2. Click on **Deployments** tab
3. Click on latest deployment
4. Click on **Functions** tab
5. Find `/api/send-contact` function
6. View logs for errors

## Code Changes Made

1. **vercel.json** - Fixed API routing with proper CORS headers
2. **api/send-contact.cjs** - Already has proper CORS and error handling

## Notes

- The `.env` file in your local repository is NOT used in production
- Environment variables must be configured separately in Vercel dashboard
- Free Resend plan allows 100 emails/day (enough for contact form)
- Resend is free for up to 3,000 emails/month

## Support

If still facing issues:

1. Check Vercel function logs
2. Check Resend delivery logs
3. Ensure API key has proper permissions
