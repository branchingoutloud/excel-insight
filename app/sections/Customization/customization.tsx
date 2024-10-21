import SupportForm from "@/app/components/SupportForm/supportForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

export default function Customization() {
  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-24">
      <h2 className="font-spartan mb-4 text-center text-2xl font-normal">
        Get started with Excelinsight™ and add tailored customization!
      </h2>
      <div className="font-inter flex flex-col items-center justify-center space-y-4 text-lg">
        <SupportForm />
      </div>
    </section>
  );
}
