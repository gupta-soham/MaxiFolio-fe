"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionDiv } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function AIRecommendations() {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute -top-2 -right-2 z-10">
        <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0500FF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0500FF]"></span>
        </span>
      </div>

      <Card className="p-6 border-2 border-[#0500FF] bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="h-6 w-6 text-[#0500FF]" />
          <h2 className="text-xl font-bold text-[#0500FF]">AI Insights</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-sm font-medium">
              Potential 100x Opportunity Detected!
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              AI has identified a promising token matching your investment
              criteria
            </p>
          </div>

          <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-sm font-medium">
              Portfolio Optimization Available
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Rebalancing suggestion could increase returns by 15%
            </p>
          </div>

          <Button asChild className="w-full bg-[#0500FF] hover:bg-[#0500FF]/90">
            <Link href="/analysis" className="flex items-center justify-center">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </MotionDiv>
  );
}
