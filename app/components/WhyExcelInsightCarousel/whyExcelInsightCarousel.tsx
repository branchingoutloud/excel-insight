"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { randomUUID } from "crypto";

const WhyExcelInsightCarousel = () => {
  const sections = [
    {
      id: 1,
      title: "Boost Revenue",
      items: [
        "Allows finance teams to spend more time on revenue-generating analysis vs. manual data entry",
        "Enables more accurate sales forecasting and resource allocation",
        "Gives businesses a technological edge in financial management",
        "Enables faster response to market changes that could impact revenue",
      ],
    },
    {
      id: 2,
      title: "Cut Costs",
      items: [
        "Minimizes costly errors in financial calculations and reporting",
        "Reduces risk of compliance-related fines or penalties that could impact revenue",
        "Displace reliance on expensive specialty legacy tools",
        "Democratizes data analysis across the organization, leading to more informed strategies",
      ],
    },
    {
      id: 3,
      title: "Compliance Risk Mitigation with Improved Accuracy",
      items: [
        "Increases confidence in financial reporting, potentially improving investor relations",
        "Minimizes costly errors in financial calculations and reporting",
        "Improves the reliability of financial projections used for revenue planning",
        "Reduces time spent on error correction and reconciliation",
      ],
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {sections.map((section, index) => (
          <CarouselItem key={section.id}>
            <div className="p-1">
              <Card
                key={section.id}
                className={`sticky top-24 mt-[${
                  index * 30
                }px] mb-7 border-2 border-orange-400 shadow-lg shadow-orange-100 box-border flex flex-col p-4 w-[90%] mx-auto md:w-full items-center justify-center rounded-2xl`}
              >
                <CardHeader>
                  <CardTitle className="font-spartan text-left text-xl font-semibold text-primary md:text-3xl">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-inter space-y-2 text-base text-slate-600 md:text-lg">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start text-start">
                        <span className="mr-2 text-orange-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-0 right-1/2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default WhyExcelInsightCarousel;
