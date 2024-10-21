import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraphSvg } from "@/public";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Seamless Data Merging:",
      description:
        "Automates data consolidation, reducing errors and discrepancies.",
      color: "bg-pink-500",
    },
    {
      number: 2,
      title: "Contextual Data Enrichment:",
      description:
        "Integrates support documents for deeper insights and validation.",
      color: "bg-orange-500",
    },
    {
      number: 3,
      title: "AI-Powered Data Cleaning:",
      description:
        "Detect and correct inconsistencies, duplicates, and errors, ensuring high-quality data. Keeps track of changes and updates the original files.",
      color: "bg-green-500",
    },
    {
      number: 4,
      title: "Generative AI Capabilities:",
      description: "Automates reporting and business insights processes",
      color: "bg-blue-500",
    },
    {
      number: 5,
      title: "Conversational AI Interface:",
      description:
        "Review and extract data points in a conversational way by asking questions about critical facts in your files.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center gap-24 py-12">
      <div className="absolute h-full w-full">
        <Image
          src={GraphSvg}
          height={240}
          width={240}
          alt="Graph"
          className="absolute right-10 top-5 z-0 h-2/3 w-2/3"
        />
      </div>
      <div className="w-full max-w-4xl space-y-8 text-center">
        <div className="flex flex-col gap-3">
          <h2 className="font-spartan text-center text-2xl font-normal text-gray-800 md:text-3xl">
            Welcome to Excelinsight™, the intelligent platform designed to
            automate data consolidation, streamline compliance, and unlock
            deeper financial insights — all powered by AI, driven by Human.
          </h2>
          <p className="font-inter mx-auto max-w-4xl text-center text-base text-gray-500 md:text-lg">
            Plus, Excelinsight™ can be configured to your needs—whether
            it&apos;s predicting property prices using market sentiment,
            forecasting trends, generating business insights, or creating visual
            dashboards. It&apos;s a versatile tool built for real estate,
            finance, and compliance teams.
          </p>
        </div>
      </div>
      <div className="z-30 flex w-full justify-center bg-primary">
        <div className="w-full max-w-6xl">
          {/* Small Screens */}
          <Card className="border-none bg-primary p-4 text-white shadow-none md:hidden">
            <CardHeader>
              <CardTitle className="font-spartan mb-7 text-center text-2xl font-normal md:text-4xl">
                How it works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                {steps.map((item) => (
                  <div key={item.number} className="flex">
                    <div className="flex gap-2">
                      <div className="h-full">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-400 text-lg text-orange-400">
                          {item.number}
                        </div>
                      </div>
                      <div className="flex h-full flex-col gap-2">
                        <h2 className="pr-7 text-xl">{item.title}</h2>
                        <p className="text-sm text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Medium Screens */}
          <Card className="hidden w-full border-none bg-primary p-4 text-white shadow-none md:block">
            <CardHeader>
              <CardTitle className="font-spartan mb-7 text-center text-4xl font-normal">
                How it works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 grid-rows-2 gap-6">
                {steps.map((item, index) => (
                  <div
                    key={item.number}
                    className={`col-span-2  ${
                      index <= 2
                        ? "row-start-1"
                        : index === 3
                        ? "row-start-2 col-start-2"
                        : "row-start-2"
                    } flex break-words`}
                  >
                    <div className="flex gap-2">
                      <div className="h-full">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-400 text-lg text-orange-400">
                          {item.number}
                        </div>
                      </div>
                      <div className="flex h-full flex-col gap-2">
                        <h2 className="pr-7 text-2xl">{item.title}</h2>
                        <p className="text-base text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
