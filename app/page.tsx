import Image from "next/image";
import Link from "next/link";
import { Bot, Menu, MessageCircle, Smartphone, TrendingUp, Users } from "lucide-react";

import { PrudentialFooter } from "@/components/prudential-footer";
import { V0Badge } from "@/components/v0-badge";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/prudential-logo.png"
                alt="Prudential Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl sm:text-2xl font-bold text-red-600">
                PRUDENTIAL
              </span>
            </div>

            <nav className="hidden md:flex space-x-6">
              <Link className="text-gray-600 hover:text-red-600" href="/packages">
                Insurance Packages
              </Link>
              <Link className="text-gray-600 hover:text-red-600" href="/claims">
                Claims
              </Link>
              <Link
                className="text-gray-600 hover:text-red-600"
                href="/agent-portal"
              >
                Agent Portal
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700"
                href="/packages"
              >
                Get Started
              </Link>

              <details className="relative md:hidden">
                <summary className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </summary>
                <div className="absolute right-0 mt-2 w-56 rounded-md border bg-white shadow-lg p-2 z-50">
                  <Link
                    className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                    href="/packages"
                  >
                    Insurance Packages
                  </Link>
                  <Link
                    className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                    href="/claims"
                  >
                    Claims
                  </Link>
                  <Link
                    className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                    href="/agent-portal"
                  >
                    Agent Portal
                  </Link>
                </div>
              </details>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Insurance
            <span className="text-red-600 block">Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the perfect insurance package with our advanced AI
            recommendations, 24/7 support, and seamless digital experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md px-8 bg-red-600 hover:bg-red-700"
              href="/packages"
            >
              Find My Insurance
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
              href="/chat"
            >
              Chat with PRUBot
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our AI-Powered Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
              <div className="flex flex-col space-y-1.5 p-6">
                <Bot className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  PRUBot
                </div>
                <div className="text-sm text-muted-foreground">
                  NLP &amp; ML-powered advisor
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-600">
                  24/7 automated insurance advisory services with intelligent
                  text analysis
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
              <div className="flex flex-col space-y-1.5 p-6">
                <Smartphone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  PRUOnline
                </div>
                <div className="text-sm text-muted-foreground">
                  OCR technology powered
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-600">
                  Submit claims directly via smartphone with instant feedback
                  and real-time notifications
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="h-12 w-12 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/images/prudential-logo.png"
                    alt="Prudential Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  PruMall
                </div>
                <div className="text-sm text-muted-foreground">
                  ML-powered recommendations
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-600">
                  Personalized policy recommendations based on your unique
                  profile and needs
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
              <div className="flex flex-col space-y-1.5 p-6">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  PRUForce
                </div>
                <div className="text-sm text-muted-foreground">
                  Training application
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-600">
                  Advanced training courses and knowledge management for our
                  agency network
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                New Feature
              </div>
              <h2 className="text-3xl font-bold mb-4">
                AI-Powered Agent Monitoring
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Introducing our advanced M-Pro inspired system to monitor agent
                performance and ensure quality counseling services for all
                customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Enhanced Quality Assurance
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-red-600 mt-1" />
                    <span>Real-time agent performance monitoring and analytics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-red-600 mt-1" />
                    <span>AI-powered counseling service evaluation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-5 w-5 text-red-600 mt-1 flex items-center justify-center">
                      <Image
                        src="/images/prudential-logo.png"
                        alt="Prudential Logo"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <span>
                      Contract verification to ensure customer understanding
                    </span>
                  </li>
                </ul>

                <Link
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-6"
                  href="/agent-portal"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <Image
                  src="/images/prudential-175-years.jpg"
                  alt="Prudential is helping people to take pride in their lives for 175 years"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust our AI-powered
              insurance solutions
            </p>
            <Link
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8"
              href="/packages"
            >
              Start Your Journey
            </Link>
          </div>
        </section>

        <PrudentialFooter />
      </div>

      <V0Badge />
    </>
  );
}
