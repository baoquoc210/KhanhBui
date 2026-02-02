import Link from "next/link";
import {
  ArrowRight,
  Check,
  Heart,
  Shield,
  Star,
  TrendingUp,
  Users
} from "lucide-react";

import { PrudentialFooter } from "@/components/prudential-footer";
import { PrudentialHeader } from "@/components/prudential-header";
import { V0Badge } from "@/components/v0-badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function PackagesPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PrudentialHeader active="packages" />

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Insurance Package
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered recommendation engine analyzes your needs to
              suggest the most suitable insurance packages
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm lg:sticky lg:top-4">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-red-600" />
                    <span>AI Recommendations</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Tell us about yourself to get personalized suggestions
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="Enter your age" />
                  </div>

                  <div>
                    <Label htmlFor="income">Monthly Income (VND)</Label>
                    <Select>
                      <SelectTrigger id="income">
                        <SelectValue placeholder="Select income range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10m">Under 10M</SelectItem>
                        <SelectItem value="10-20m">10M - 20M</SelectItem>
                        <SelectItem value="20-50m">20M - 50M</SelectItem>
                        <SelectItem value="over-50m">Over 50M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="family">Family Status</Label>
                    <Select>
                      <SelectTrigger id="family">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="with-children">With Children</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Coverage Amount (Million VND)</Label>
                    <Slider
                      className="mt-2"
                      defaultValue={[500]}
                      min={0}
                      max={2000}
                      step={50}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>100M</span>
                      <span>2B</span>
                    </div>
                  </div>

                  <a
                    href="#available-packages"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  >
                    Get AI Recommendations
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 id="available-packages" className="text-2xl font-semibold scroll-mt-24">
                  Available Packages
                </h2>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-red-100 text-red-800">
                  AI-Powered Matching
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-100 text-green-800">
                      Recommended
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-8 w-8 text-red-600" />
                      <div>
                        <div className="text-2xl font-semibold leading-none tracking-tight">
                          PruLife Protect
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Comprehensive Life Insurance
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        95% AI Match Score
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Death benefit up to 2B VND</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Terminal illness coverage</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Flexible premium payment</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">
                          Monthly Premium
                        </span>
                        <span className="text-lg font-semibold">From 2.5M VND</span>
                      </div>
                    </div>
                    <Link
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                      href="/packages/life-insurance"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-8 w-8 text-red-600" />
                      <div>
                        <div className="text-2xl font-semibold leading-none tracking-tight">
                          PruHealth Plus
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Complete Health Coverage
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        88% AI Match Score
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Hospitalization coverage</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Outpatient benefits</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Annual health check-up</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">
                          Monthly Premium
                        </span>
                        <span className="text-lg font-semibold">From 1.8M VND</span>
                      </div>
                    </div>
                    <Link
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-transparent"
                      href="/packages/health-insurance"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-8 w-8 text-green-600" />
                      <div>
	                        <div className="text-2xl font-semibold leading-none tracking-tight">
	                          PruInvest Growth
	                        </div>
	                        <div className="text-sm text-muted-foreground">
	                          Investment‑Linked + PRU‑Shield Oversight
	                        </div>
	                      </div>
	                    </div>
	                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        82% AI Match Score
                      </span>
                    </div>
	                    <div className="space-y-2">
	                      <div className="flex items-center space-x-2">
	                        <Check className="h-4 w-4 text-green-600" />
	                        <span className="text-sm">Life insurance + investment</span>
	                      </div>
	                      <div className="flex items-center space-x-2">
	                        <Check className="h-4 w-4 text-green-600" />
	                        <span className="text-sm">PRU‑Shield transparency scoring</span>
	                      </div>
	                      <div className="flex items-center space-x-2">
	                        <Check className="h-4 w-4 text-green-600" />
	                        <span className="text-sm">Real-time risk alerts (demo)</span>
	                      </div>
	                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">
                          Monthly Premium
                        </span>
                        <span className="text-lg font-semibold">From 3.0M VND</span>
                      </div>
                    </div>
                    <Link
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-transparent"
                      href="/packages/investment-insurance"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex items-center space-x-3">
                      <Users className="h-8 w-8 text-purple-600" />
                      <div>
                        <div className="text-2xl font-semibold leading-none tracking-tight">
                          PruFamily Shield
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Complete Family Protection
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        91% AI Match Score
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Coverage for entire family</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Children education fund</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Family health benefits</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">
                          Monthly Premium
                        </span>
                        <span className="text-lg font-semibold">From 4.2M VND</span>
                      </div>
                    </div>
                    <Link
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-transparent"
                      href="/packages/family-insurance"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border text-card-foreground shadow-sm mt-8 bg-red-50 border-red-200">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2 text-red-800">
                    <TrendingUp className="h-5 w-5" />
                    <span>AI Insights</span>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-red-800">
                        Based on your profile:
                      </h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Life insurance is highly recommended for income protection</li>
                        <li>• Consider family coverage if you have dependents</li>
                        <li>• Health insurance complements your existing benefits</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-red-800">Market trends:</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• 78% of customers choose life + health combo</li>
                        <li>• Investment plans popular for long-term goals</li>
                        <li>• Family packages offer 15% cost savings</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
