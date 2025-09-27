# Deployment Guide for Aushadhi-OCR

## Prerequisites

Before deploying, make sure you have:

1. **Clerk Account**: Sign up at [clerk.com](https://clerk.com)
2. **Supabase Account**: Sign up at [supabase.com](https://supabase.com)
3. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

## Step 1: Set up Clerk Authentication

1. Create a new Clerk application
2. Go to "API Keys" in your Clerk dashboard
3. Copy your publishable key and secret key
4. Configure your application settings:
   - Add your domain to "Allowed Origins"
   - Set up sign-in and sign-up URLs

## Step 2: Set up Supabase Database

1. Create a new Supabase project
2. Go to the SQL Editor
3. Run the SQL schema from `supabase-schema.sql`
4. Go to "Settings" > "API"
5. Copy your project URL and anon key
6. For the service role key, copy the `service_role` key (keep this secret!)

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Set environment variables:
   ```bash
   vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   vercel env add CLERK_SECRET_KEY
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   vercel env add SUPABASE_SERVICE_ROLE_KEY
   ```

### Option B: Deploy via Vercel Dashboard

1. Connect your GitHub repository to Vercel
2. Import your project
3. Add environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## Step 4: Configure Domain (Optional)

1. In your Vercel dashboard, go to your project settings
2. Add your custom domain
3. Update your Clerk and Supabase settings with the new domain

## Environment Variables Reference

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Post-Deployment Checklist

- [ ] Test authentication flow (sign up, sign in, sign out)
- [ ] Test OCR demo functionality
- [ ] Verify database connections
- [ ] Check 3D animations are working
- [ ] Test responsive design on mobile
- [ ] Verify all API endpoints are working

## Troubleshooting

### Common Issues

1. **Authentication not working**: Check that your Clerk keys are correct and domain is added to allowed origins
2. **Database errors**: Verify Supabase URL and keys are correct
3. **3D animations not loading**: Check browser console for Three.js errors
4. **Build failures**: Ensure all dependencies are properly installed

### Debug Mode

To enable debug mode, add this to your environment variables:
```env
NEXT_PUBLIC_DEBUG=true
```

## Monitoring

After deployment, monitor:
- Vercel function logs
- Supabase database metrics
- Clerk authentication analytics
- User engagement metrics

## Scaling Considerations

- **Database**: Consider upgrading Supabase plan for more storage/requests
- **Authentication**: Clerk scales automatically
- **CDN**: Vercel provides global CDN
- **Functions**: Monitor Vercel function usage and upgrade if needed