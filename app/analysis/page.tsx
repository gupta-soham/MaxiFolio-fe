"use client";

import { DetailedInsights } from "@/components/analysis/detailed-insights";
import { PortfolioMetrics } from "@/components/analysis/portfolio-metrics";
import { RiskAssessment } from "@/components/analysis/risk-assessment";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "2024-01", value: 4000 },
  { date: "2024-02", value: 3000 },
  { date: "2024-03", value: 5000 },
  { date: "2024-04", value: 2780 },
  { date: "2024-05", value: 1890 },
  { date: "2024-06", value: 2390 },
];

export default function AnalysisPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Portfolio Analysis</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Performance Over Time
              </h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#0500FF"
                      strokeWidth={2}
                      dot={{ fill: "#0500FF" }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PortfolioMetrics />
            <RiskAssessment />
          </div>
        </div>

        <div className="lg:col-span-1">
          <DetailedInsights />
        </div>
      </div>
    </div>
  );
}
