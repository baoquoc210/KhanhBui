import Link from "next/link";
import {
  Activity,
  Award,
  BookOpen,
  ChartColumn,
  CircleCheckBig,
  Clock,
  FileCheck2,
  FileSearch,
  GraduationCap,
  MessageCircle,
  Shield,
  Target,
  Timer,
  TrendingUp,
  TriangleAlert,
  Users
} from "lucide-react";

import { PrudentialHeader } from "@/components/prudential-header";
import { PrudentialFooter } from "@/components/prudential-footer";
import { V0Badge } from "@/components/v0-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProgressBar({ value }: { value: number }) {
  return (
    <div
      aria-valuemax={100}
      aria-valuemin={0}
      role="progressbar"
      data-state="indeterminate"
      data-max={100}
      className="relative w-full overflow-hidden rounded-full bg-secondary h-2"
    >
      <div
        data-state="indeterminate"
        data-max={100}
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </div>
  );
}

export default function AgentPortalPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PrudentialHeader active="agent-portal" />

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Agent Monitoring
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced performance monitoring and counseling service evaluation
              powered by artificial intelligence
            </p>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mt-4 bg-green-100 text-green-800">
              New M-Pro Inspired System
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto md:h-10">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="quality">Quality Assurance</TabsTrigger>
              <TabsTrigger value="training">PRUForce Training</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Active Agents
                    </div>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">1,247</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      AI Quality Score
                    </div>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">94.2%</div>
                    <p className="text-xs text-muted-foreground">
                      +2.1% improvement
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Contracts Verified
                    </div>
                    <CircleCheckBig className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">3,891</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Customer Satisfaction
                    </div>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">4.8/5</div>
                    <p className="text-xs text-muted-foreground">
                      Based on AI analysis
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                      <ChartColumn className="h-5 w-5 text-red-600" />
                      <span>Real-time Performance Monitoring</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      AI-powered analytics track agent performance across
                      multiple metrics
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Sales Performance</span>
                        <span>92%</span>
                      </div>
                      <ProgressBar value={92} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Customer Interaction Quality</span>
                        <span>88%</span>
                      </div>
                      <ProgressBar value={88} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Compliance Score</span>
                        <span>96%</span>
                      </div>
                      <ProgressBar value={96} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Training Completion</span>
                        <span>85%</span>
                      </div>
                      <ProgressBar value={85} />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <span>Counseling Service Evaluation</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      AI analyzes counseling sessions to ensure quality service
                      delivery
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CircleCheckBig className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">
                          Excellent Sessions
                        </span>
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-100 text-green-800">
                        847
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium">
                          Needs Improvement
                        </span>
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-yellow-100 text-yellow-800">
                        124
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <TriangleAlert className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium">
                          Requires Attention
                        </span>
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-red-100 text-red-800">
                        23
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    <span>M-Pro Inspired Contract Verification</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Advanced AI system verifies contracts and ensures customer
                    understanding
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <Target className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Contract Analysis</h3>
                      <p className="text-sm text-gray-600">
                        AI reviews contract terms and conditions
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <CircleCheckBig className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">
                        Customer Understanding
                      </h3>
                      <p className="text-sm text-gray-600">
                        Verifies customer comprehension levels
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Quality Assurance</h3>
                      <p className="text-sm text-gray-600">
                        Ensures proper sales practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Monthly Sales (VND)
                    </div>
                    <ChartColumn className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">12.4B</div>
                    <p className="text-xs text-muted-foreground">
                      +8.4% vs last month
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      New Policies
                    </div>
                    <FileCheck2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">286</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Conversion Rate
                    </div>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">18.7%</div>
                    <p className="text-xs text-muted-foreground">
                      +1.9% improvement
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Avg Response Time
                    </div>
                    <Timer className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">2m 14s</div>
                    <p className="text-xs text-muted-foreground">
                      Faster than target
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-red-600" />
                      <span>Sales Funnel</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Snapshot of lead-to-policy conversion stages
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Leads</span>
                        <span>3,420</span>
                      </div>
                      <ProgressBar value={76} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Consultations</span>
                        <span>1,980</span>
                      </div>
                      <ProgressBar value={58} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Quotes</span>
                        <span>912</span>
                      </div>
                      <ProgressBar value={42} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Policies</span>
                        <span>286</span>
                      </div>
                      <ProgressBar value={19} />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <span>Top Performing Agents</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Ranked by AI performance score (demo data)
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    {[
                      { name: "Nguyen Minh Anh", region: "HCMC", score: 96 },
                      { name: "Tran Quang Huy", region: "Hanoi", score: 93 },
                      { name: "Le Thao Vy", region: "Da Nang", score: 90 }
                    ].map((agent) => (
                      <div key={agent.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">{agent.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Region: {agent.region}
                            </p>
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-100 text-green-800">
                            {agent.score}%
                          </div>
                        </div>
                        <ProgressBar value={agent.score} />
                      </div>
                    ))}

                    <Link
                      href="/chat"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-transparent"
                    >
                      Ask PRUBot for coaching tips
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="quality" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Compliance Score
                    </div>
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">96%</div>
                    <p className="text-xs text-muted-foreground">
                      AI-reviewed sessions
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Audits Completed
                    </div>
                    <FileSearch className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">1,142</div>
                    <p className="text-xs text-muted-foreground">This quarter</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Requires Attention
                    </div>
                    <TriangleAlert className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">23</div>
                    <p className="text-xs text-muted-foreground">
                      Flagged by AI rules
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                      <CircleCheckBig className="h-5 w-5 text-green-600" />
                      <span>AI Quality Checklist</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Best-practice checks for counseling sessions (demo)
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-3">
                    {[
                      "Customer needs clearly identified",
                      "Benefits and exclusions explained",
                      "Premium affordability confirmed",
                      "Consent and understanding verified",
                      "Documents uploaded and complete"
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <CircleCheckBig className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                    <Link
                      href="/chat"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    >
                      Review checklist with PRUBot
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-red-600" />
                      <span>Recent Session Reviews</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Latest outcomes from AI evaluation (demo)
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Session #QA2024-018</p>
                        <p className="text-xs text-gray-600">
                          Verified understanding + disclosures
                        </p>
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-100 text-green-800">
                        Approved
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Session #QA2024-021</p>
                        <p className="text-xs text-gray-600">
                          Missing exclusion clarification
                        </p>
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-yellow-100 text-yellow-800">
                        Follow-up
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Session #QA2024-024</p>
                        <p className="text-xs text-gray-600">
                          Potential mismatch in needs assessment
                        </p>
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-red-100 text-red-800">
                        Review
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="training" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Courses Completed
                    </div>
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">18</div>
                    <p className="text-xs text-muted-foreground">Last 90 days</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Ongoing Modules
                    </div>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">
                      In progress now
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="tracking-tight text-sm font-medium">
                      Training Score
                    </div>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">85%</div>
                    <p className="text-xs text-muted-foreground">
                      AI-evaluated quizzes
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-red-600" />
                      <span>Recommended Modules</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Suggested next lessons based on AI insights (demo)
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-3">
                    {[
                      { title: "Needs Assessment Mastery", minutes: 35 },
                      { title: "Explain Benefits & Exclusions", minutes: 25 },
                      { title: "Ethical Selling & Compliance", minutes: 30 }
                    ].map((m) => (
                      <div
                        key={m.title}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-sm">{m.title}</p>
                          <p className="text-xs text-gray-600">
                            Estimated: {m.minutes} minutes
                          </p>
                        </div>
                        <Link
                          href="/chat"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 bg-transparent"
                        >
                          Start
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span>Weekly Progress</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Training completion trend (demo)
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    {[
                      { label: "Product Knowledge", value: 78 },
                      { label: "Compliance", value: 92 },
                      { label: "Customer Communication", value: 85 }
                    ].map((row) => (
                      <div key={row.label} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{row.label}</span>
                          <span>{row.value}%</span>
                        </div>
                        <ProgressBar value={row.value} />
                      </div>
                    ))}

                    <Link
                      href="/chat"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    >
                      Get a personalized training plan
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <PrudentialFooter />
      </div>

      <V0Badge />
    </>
  );
}
