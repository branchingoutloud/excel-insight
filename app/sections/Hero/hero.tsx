"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Video from "next-video";
// import getStarted from "@/public/videos/get-started.mp4";
import Image from "next/image";
import { Flowchart, SendSvg } from "@/public";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo requested for:", email);
    setEmail("");
  };

  return (
    <section className="flex flex-col items-center justify-center pb-12">
      <div className="w-full max-w-4xl space-y-8 text-center">
        <div className="flex flex-col gap-3">
          <h1 className="font-spartan text-4xl font-normal text-gray-900">
            An Intelligent Data Consolidation & Insights Platform.
          </h1>
          <div className="flex flex-col gap-1 font-inter">
            <p className="text-xl text-gray-600">
              Streamline Financial Insights
            </p>
            <p className="text-lg text-gray-600">
              Enhance financial predictions and decision-making
              <br />
              with AI-powered data processing.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="mx-auto flex max-w-xs flex-col gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
              className="flex-grow bg-white"
            />
            <Button
              type="submit"
              className="flex items-center justify-center gap-1 bg-purple-900 text-white hover:bg-purple-800"
            >
              <p className="">Request a Demo</p>
              <Image
                src={SendSvg}
                alt="Send"
                className="ml-2 h-5 w-5"
                height={8}
                width={8}
              />
            </Button>
          </div>
        </form>

        {/* <div className="relative w-full flex justify-center items-center p-7 rounded-2xl border-8 border-purple-900 shadow-[0px_20px_50px_#718096] h-96">
          <Video
            src={getStarted}
            autoPlay
            controls={false}
            className="h-full w-full rounded-2xl"
          />
          
        </div> */}
      </div>
      <div className="w-full pt-12">
        <Image
          src={Flowchart}
          alt="flowchart"
          className="object-cover mx-auto rounded-2xl"
          height={400}
          width={800}
        />
      </div>
    </section>
  );
}
