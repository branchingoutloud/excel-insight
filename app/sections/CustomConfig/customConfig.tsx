import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, TrendingUp } from "lucide-react";

export default function CustomConfig() {
  return (
    <section className="bg-purple-800 text-white font-inter p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden ">
      <div className="mx-auto">
        <div className="flex flex-col">
          <h2 className="text-3xl text-center font-spartan font-normal mb-2 sm:mb-4">
            Custom Configuration Option - Use Case:
          </h2>

          <p className="text-lg text-slate-300 text-center">
            Predicting Real Estate Prices with Market Sentiment Analysis
          </p>
          <p className="text-lg text-slate-300 text-center mb-4 sm:mb-6">
            A real estate firm was looking to improve the accuracy of their
            rental price predictions, which were based on internal company data.
            However, they found that relying solely on historical property data
            wasn't enough to capture the full picture of future pricing trends.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-lg lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="bg-white text-purple-800 gap-0">
            <CardHeader className="flex p-4">
              <Database className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mb-2" />
              <CardTitle className="text-base sm:text-lg">
                Consolidated Internal Data Sources
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-base">
              <p>
                Excellisight™ seamlessly integrated various company data
                sources, including financial reports and property details, into
                a single platform for easier and faster analysis.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white text-purple-800">
            <CardHeader className="p-4">
              <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500 mb-2" />
              <CardTitle className="text-base sm:text-lg">
                Enhanced Predictions with Market Sentiment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-base">
              <p>
                By analyzing real estate news and market sentiment data,
                Excellisight™ provided additional context to the internal data,
                offering insights into how external factors like public
                sentiment and news trends influenced pricing.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white text-purple-800">
            <CardHeader className="p-4">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mb-2" />
              <CardTitle className="text-base sm:text-lg">
                Improved Forecasting & Prediction Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-base">
              <p>
                The AI-driven platform allowed the firm to combine both internal
                and external data, improving the accuracy of their rental price
                predictions and allowing them to make more informed, data-backed
                decisions.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-base text-inter mt-4 sm:mt-6">
          This led to more precise pricing strategies, reduced risks, and
          boosted profitability, helping the firm to stay competitive in a
          rapidly changing market.
        </p>
      </div>
    </section>
  );
}
