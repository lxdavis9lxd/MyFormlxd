import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export const Home = () => {
  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a description of the card.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}