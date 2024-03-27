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
import { Badge } from "@/components/ui/badge";
import { BiPhone } from "@/components/icons";
import { useRouter } from "next/router";
import { FaStar } from "@/components/icons";

import Checkbox from "@mui/material/Checkbox";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function RestaurantCard({ favorite }: any) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className=" flex justify-center items-center ">
      <Card className="">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          className="h-[200px] w-[380px] rounded-lg p-1"
        />
          <CardHeader>
            <div className="grid grid-cols-2">
            <CardTitle className="text-xl">{}Restaurant Name</CardTitle>
            <div className="text-sm flex justify-end">
              <Badge className="bg-green-500">
                4.8
                <span className="m-1">
                  <FaStar />
                </span>
              </Badge>
              </div>
            </div>
          </CardHeader>
        <CardContent>
          <div className="flex flex-cols-2 justify-center items-center gap-2">
            <Label className="text-sm text-gray-400">
              Seoul Gudamj, Ulaanbaatar
            </Label>
            <Label className="text-sm text-green-500 ">$$$</Label>
                 <div className="flex justify-end ml-6"><Checkbox
                    {...label}
                    icon={<FaRegHeart className="text-red-500 w-6 h-6 " />}
                    checkedIcon={<FaHeart className="text-red-500 w-6 h-6" />}
                  />
                  </div>
                </div>
        </CardContent>
      </Card>
    </div>

  );
}
export default RestaurantCard;
