# Next.js unblocked Google Analytics
An effective way to mount Google Analytics to your Next.js 13 Application on the client side and prevent them from being blocked by Ad-blockers

### How to run
- Create an `.env.local` file on the project root and export the following: `NEXT_PUBLIC_GA_MEASUREMENT_ID=YOUR_MEASUREMENT_ID`
- `npm install`
- `npm run dev`

### How it works
By modifiying the [Google Analytics Script](https://www.googletagmanager.com/gtag/js) and replacing Google Analytics reporting URL with our endpoint - '/analytics/' in this case - we are proxying the analytics reporting request through our server with the help of a rewrite and a custom middleware. This prevents ad-blocks from blocking our request, because if ad-blocks blocked requests to the backend services (such our proxy endpoint) front end applications would have a hard time working. 

# Problems with this
- We don't get the latest Google Analytics updates, we have to update the script manually
- The IP that's reported belongs to our server and not the user
- Replacing only https://google-analytics.com/g/collect link may not be enough
