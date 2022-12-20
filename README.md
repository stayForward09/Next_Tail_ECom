# Fast Marketplace: eCommerce Platform Project

Fast Marketplace is a case study of a eCommerce platform implemented using Next.js, TypeScript, Tailwind CSS, Redux, NextAuth, Cloud Firestore Database, Webhooks, and Stripe Payments Checkout.

Includes eCommerce features like Shopping Cart, Checkout Payment, and Customer Order History.

![smartmockups_laiiihlb](https://user-images.githubusercontent.com/42308135/201991734-fa2bc896-d49d-4276-8221-a80fd112e4df.jpg)


## Tech Stack

- Next.js
- React.js
- TypeScript
- Redux
- Tailwind CSS
- NextAuth
- Stripe Checkout
- Webhooks
- Firebase

## Features

- Responsive UI with Tailwind CSS.
- Shopping Cart
- Payment Checkout flow with Stripe
- Customer Order History
- State Management with Redux.
- Data fetching and caching techniques using SSR (Server Side Rendering) with Next.js.
- User Authentication with NextAuth.
- Robust code using TypeScript.

## Screen Captures
<img src="https://user-images.githubusercontent.com/42308135/201999021-956dac52-2e90-44c5-9ad2-6d3ba47e8237.gif" width="750" />
<img src="https://user-images.githubusercontent.com/42308135/202000898-b3213473-7d99-4a76-a834-69f359b944eb.gif" width="750" />

## Screenshots

<img src="https://user-images.githubusercontent.com/42308135/201992650-10ea69fb-b242-4f0a-8bb6-5c5077d905d8.png" width="750" />
<img src="https://user-images.githubusercontent.com/42308135/201992966-143562bb-19f9-4278-916a-6d951288fe15.png" width="600" />
<img src="https://user-images.githubusercontent.com/42308135/201993041-667db403-9234-4aa1-8316-ff9f1448ca2b.png" width="600" />
<img src="https://user-images.githubusercontent.com/42308135/201993326-aaf43d57-791d-4c8b-8c2d-5265939657e3.png" width="600" />
<img src="https://user-images.githubusercontent.com/42308135/201993396-2c608f87-e407-4dd9-888c-c8bb37574f5a.png" width="600" />


## Installation

First, clone the project and open it with Visual Studio Code:

```bash
git clone https://github.com/javigong/travel-nextjs-typescript-tailwind-mapbox-calendar-date-picker.git

cd travel-nextjs-typescript-tailwind-mapbox-calendar-date-picker

code .
```

Then, create a .env.local file in the root of the project and configure the following environment variables:

```
# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=

# Rapidapi, Hotels API
NEXT_PUBLIC_RAPIDAPI_KEY=

# Firebase client
FIREBASE_CLIENT_API_KEY=
FIREBASE_CLIENT_AUTH_DOMAIN=
FIREBASE_CLIENT_PROJECT_ID=
FIREBASE_CLIENT_STORAGE_BUCKET=
FIREBASE_CLIENT_MESSAGING_SENDER_ID=
FIREBASE_CLIENT_APP_ID=

# Authentication
# Need to add Authorized redirect URIs to Google Cloud OAuth Service
# http://localhost:3000/api/auth/callback/google or https://your.deployment.url.com/api/auth/callback/google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Next Auth
# You can generate the secret via 'openssl rand -base64 32' on Linux
# More info: https://next-auth.js.org/configuration/options#secret
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Stripe Payments
# More info: https://stripe.com/docs/payments/accept-a-payment
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=

# Stripe Terminal/CLI
STRIPE_SIGNING_SECRET=
```

Finally, install the npm dependencies and run the application:

```bash
yarn

yarn dev
```

Now the application is running on http://localhost:3000 🚀

## Deployment details

Fast Marketplace deployed using Vercel: [Deployments Activity Log](https://github.com/javigong/fast-marketplace-nextjs-typescript-tailwind-redux-nextauth-firebase/deployments/activity_log?environment=Production)

