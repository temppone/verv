import { Progress } from "@/components/ui/progress";
import React, { lazy, Suspense } from "react";

const CTASection = lazy(() => import("@/components/CTASection"));
const FeedbackCarousel = lazy(() => import("@/components/FeedbackCarousel"));
const HeroSection = lazy(() => import("@/components/home/HeroSection"));
const HowWeDoSection = lazy(() => import("@/components/HowWeDoSection"));
const SelectedProjectsSection = lazy(
  () => import("@/components/SelectedProjectsSection")
);
const WhatWeDoSection = lazy(() => import("@/components/WhatWeDoSection"));
const FAQSection = lazy(() => import("./components/FAQSection"));

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[50vh]">
            <div
              className="animate-spin w-10 h-10 rounded-full border-4 border-primary border-t-transparent"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">
                <Progress />
              </span>
            </div>
          </div>
        }
      >
        <HeroSection />
        <SelectedProjectsSection />
        <FeedbackCarousel />
        <WhatWeDoSection />
        <HowWeDoSection />
        <FAQSection />
        <CTASection />
      </Suspense>
    </main>
  );
}
