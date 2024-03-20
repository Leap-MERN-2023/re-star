"use client";
import { Input } from "../ui/input";

import { Button } from "../ui/button";
import { BiEditAlt } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "@/components/ui/use-toast";
import { FormSchema } from "@/schema";
import { useState } from "react";
import { UserContext } from "@/context/UserProvider";
import { Label } from "../ui/label";

function ProfileSettings() {
  const { loggedUser } = useContext(UserContext);
  const [isClicked, setIsClicked] = useState({
    name: false,
    email: false,
    picture: false,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  return (
    <>
      <div title="Profile Settings" className="  flex justify-center  ">
        <div className="grid  md:grid-rows-1 gap-6 w-1/3 mt-10 border-spacing-2 bg- border border-purple-300 p-8 rounded-xl">
          <div className="flex justify-center ">
            <div>
              <Avatar className="md:w-52 md:h-52 self-center flex justify-center">
                <AvatarImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeHdW37yqnZFBs4Rrg4F38OJJr0Jlh53Bpw&usqp=CAU"
                  className="md:w-52 md:h-52"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="rounded-lg ">
                <Input id="picture" type="file" className="w-60" />
              </div>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <div className="flex">
                      <FormControl>
                        <Input
                          className="placeholder:text-black"
                          disabled={true}
                          placeholder={loggedUser?.name}
                          {...field}
                        />
                      </FormControl>
                      <BiEditAlt className="w-10 h-10" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <div className="flex">
                      <FormControl>
                        <Input
                          className="w-full placeholder:text-black"
                          disabled={true}
                          placeholder={loggedUser?.email}
                          {...field}
                        />
                      </FormControl>
                      <BiEditAlt className="w-10 h-10" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div className="flex">
                      <FormControl>
                        <Input
                          className="placeholder:text-black"
                          disabled={true}
                          placeholder="***********"
                          {...field}
                        />
                      </FormControl>
                      <Button>Change Password</Button>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ProfileSettings;
