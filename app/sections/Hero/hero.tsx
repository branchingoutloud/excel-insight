"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Video from "next-video";
// import getStarted from "@/public/videos/get-started.mp4";
import Image from "next/image";
import { Flowchart, SendSvg } from "@/public";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import WaitingListForm from "@/app/components/WaitingListForm/waitingListForm";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <>
      <HeroHighlight>
        <section className="flex flex-col items-center justify-center pb-12 pt-20 md:min-h-screen">
          {/* Mobile View */}
          <div className="mx-auto w-full max-w-4xl space-y-8 text-center md:hidden">
            <div className="flex flex-col gap-2 md:gap-5">
              <h1 className="font-spartan text-3xl font-normal leading-normal text-gray-900 md:text-5xl">
                An Intelligent Data Insights & Insights Platform.
              </h1>
              <div className="font-inter flex flex-col gap-1">
                <p className="text-base font-semibold text-gray-600 md:text-xl">
                  Streamline Financial Insights
                </p>
                <p className="text-base text-gray-600 md:text-xl">
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
                  className="flex-grow bg-white p-5"
                />

                <Button
                  type="submit"
                  className="flex items-center justify-center gap-1 bg-primary p-5 text-white hover:bg-primaryhover"
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
          </div>

          {/* Desktop View */}
          <ContainerScroll
            titleComponent={
              <>
                <div className="mx-auto w-full max-w-4xl space-y-8 text-center">
                  <div className="flex flex-col gap-5">
                    <h1 className="font-spartan text-5xl font-normal leading-normal text-gray-900">
                      An Intelligent Data Insights & Insights Platform.
                    </h1>
                    <div className="font-inter flex flex-col gap-1">
                      <p className="text-xl font-semibold text-gray-600">
                        Streamline Financial Insights
                      </p>
                      <p className="text-xl text-gray-600">
                        Enhance financial predictions and decision-making
                        <br />
                        with AI-powered data processing.
                      </p>
                    </div>
                  </div>
                  <WaitingListForm />
                </div>
              </>
            }
          >
            <Image
              src={Flowchart}
              alt="hero"
              height={720}
              width={1400}
              className="object-fit mx-auto h-full rounded-2xl object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </section>
      </HeroHighlight>
    </>
  );
}
