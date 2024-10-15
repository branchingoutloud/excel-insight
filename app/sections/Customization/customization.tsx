import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Customization() {
  return (
    <section className="max-w-2xl w-full mx-auto px-6 py-24">
      <h2 className="text-2xl font-spartan font-normal text-center mb-4">
        Get started with Excelinsight™ and add tailored customization
      </h2>
      <div className="text-lg flex flex-col justify-center items-center font-inter space-y-4">
        <Input
          className="rounded-3xl p-7"
          type="email"
          placeholder="Email address"
        />
        <Button className="w-full text-lg text-inter py-7 max-w-sm bg-purple-900 hover:bg-purple-800 text-white">
          Submit
        </Button>
      </div>
    </section>
  );
}
