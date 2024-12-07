"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionDiv } from "@/lib/utils";
import { AlertTriangle, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";

export function DetailedInsights() {
  const [showMore, setShowMore] = useState(false);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card className="p-6 border-2 border-[#0500FF] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="h-6 w-6 text-[#0500FF]" />
          <h2 className="text-xl font-bold text-[#0500FF]">
            AI-Powered Insights
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm">
            <TrendingUp className="h-5 w-5 text-[#0ab96d] mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Growth Opportunities</h3>
              <ul className="space-y-2 text-sm">
                <li>• Token XYZ shows strong potential for 10x growth</li>
                <li>• DeFi protocol ABC offering 25% APY</li>
                <li>• New NFT collection launch with whitelist spots</li>
                {showMore && (
                  <>
                    <li>• Emerging market trends in Layer 2 solutions</li>
                    <li>• Governance token accumulation strategy</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm">
            <AlertTriangle className="h-5 w-5 text-[#ff812c] mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Risk Analysis</h3>
              <ul className="space-y-2 text-sm">
                <li>• High exposure to volatile assets (45%)</li>
                <li>• Consider rebalancing to reduce risk</li>
                <li>• Set stop-loss orders for protection</li>
                {showMore && (
                  <>
                    <li>• Smart contract vulnerability assessment</li>
                    <li>• Impermanent loss risk in LP positions</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="w-full border-[#0500FF] text-[#0500FF] hover:bg-[#0500FF] hover:text-white transition-all duration-300"
          >
            {showMore ? "Show Less" : "Learn More"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </MotionDiv>
  );
}
