"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "Buy",
    asset: "ETH",
    amount: "1.5",
    price: "$2,450",
    date: "2024-03-15",
    status: "success",
  },
  {
    id: 2,
    type: "Sell",
    asset: "BTC",
    amount: "0.1",
    price: "$65,400",
    date: "2024-03-14",
    status: "success",
  },
];

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Transaction History</h1>

      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 neumorphic">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full neumorphic">
                    {tx.type === "Buy" ? (
                      <ArrowDownRight className="h-6 w-6 text-[#0ab96d]" />
                    ) : (
                      <ArrowUpRight className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {tx.type} {tx.asset}
                    </h3>
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {tx.amount} {tx.asset}
                  </p>
                  <p className="text-sm text-muted-foreground">{tx.price}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
