import CustomConfig from "./sections/CustomConfig/customConfig";
import Customization from "./sections/Customization/customization";
import Hero from "./sections/Hero/hero";
import HowItWorks from "./sections/HowItWorks/howItWorks";
import WhyExcelInsight from "./sections/WhyExcelInsight/whyExcelInsight";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HowItWorks />
      <WhyExcelInsight />
      <CustomConfig />
      <Customization />
    </div>
  );
}
