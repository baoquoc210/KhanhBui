import Link from "next/link";

import { PrudentialHeader } from "@/components/prudential-header";
import { PrudentialFooter } from "@/components/prudential-footer";
import { V0Badge } from "@/components/v0-badge";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PrudentialHeader active={null} ctaHref="/packages" ctaLabel="Get Started" />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-100 text-red-800 mb-4">
              404
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              This page could not be found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The page you’re looking for doesn’t exist or was moved. Use the
              links below to get back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-red-600 hover:bg-red-700 text-white h-11 rounded-md px-8"
                href="/"
              >
                Back to Home
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
                href="/packages"
              >
                View Packages
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
                href="/chat"
              >
                Chat with PRUBot
              </Link>
            </div>
          </div>
        </div>

        <PrudentialFooter />
      </div>

      <V0Badge />
    </>
  );
}
