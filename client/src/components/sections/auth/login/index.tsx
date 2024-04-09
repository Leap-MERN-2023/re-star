"use client";
import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import myAxios from "@/utils/myAxios";
import { Button } from "@/components/ui/button";
import { MdEmail, FaFacebook } from "@/components/icons";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { LoginSchema } from "@/schema";

import Swal from "sweetalert2";
import Image from "next/image";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = ({ email, password }: z.infer<typeof LoginSchema>) => {
    login({ email, password });
  };

  const login = async ({ email, password }: any) => {
    try {
      const {
        data: { token, user },
      } = await myAxios.post("/auth/login", {
        userEmail: email,
        userPassword: password,
      });

      await Swal.fire({
        position: "center",
        title: "Log in successfully ",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      router.push("/");
    } catch (error: any) {
      toast.error(` Error ${(error?.response?.data?.message as string) || ""}`);
    }
  };

  return (
    <div className=" bg-no-repeat md:flex  justify-center items-center md:gap-40 bg-secondary ">
      {/* <div> */}
      {/* <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/434153217_788234183216519_7255311917734673479_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B9c5dwTAMb0Ab7KIWKk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdUW2eNmHd6opBye3rdwZybNn4OEBfbemcJL4Qzikf5OBw&oe=6636DFAE"
          alt="pic"
        /> */}
      <Image
        alt="Mountains"
        src="/images/mainback.png"
        // placeholder="blur"
        quality={100}
        width={1000}
        height={1000}
        style={{
          objectFit: "cover",
          height: "900px",
          width: "1900px",
        }}
      />
      {/* </div> */}
      <div className="md:w-[500px] md:p-14 rounded-2xl bg-[#fbfbfb] flex flex-col gap-5 sm:w-full absolute">
        <p className="text-3xl self-center  font-serif">LOG IN</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              {loading ? "Loading..." : "Log in"}
            </Button>
          </form>
        </Form>
        <div>
          <Link href={"/resetPass"} className="p-0 m-0 hover:text-gray-600">
            Forgot password
          </Link>
        </div>
        <p className="self-center">or</p>
        <div className="flex justify-around">
          <Button variant={"outline"} size={"icon"}>
            <MdEmail />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <FaFacebook />
          </Button>
        </div>
      </div>
    </div>
  );
};
