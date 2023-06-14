"use client"

import { GoogleAnalytics } from "nextjs-google-analytics"

export default function ClientLayout({ children }) {
  return (
    <>
      <GoogleAnalytics
        gtagUrl="/js/analytics.js"
        strategy="afterInteractive"
        trackPageViews
      />

      {children}
    </>
  )
}
