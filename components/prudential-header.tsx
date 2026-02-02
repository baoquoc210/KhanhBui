import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

type ActiveNav = "packages" | "claims" | "agent-portal" | null;

function navLinkClass(active: boolean) {
  return active
    ? "text-red-600 font-medium"
    : "text-gray-600 hover:text-red-600";
}

export function PrudentialHeader({
  active,
  ctaHref = "/chat",
  ctaLabel = "Chat with PRUBot"
}: {
  active: ActiveNav;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const ctaShortLabel =
    ctaLabel === "Chat with PRUBot" ? "Chat" : ctaLabel;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link className="flex items-center space-x-3" href="/">
          <Image
            src="/images/prudential-logo.png"
            alt="Prudential Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-xl sm:text-2xl font-bold text-red-600">
            PRUDENTIAL
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link className={navLinkClass(active === "packages")} href="/packages">
            Insurance Packages
          </Link>
          <Link className={navLinkClass(active === "claims")} href="/claims">
            Claims
          </Link>
          <Link
            className={navLinkClass(active === "agent-portal")}
            href="/agent-portal"
          >
            Agent Portal
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-10 px-3 sm:px-4 py-2 border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
            href={ctaHref}
          >
            <span className="sm:hidden">{ctaShortLabel}</span>
            <span className="hidden sm:inline">{ctaLabel}</span>
          </Link>

          <details className="relative md:hidden">
            <summary className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-md border bg-white shadow-lg p-2 z-50">
              <Link
                className={
                  active === "packages"
                    ? "block rounded-md px-3 py-2 text-sm text-red-600 font-medium"
                    : "block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                }
                href="/packages"
              >
                Insurance Packages
              </Link>
              <Link
                className={
                  active === "claims"
                    ? "block rounded-md px-3 py-2 text-sm text-red-600 font-medium"
                    : "block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                }
                href="/claims"
              >
                Claims
              </Link>
              <Link
                className={
                  active === "agent-portal"
                    ? "block rounded-md px-3 py-2 text-sm text-red-600 font-medium"
                    : "block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                }
                href="/agent-portal"
              >
                Agent Portal
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
