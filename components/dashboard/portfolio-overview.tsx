"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, DollarSign } from "lucide-react";

export function PortfolioOverview() {
  // Mock data - replace with real data from your API
  const portfolioValue = 125432.67;
  const change24h = 5.67;
  const isPositive = change24h > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Total Portfolio Value</h2>

          <div className="flex items-baseline space-x-2">
            <DollarSign className="h-8 w-8 text-[#0500FF]" />
            <span className="text-3xl font-bold">
              {portfolioValue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {isPositive ? (
              <ArrowUpRight className="h-4 w-4 text-[#0ab96d]" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            )}
            <span
              className={`font-medium ${
                isPositive ? "text-[#0ab96d]" : "text-red-500"
              }`}
            >
              {Math.abs(change24h)}% (24h)
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
