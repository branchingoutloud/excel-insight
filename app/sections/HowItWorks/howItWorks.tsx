import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraphSvg } from "@/public";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Seamless Data Merging",
      description:
        "Automates data consolidation, reducing errors and discrepancies.",
      color: "bg-pink-500",
    },
    {
      number: 2,
      title: "Contextual Data Enrichment",
      description:
        "Integrates support documents for deeper insights and validation.",
      color: "bg-orange-500",
    },
    {
      number: 3,
      title: "AI-Powered Data Cleaning",
      description:
        "Detect and correct inconsistencies, duplicates, and errors, ensuring high-quality data. Keeps track of changes and updates the original files.",
      color: "bg-green-500",
    },
    {
      number: 4,
      title: "Generative AI Capabilities",
      description:
        "Utilize AI to automate processes, generate and enhance reporting and insights.",
      color: "bg-blue-500",
    },
    {
      number: 5,
      title: "Conversational AI Interface",
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
          className="z-0 h-full w-full"
        />
      </div>
      <div className="w-full max-w-4xl space-y-8 text-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-center font-spartan text-3xl font-normal text-gray-800">
            Welcome to Excelinsight™, the intelligent platform designed to
            automate data consolidation, streamline compliance, and unlock
            deeper financial insights—all
          </h2>
          <p className="mx-auto max-w-4xl text-center font-inter text-lg text-gray-600">
            Plus, Excelinsight™ can be configured to your needs—whether
            it&apos;s predicting property prices using market sentiment,
            forecasting trends, generating business insights, or creating visual
            dashboards. It&apos;s a versatile tool built for real estate,
            finance, and compliance teams.
          </p>
        </div>
      </div>
      <div className="z-30">
        <Card className="w-full bg-purple-900 p-4 text-white">
          <CardHeader>
            <CardTitle className="mb-7 text-center font-spartan text-3xl font-normal">
              How it works
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 grid-cols-6">
            {steps.map((step, index) => {
              return (
                <div
                  key={step.number}
                  className="flex items-start gap-2 space-y-3"
                >
                  <div
                    className={`${step.color} w-8 h-8 rounded-full flex items-center justify-center text-black font-bold`}
                  >
                    {step.number}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-spartan text-2xl font-light">
                      {step.title}
                    </h3>
                    <p className="font-inter text-lg text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default HowItWorks;
