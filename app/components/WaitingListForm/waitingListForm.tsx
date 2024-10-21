"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { SendSvg } from "@/public";
import { waitlistFormSchema } from "@/utilities/commonInterface/zodSchema";
import { waitingListFormSubmit } from "@/utilities/helpers/formHelpers/formHelper";
import { useToast } from "@/hooks/use-toast";

const WaitingListForm = () => {
  const form = useForm<z.infer<typeof waitlistFormSchema>>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
      type: "CTA",
    },
  });

  const { control } = form;
  const { isDirty, errors, isSubmitting, isSubmitted } = useFormState({
    control,
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
        console.log("Error while Submitting form 🤕");
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
        form.reset();
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div className="mx-auto flex max-w-xs flex-col gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    {...field}
                    required
                    className="flex-grow bg-white p-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center justify-center gap-1 bg-primary p-5 text-white hover:bg-primaryhover ${
              form.formState.isSubmitting
                ? "cursor-not-allowed bg-red-500"
                : "cursor-pointer"
            }`}
          >
            <p className="">Request a Demo</p>
            <Image
              src={SendSvg}
              alt="Send"
              className="ml-2 h-5 w-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:scale-110"
              height={8}
              width={8}
            />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default WaitingListForm;
