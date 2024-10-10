import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  phonenumber: z.string().min(10).max(13),
  qualification: z.string(),
  message: z.string().min(10),
});

const SkillUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phonenumber: "",
      qualification: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    axios
      .post(`${import.meta.env.VITE_BACKEND}/submit`, values)
      .then((_) => {
        form.reset();
        toast({
          title: "Form Submitted",
          description: "Your form has been successfully submitted!",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting the form.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className="form shadow p-6">
      <h1 className="text-center text-3xl mt-5 font-semibold text-green-three">
        Let's Connect
      </h1>
      <p className="px-5 text-center text-lg text-black-100 my-4">
        Let's align our constellations! Reach out and let the magic of
        collaboration illuminate our skies.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Qualifications" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Graduated">Graduated</SelectItem>
                    <SelectItem value="Masters">Masters</SelectItem>
                    <SelectItem value="Diploma">Diploma</SelectItem>
                    <SelectItem value="N/A">Others+</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-tertiary to-50% to-green-three rounded-sm text-white font-semibold">
            {isLoading ? (
              <Loader />
            ) : (
              <div className="flex items-center gap-2">
                Get Free Career Evaluation{" "}
                <img src="/icons/rocket.svg" alt="icons" width={20} />
              </div>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SkillUpForm;
