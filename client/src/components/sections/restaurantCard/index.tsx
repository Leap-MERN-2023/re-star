"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Badge} from "@/components/ui/badge"
import { BiPhone } from "@/components/icons";
import { useRouter } from "next/router";
import {FaStar,
} from "@/components/icons";


export function RestaurantCard() {
    return (
      <div className="flex justify-center">
        <Card className="">
        <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              className="h-[200px] w-[350px] rounded-lg p-1"
            />
            <div className="">
          <CardHeader>
            <CardTitle className="text-md">Restaurant Name</CardTitle>
            <div className="text-sm">
                <Badge className="">
              4.8
              <span className="m-1">
                <FaStar />
              </span>cd
            </Badge>
              </div>
          </CardHeader>
          </div>
          <CardContent>
              <div className="flex flex-col justify-start items-center">
                <Label className="text-sm text-gray-400">Seoul Gudamj, Ulaanbaatar</Label>
                <Label className="text-sm text-green-500">$$$</Label>
              </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  export default RestaurantCard



