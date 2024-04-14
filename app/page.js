"use client";
import Login from "@/components/Login";
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  return (
    <ThemeProvider>
      <main
        className="flex justify-center mt-10
      "
      >
        <Login />
      </main>
    </ThemeProvider>
  );
}
