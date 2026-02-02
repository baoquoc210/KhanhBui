"use client";

import Image from "next/image";
import Link from "next/link";
import { Bot, MessageCircle, Send, Sparkles } from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

import { V0Badge } from "@/components/v0-badge";
import { PrudentialFooter } from "@/components/prudential-footer";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
  time: string;
};

function nowTime() {
  const d = new Date();
  return d.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });
}

export default function ChatPage() {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const shouldAutoScrollRef = useRef(true);
  const appliedPrefillRef = useRef<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "m1",
      role: "bot",
      text: "Hello! I'm PRUBot, your AI-powered insurance advisor. I'm here to help you find the perfect insurance package based on your needs. How can I assist you today?",
      time: nowTime()
    }
  ]);
  const [draft, setDraft] = useState("");

  const quickReplies = useMemo(
    () => [
      "I need life insurance recommendations",
      "What's the best health insurance for me?",
      "Compare insurance packages",
      "Help me file a claim"
    ],
    []
  );

  function isNearBottom() {
    const el = scrollAreaRef.current;
    if (!el) return true;
    const remaining = el.scrollHeight - el.scrollTop - el.clientHeight;
    return remaining < 80;
  }

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    shouldAutoScrollRef.current = isNearBottom();
    setMessages((prev) => {
      const userMessage: ChatMessage = {
        id: `m${prev.length + 1}`,
        role: "user",
        text: trimmed,
        time: nowTime()
      };

      const botMessage: ChatMessage = {
        id: `m${prev.length + 2}`,
        role: "bot",
        text: "This is still underconstruction,....",
        time: nowTime()
      };

      return [...prev, userMessage, botMessage];
    });
    setDraft("");
  }, []);

  useEffect(() => {
    const trimmed = new URLSearchParams(window.location.search)
      .get("prefill")
      ?.trim();
    if (!trimmed) return;
    if (appliedPrefillRef.current === trimmed) return;
    appliedPrefillRef.current = trimmed;
    sendMessage(trimmed);
  }, [sendMessage]);

  useLayoutEffect(() => {
    const el = scrollAreaRef.current;
    if (!el) return;
    if (!shouldAutoScrollRef.current) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
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

            <div className="flex items-center space-x-4">
              <div className="hidden sm:inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-100 text-green-800">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                PRUBot Online
              </div>
              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-10 px-3 sm:px-4 py-2 border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                href="/packages"
              >
                <span className="sm:hidden">Packages</span>
                <span className="hidden sm:inline">View Packages</span>
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Image
                src="/images/prudential-logo.png"
                alt="Prudential Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h1 className="text-3xl font-bold text-gray-900">
                Chat with PRUBot
              </h1>
              <Sparkles className="h-6 w-6 text-yellow-500" />
            </div>
            <p className="text-gray-600">
              Your AI-powered insurance advisor with NLP and ML capabilities
            </p>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-[70vh] md:h-[600px] flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 bg-red-50 border-b">
              <div className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-red-600" />
                <span>24/7 AI Insurance Advisory</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col p-0 min-h-0">
              <div
                ref={scrollAreaRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 overscroll-contain"
                onScroll={() => {
                  shouldAutoScrollRef.current = isNearBottom();
                }}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={msg.role === "bot" ? "flex justify-start" : "flex justify-end"}
                  >
                    <div
                      className={
                        msg.role === "bot"
                          ? "flex items-start space-x-3 max-w-[80%] "
                          : "flex items-start space-x-3 max-w-[80%] flex-row-reverse space-x-reverse"
                      }
                    >
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                        <span
                          className={
                            msg.role === "bot"
                              ? "flex h-full w-full items-center justify-center rounded-full bg-red-100 text-red-600"
                              : "flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-700"
                          }
                        >
                          {msg.role === "bot" ? (
                            <Bot className="h-4 w-4" />
                          ) : (
                            <span className="text-xs font-semibold">You</span>
                          )}
                        </span>
                      </span>
                      <div
                        className={
                          msg.role === "bot"
                            ? "rounded-lg p-3 bg-white border shadow-sm break-words"
                            : "rounded-lg p-3 bg-red-600 text-white border shadow-sm break-words"
                        }
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p
                          className={
                            msg.role === "bot"
                              ? "text-xs mt-1 text-gray-500"
                              : "text-xs mt-1 text-white/80"
                          }
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickReplies.map((qr) => (
                    <button
                      key={qr}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs"
                      onClick={() => sendMessage(qr)}
                      type="button"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
                    placeholder="Ask me about insurance packages, claims, or get personalized recommendations..."
                    aria-label="Chat message"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") sendMessage(draft);
                    }}
                  />
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    aria-label="Send message"
                    disabled={!draft.trim()}
                    onClick={() => sendMessage(draft)}
                    type="button"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  PRUBot uses advanced NLP and ML to provide personalized
                  insurance advice
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-4">
              <Bot className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">AI-Powered Analysis</h3>
              <p className="text-sm text-gray-600">
                Advanced ML algorithms analyze your needs
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-4">
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7 Availability</h3>
              <p className="text-sm text-gray-600">
                Get instant responses anytime, anywhere
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-4">
              <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">
                Personalized Recommendations
              </h3>
              <p className="text-sm text-gray-600">
                Tailored suggestions based on your profile
              </p>
            </div>
          </div>
        </div>

        <PrudentialFooter />
      </div>

      <V0Badge />
    </>
  );
}
