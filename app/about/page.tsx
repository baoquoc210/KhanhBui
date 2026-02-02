import { Building2, ShieldCheck, Sparkles } from "lucide-react";

import { PrudentialFooter } from "@/components/prudential-footer";
import { PrudentialHeader } from "@/components/prudential-header";
import { V0Badge } from "@/components/v0-badge";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PrudentialHeader active={null} />

        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">About Us</h1>
            <p className="text-lg text-gray-600">
              We’re building a modern, AI-powered insurance experience that’s
              simple, fast, and transparent.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
                <Sparkles className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="font-semibold mb-1">AI-First Experience</p>
                <p className="text-sm text-muted-foreground">
                  Smart guidance and recommendations (demo)
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
                <ShieldCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold mb-1">Trust & Compliance</p>
                <p className="text-sm text-muted-foreground">
                  Quality assurance built into workflows
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
                <Building2 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="font-semibold mb-1">175 Years of Heritage</p>
                <p className="text-sm text-muted-foreground">
                  Inspired by Prudential’s legacy
                </p>
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

