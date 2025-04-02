import { Progress } from "@/components/ui/progress";
import React, { Suspense } from "react";

const CTASection = React.lazy(() => import("@/components/CTASection"));
const FeedbackCarousel = React.lazy(
  () => import("@/components/FeedbackCarousel")
);
const HeroSection = React.lazy(() => import("@/components/home/HeroSection"));
const HowWeDoSection = React.lazy(() => import("@/components/HowWeDoSection"));
const SelectedProjectsSection = React.lazy(
  () => import("@/components/SelectedProjectsSection")
);
const WhatWeDoSection = React.lazy(
  () => import("@/components/WhatWeDoSection")
);
const FAQSection = React.lazy(() => import("./components/FAQSection"));

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
