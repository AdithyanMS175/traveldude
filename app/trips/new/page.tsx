"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createTrip } from "@/lib/actions/create-trip";
import { cn } from "@/lib/utils";
import { create } from "domain";
import { useTransition } from "react";

export default function NewTrip() {

  const [ isPending,startTransition ] = useTransition();

  return (
    <div className="max-w-lg mx-auto mt-10">
      <Card>
        <CardHeader>New Trip</CardHeader>
        <CardContent>
          <form className="space-y-4" action={(formData: FormData)=> {
            createTrip(formData);
          }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {""}
                Title
              </label>
              <input
                type="text"
                name="text"
                placeholder="Japan trip..."
                className={cn(
                  "w-full border border-grey-300 px-3 py-2",
                  "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                )}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {""}
                Description
              </label>
              <textarea
                name="description"
                placeholder="Trip Description"
                className={cn(
                  "w-full border border-grey-300 px-3 py-2",
                  "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                )}
                required
              />
            </div>
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {""}
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  placeholder="Japan trip..."
                  className={cn(
                    "w-full border border-grey-300 px-3 py-2",
                    "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {""}
                  End Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  placeholder="Japan trip..."
                  className={cn(
                    "w-full border border-grey-300 px-3 py-2",
                    "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                />
              </div>
            </div>

            <Button type="submit" className="w-full">Create Trip</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
