"use client";

import React, { useContext, useEffect, useState } from "react";
import CategoryList from "./categoryList";
import myAxios from "@/utils/myAxios";

import SearchMap from "./searchMap";
import { RestaurantContext } from "@/context/RestaurantProvider";

const Explore = () => {
  const [mapOrgs, setMapOrgs] = useState<any>([]);

  const { org } = useContext(RestaurantContext);

  const mappedOrgByName = (name: string) => {
    const NameFilteredOrg = org.filter((res) =>
      res.name.toLowerCase().includes(name!.toLowerCase())
    );
    console.log("NameFilteredOrg", NameFilteredOrg);
    setMapOrgs(NameFilteredOrg);

    console.log("filtered", mapOrgs);
  };

  const mappedOrgByCategory = (category: string) => {
    const NameFilteredOrg = org.filter((res) => res.category === category);
    console.log("NameFilteredOrg", NameFilteredOrg);
    setMapOrgs(NameFilteredOrg);

    console.log("filtered", mapOrgs);
  };

  return (
    <div className="flex items-center gap-10">
      <CategoryList mappedOrgByCategory={mappedOrgByCategory} />
      <SearchMap mappedOrgByName={mappedOrgByName} mapOrgs={mapOrgs} />
    </div>
  );
};

export default Explore;
