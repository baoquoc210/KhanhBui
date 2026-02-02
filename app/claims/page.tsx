import Link from "next/link";
import {
  Camera,
  CircleAlert,
  CircleCheckBig,
  Clock,
  FileText,
  Smartphone,
  Upload,
  Zap
} from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { PrudentialFooter } from "@/components/prudential-footer";

export default function ClaimsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PrudentialHeader active="claims" />

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              PRUOnline Claims
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Submit your claims directly via smartphone or website with our OCR
              technology and receive instant feedback
            </p>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mt-4 bg-red-100 text-red-800">
              <Zap className="h-4 w-4 mr-1" />
              AI-Powered OCR Technology
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                    <Smartphone className="h-5 w-5 text-red-600" />
                    <span>Submit New Claim</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Our OCR technology will automatically process your documents
                    for instant feedback
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="policy-number">Policy Number</Label>
                      <Input
                        id="policy-number"
                        placeholder="Enter your policy number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="claim-type">Claim Type</Label>
                      <Select>
                        <SelectTrigger id="claim-type">
                          <SelectValue placeholder="Select claim type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="health">Health Claim</SelectItem>
                          <SelectItem value="accident">Accident Claim</SelectItem>
                          <SelectItem value="life">Life Claim</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="incident-date">Incident Date</Label>
                    <Input id="incident-date" type="date" />
                  </div>

                  <div>
                    <Label htmlFor="description">Claim Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please describe the incident or medical condition..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Supporting Documents</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <div className="space-y-4">
                        <div className="flex justify-center space-x-4">
                          <Camera className="h-12 w-12 text-gray-400" />
                          <Upload className="h-12 w-12 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-lg font-medium">
                            Upload or Take Photos
                          </p>
                          <p className="text-sm text-gray-600">
                            Our OCR technology will automatically extract
                            information from your documents
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-2">
                          <label className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto cursor-pointer">
                            <input
                              type="file"
                              className="sr-only"
                              multiple
                              aria-label="Upload supporting documents"
                            />
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Files
                          </label>
                          <label className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:w-auto cursor-pointer">
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              capture="environment"
                              aria-label="Take a photo"
                            />
                            <Camera className="h-4 w-4 mr-2" />
                            Take Photo
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/chat?prefill=Help%20me%20file%20a%20claim"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Submit Claim
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-red-600" />
                    <span>OCR Technology</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Advanced document processing capabilities
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center space-x-2">
                    <CircleCheckBig className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Automatic data extraction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CircleCheckBig className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Real-time document verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CircleCheckBig className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Instant feedback system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CircleCheckBig className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Multi-language support</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight">
                    Recent Claims
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Track your claim status in real-time
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Health Claim #HC2024001</p>
                      <p className="text-xs text-gray-600">Submitted 2 days ago</p>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-100 text-green-800">
                      <CircleCheckBig className="h-3 w-3 mr-1" />
                      Approved
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">
                        Accident Claim #AC2024002
                      </p>
                      <p className="text-xs text-gray-600">Submitted 5 days ago</p>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-yellow-100 text-yellow-800">
                      <Clock className="h-3 w-3 mr-1" />
                      Processing
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Life Claim #LC2024003</p>
                      <p className="text-xs text-gray-600">Submitted 1 week ago</p>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-red-100 text-red-800">
                      <CircleAlert className="h-3 w-3 mr-1" />
                      Review
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight">
                    Need Help?
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Get assistance with your claims
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-3">
                  <Link
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-transparent"
                    href="/chat"
                  >
                    Chat with PRUBot
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-transparent"
                    href="/contact"
                  >
                    Contact Agent
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-transparent"
                    href="/faq"
                  >
                    View FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                How PRUOnline Claims Work
              </div>
              <div className="text-sm text-muted-foreground">
                Our AI-powered process ensures fast and accurate claim processing
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Upload className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Submit Documents</h3>
                  <p className="text-sm text-gray-600">
                    Upload or photograph your documents using our mobile-friendly
                    interface
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">2. OCR Processing</h3>
                  <p className="text-sm text-gray-600">
                    Our AI automatically extracts and verifies information from
                    your documents
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Instant Feedback</h3>
                  <p className="text-sm text-gray-600">
                    Receive real-time notifications about your claim status and
                    any required actions
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CircleCheckBig className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">4. Quick Resolution</h3>
                  <p className="text-sm text-gray-600">
                    Get your claim processed and approved faster than traditional
                    methods
                  </p>
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
