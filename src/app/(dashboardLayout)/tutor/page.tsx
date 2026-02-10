"use client";

import { Card } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="w-2/3 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card className="p-5 flex flex-col space-y-1">
          <h2 className="text-3xl font-bold text-black mb-0">22 - 54</h2>
          <h6 className="text-slate-700">Session</h6>
        </Card>
        <Card className="p-5 flex flex-col space-y-1">
          <h2 className="text-3xl font-bold text-black mb-0">sdf</h2>
          <h6 className="text-slate-700">Total Price</h6>
        </Card>
        <Card className="p-5 flex flex-col space-y-1">
          <h2 className="text-3xl font-bold text-black mb-0">3521465</h2>
          <h6 className="text-slate-700">Complete Session</h6>
        </Card>
      </div>
    </div>
  );
}
