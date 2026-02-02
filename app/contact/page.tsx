import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PrudentialFooter } from "@/components/prudential-footer";
import { PrudentialHeader } from "@/components/prudential-header";
import { V0Badge } from "@/components/v0-badge";

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PrudentialHeader active={null} />

        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Need help with packages, claims, or agent support? Choose a contact
              method below.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <Link
                href="/chat"
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold">Chat with PRUBot</p>
                    <p className="text-sm text-muted-foreground">
                      Fast answers, 24/7 (demo)
                    </p>
                  </div>
                </div>
              </Link>

              <a
                href="mailto:support@prudential.example"
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-sm text-muted-foreground">
                      support@prudential.example
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="tel:+84000000000"
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Call Hotline</p>
                    <p className="text-sm text-muted-foreground">
                      +84 00 0000 0000 (demo)
                    </p>
                  </div>
                </div>
              </a>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold">Visit a Branch</p>
                    <p className="text-sm text-muted-foreground">
                      Find locations in your city (demo)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Quick Links
                </div>
                <div className="text-sm text-muted-foreground">
                  Common destinations
                </div>
              </div>
              <div className="p-6 pt-0 grid sm:grid-cols-2 gap-3">
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Insurance Packages
                </Link>
                <Link
                  href="/claims"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  File a Claim
                </Link>
              </div>
            </div>
          </div>
        </div>

        <PrudentialFooter />
      </div>

      <V0Badge />
    </>
  );
}

