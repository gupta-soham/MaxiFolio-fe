"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertTriangle, Shield, TrendingDown } from "lucide-react";

export function RiskAssessment() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Risk Assessment</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
                <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="font-medium">Security Score</span>
            </div>
            <span className="text-lg font-bold text-green-600 dark:text-green-400">
              85/100
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-800 rounded-full">
                <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              </div>
              <span className="font-medium">Risk Level</span>
            </div>
            <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
              Moderate
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
                <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
              </div>
              <span className="font-medium">Volatility</span>
            </div>
            <span className="text-lg font-bold text-red-600 dark:text-red-400">
              High
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
