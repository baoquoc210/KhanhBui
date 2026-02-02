import Link from "next/link";
import { HelpCircle } from "lucide-react";

import { PrudentialFooter } from "@/components/prudential-footer";
import { PrudentialHeader } from "@/components/prudential-header";
import { V0Badge } from "@/components/v0-badge";

export default function FaqPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PrudentialHeader active={null} />

        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <HelpCircle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">FAQ</h1>
                <p className="text-lg text-gray-600">
                  Quick answers to common questions (demo content).
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-8">
              {[
                {
                  q: "How do AI recommendations work?",
                  a: "This is a showcase UI. In a real system, AI would analyze your profile and match you with suitable packages."
                },
                {
                  q: "Can I submit a claim online?",
                  a: "The claim form is a frontend demo. You can still explore the flow and UI interactions."
                },
                {
                  q: "Is PRUBot available 24/7?",
                  a: "In this demo, PRUBot responds with placeholder messages. In production it could be connected to a real AI service."
                },
                {
                  q: "Where can I get help?",
                  a: "You can use PRUBot chat or contact support via the Contact page."
                }
              ].map((item) => (
                <details
                  key={item.q}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
                >
                  <summary className="cursor-pointer font-medium text-gray-900">
                    {item.q}
                  </summary>
                  <p className="text-sm text-gray-600 mt-2">{item.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Chat with PRUBot
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Contact Support
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

