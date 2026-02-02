import Image from "next/image";
import Link from "next/link";

export function PrudentialFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/prudential-logo.png"
                alt="Prudential Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-lg font-semibold">PRUDENTIAL</span>
            </div>
            <p className="text-gray-400">
              Leading the future of insurance with AI-powered solutions
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link className="hover:text-white" href="/packages">
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/packages">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/packages">
                  Investment Plans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link className="hover:text-white" href="/chat">
                  Chat with PRUBot
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/claims">
                  File a Claim
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link className="hover:text-white" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/agent-portal">
                  Agent Portal
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2024 PRUDENTIAL. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
