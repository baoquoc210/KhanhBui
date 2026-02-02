import Link from "next/link";
import { Briefcase, MapPin } from "lucide-react";

import { PrudentialFooter } from "@/components/prudential-footer";
import { PrudentialHeader } from "@/components/prudential-header";
import { V0Badge } from "@/components/v0-badge";

export default function CareersPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PrudentialHeader active={null} />

        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Careers</h1>
            <p className="text-lg text-gray-600">
              Join our team and help shape the future of AI-powered insurance.
              (Demo listings)
            </p>

            <div className="space-y-4 mt-8">
              {[
                { title: "Frontend Engineer", location: "Remote / Vietnam" },
                { title: "Product Designer", location: "HCMC / Hybrid" },
                { title: "AI Analyst (Insurance)", location: "Hanoi / Hybrid" }
              ].map((job) => (
                <div
                  key={job.title}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold">{job.title}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Apply
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <PrudentialFooter />
      </div>

      <V0Badge />
    </>
  );
}

