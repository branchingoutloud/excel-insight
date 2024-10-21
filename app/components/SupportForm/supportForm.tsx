"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { Input } from "@/components/ui/input";
import { waitlistFormSchema } from "@/utilities/commonInterface/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { waitingListFormSubmit } from "@/utilities/helpers/formHelpers/formHelper";

const SupportForm = () => {
  const form = useForm<z.infer<typeof waitlistFormSchema>>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
      type: "FOOTER",
    },
  });
  const { toast } = useToast();

  const onSubmit = (values: z.infer<typeof waitlistFormSchema>) => {
    // Convert values to a plain object
    toast({
      title: "Submitting your request...",
    });
    const returnedResult = waitingListFormSubmit(
      JSON.parse(JSON.stringify(values))
    );

    returnedResult
      .then((result) => {
        toast({
          title: "You're added to Waitlist ✅",
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        console.log("Error in Submitting form 🤕");
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
        form.reset();
      });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center justify-center gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <FormControl>
                  <Input
                    className="w-full rounded-3xl p-7"
                    {...field}
                    required
                    type="email"
                    placeholder="Email address"
                  />
                </FormControl>
                <SendHorizontal className="absolute right-5 top-3 text-slate-400" />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="text-inter flex w-full max-w-sm items-center justify-center gap-1 rounded-full bg-primary py-5 text-white hover:bg-primaryhover"
          >
            <p className="">Submit</p>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SupportForm;
