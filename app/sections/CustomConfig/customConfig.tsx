import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowEdge1, ArrowEdge2, ArrowEdge3 } from "@/public";
import { BarChart3, Database, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function CustomConfig() {
  return (
    <section className="font-inter overflow-hidden bg-primary p-4 py-12 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col pb-7">
          <h2 className="font-spartan mb-2 text-center text-3xl font-normal sm:mb-4 md:text-4xl">
            Custom Insights - Configuration Option - Use Case:
          </h2>

          <p className="text-inter text-center text-base text-slate-300 md:text-lg">
            Predicting Real Estate Prices with Market Sentiment Analysis:
          </p>
          <p className="text-inter mb-4 text-center text-base text-slate-300 sm:mb-6 md:text-lg">
            A real estate firm was looking to improve the accuracy of their
            rental price predictions, which were based on internal company data.
            However, they found that relying solely on historical property data
            wasn't enough to capture the full picture of future pricing trends.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 text-lg sm:grid-cols-2 lg:grid-cols-3">
          <Card className="gap-0 bg-white text-primary shadow-2xl">
            <CardHeader className="flex flex-row gap-2 p-4">
              <Image src={ArrowEdge1} alt="arrow edge" height={48} width={48} />
              <CardTitle className="text-base sm:text-lg">
                Consolidated Internal Data Sources
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 text-base text-slate-500">
              <p>
                Excellisight™ seamlessly integrated various company data
                sources, including financial reports and property details, into
                a single platform for easier and faster analysis.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white text-primary shadow-2xl">
            <CardHeader className="flex flex-row gap-2 p-4">
              <Image src={ArrowEdge2} alt="arrow edge" height={48} width={48} />
              <CardTitle className="text-base sm:text-lg">
                Enhanced Predictions with Market Sentiment
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 text-base text-slate-500">
              <p>
                By analyzing real estate news and market sentiment data,
                Excellisight™ provided additional context to the internal data,
                offering insights into how external factors like public
                sentiment and news trends influenced pricing.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white text-primary shadow-2xl">
            <CardHeader className="flex flex-row gap-2 p-4">
              <Image src={ArrowEdge3} alt="arrow edge" height={48} width={48} />
              <CardTitle className="text-base sm:text-lg">
                Improved Forecasting & Prediction Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 text-base text-slate-500">
              <p>
                The AI-driven platform allowed the firm to combine both internal
                and external data, improving the accuracy of their rental price
                predictions and allowing them to make more informed, data-backed
                decisions.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-inter mt-7 text-center text-base sm:mt-6">
          This led to more precise pricing strategies, reduced risks, and
          boosted profitability, helping the firm to stay competitive in a
          rapidly changing market.
        </p>
      </div>
    </section>
  );
}
