"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Percent, Clock } from "lucide-react";

export function PortfolioMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
                <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="font-medium">ROI</span>
            </div>
            <span className="text-lg font-bold text-green-600 dark:text-green-400">
              +24.5%
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
                <Percent className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium">APY</span>
            </div>
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
              12.8%
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-full">
                <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="font-medium">Avg Hold Time</span>
            </div>
            <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
              45 days
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
