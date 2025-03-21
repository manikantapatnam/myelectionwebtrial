"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dynamic from 'next/dynamic';
import { useState } from "react";

const data = [
  { name: 'Party A', votes: 4000 },
  { name: 'Party B', votes: 3000 },
  { name: 'Party C', votes: 2000 },
  { name: 'Party D', votes: 2780 },
  { name: 'Party E', votes: 1890 },
];

const districts = [
  { id: 1, name: 'District 1', coordinates: [51.505, -0.09] as [number, number] },
  { id: 2, name: 'District 2', coordinates: [51.51, -0.1] as [number, number] },
  { id: 3, name: 'District 3', coordinates: [51.515, -0.095] as [number, number] },
];

// Dynamic import of MapContainer to avoid SSR issues with Leaflet
const Map = dynamic(
  () => import('@/components/Map'),
  { ssr: false }
);

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Election Results 2024</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="map">Electoral Map</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">National Results</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="votes" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((party) => (
              <Card key={party.name} className="p-6">
                <h3 className="text-xl font-semibold">{party.name}</h3>
                <p className="text-3xl font-bold mt-2">{party.votes.toLocaleString()}</p>
                <p className="text-muted-foreground">Total Votes</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="map">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Electoral Map</h2>
            <div className="h-[600px] w-full">
              <Map districts={districts} />
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}