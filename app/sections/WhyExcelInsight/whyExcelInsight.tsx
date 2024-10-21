import WhyExcelInsightCarousel from "@/app/components/WhyExcelInsightCarousel/whyExcelInsightCarousel";
import { FileSearching } from "@/public";
import Image from "next/image";
import React from "react";

const WhyExcelInsight = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-24 py-12">
      <div className="relative w-full max-w-4xl space-y-8 text-center">
        <h2 className="font-spartan top-[20px] text-center text-2xl font-normal text-gray-800 md:text-3xl">
          WHY Excelinsight™ for Your Business
        </h2>
        <div className="relative flex w-full justify-center gap-2">
          <div className="flex w-full">
            <div className="z-30 mx-auto mt-4 flex w-full gap-6 md:mt-12">
              <div className="hidden w-full md:block md:w-1/2">
                <Image
                  src={FileSearching}
                  alt="File Searching"
                  height={350}
                  width={350}
                  className="w-full"
                />
              </div>
              {/* <div className="w-full md:w-[50%]">
                {sections.map((section, index) => (
                  <Card
                    key={section.title}
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
              </div> */}
              <div className="w-full md:w-1/2">
                <WhyExcelInsightCarousel />
              </div>
            </div>
            {/* div to cover the heading on scroll */}
            {/* <div className="absolute bottom-0 z-0 h-[34rem] w-full bg-background"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExcelInsight;
