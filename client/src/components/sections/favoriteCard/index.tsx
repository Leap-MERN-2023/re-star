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
import { Badge } from "@/components/ui/badge";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { FaStar } from "@/components/icons";

import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesProvider";

export function FavoriteCard({ favorite }: any) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const router = useRouter();
  const { deleteFavorite } = useContext(FavoritesContext);
  return (
    <div className="flex flex-row justify-center items-center rounded-lg border-2 border-gray-200 w-[500px] h-[190px] m-10 hover:scale-105">
      <img
        src={favorite.images?.at(1)}
        className="h-[180px] w-[260px] border-white-200 rounded-lg p-2 object-cover"
      />
      <CardHeader>
        <div className="">
          <CardTitle
            className="text-xl"
            onClick={() => {
              router.push(`http://localhost:3000/details/${favorite._id}`);
            }}
          >
            {favorite.name}
          </CardTitle>
          <Badge className="bg-green-500">
            4.8
            <span className="m-1">
              <FaStar />
            </span>
          </Badge>
        </div>
        <Label className="text-sm text-gray-400">{favorite.address}</Label>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center ">
          <div className="flex">
            <Checkbox
              onClick={() => {
                deleteFavorite(favorite._id);
              }}
              {...label}
              icon={<FaRegHeart className="text-red-500 w-6 h-6 " />}
              checkedIcon={<FaHeart className="text-red-500 w-6 h-6" />}
              checked={true}
            />
          </div>
        </div>
      </CardContent>
    </div>
  );
}
export default FavoriteCard;
