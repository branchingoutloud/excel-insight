import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearching } from "@/public";
import { randomUUID } from "crypto";
import Image from "next/image";
import React from "react";

const WhyExcelInsight = () => {
  const sections = [
    {
      title: "Boost Revenue",
      items: [
        "Allows finance teams to spend more time on revenue-generating analysis vs. manual data entry",
        "Enables more accurate sales forecasting and resource allocation",
        "Gives businesses a technological edge in financial management",
        "Enables faster response to market changes that could impact revenue",
      ],
    },
    {
      title: "Cut Costs",
      items: [
        "Minimizes costly errors in financial calculations and reporting",
        "Reduces risk of compliance-related fines or penalties that could impact revenue",
        "Displace reliance on expensive specialty legacy tools",
        "Democratizes data analysis across the organization, leading to more informed strategies",
      ],
    },
    {
      title: "Compliance Risk Mitigation with Improved Accuracy",
      items: [
        "Increases confidence in financial reporting, potentially improving investor relations",
        "Minimizes costly errors in financial calculations and reporting",
        "Improves the reliability of financial projections used for revenue planning",
        "Reduces time spent on error correction and reconciliation",
      ],
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-24 py-12">
      <div className="relative w-full max-w-4xl space-y-8 text-center">
        <h2 className="sticky top-[20px] text-center font-spartan text-3xl font-normal text-gray-800">
          WHY Excelinsight™ for Your Business
        </h2>
        <div className="relative flex w-full justify-center gap-2">
          <div className="flex w-full">
            <div className="z-30 mx-auto mt-12 flex min-h-screen w-full gap-6">
              <div className="w-[50%]">
                <Image
                  src={FileSearching}
                  alt="File Searching"
                  height={350}
                  width={350}
                  className="sticky top-24 w-full"
                />
              </div>
              <div className="w-[50%]">
                {sections.map((section, index) => (
                  <Card
                    key={section.title}
                    className={`sticky top-24 mx-5 mt-[${
                      index * 30
                    }px] mb-7 border-2 border-orange-400 shadow-lg shadow-orange-100 box-border flex flex-col p-4 w-full items-center justify-center rounded-2xl`}
                  >
                    <CardHeader>
                      <CardTitle className="text-left font-spartan text-3xl font-semibold text-purple-800">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-inter space-y-2 text-slate-600 text-lg">
                        {section.items.map((item) => (
                          <li key={randomUUID()} className="flex items-start">
                            <span className="mr-2 text-orange-500">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 z-0 h-[34rem] w-full bg-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExcelInsight;
