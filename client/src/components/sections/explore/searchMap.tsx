import React, { useState, useCallback, useContext } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IOrg } from "@/interface";
import { UserContext } from "@/context/UserProvider";
import { GiPerson } from "react-icons/gi";

interface IProps {
  mappedOrgByName: (searchName: string) => void;
  mapOrgs: IOrgProps[];
  userLocation: { lat: number; lng: number };
}

interface IOrgProps extends IOrg {
  lat: number;
  lng: string;
  location: string;
  description: string;
  openTime: string;
  closeTime: string;
}

const SearchMap = ({ mapOrgs, mappedOrgByName, userLocation }: IProps) => {
  const position1 = { lat: 47.915274773004924, lng: 106.91512983001671 };

  const [searchName, setSearchName] = useState("");

  const handleMappedOrg = useCallback(() => {
    mappedOrgByName(searchName);
  }, [mappedOrgByName]);

  console.log("userlocation", userLocation);

  return (
    <div className="w-[1000px] ">
      <div className="flex justify-center items-center gap-5">
        <Input
          placeholder="Search for restaurant, cuisine or dish"
          className="w-full h-[60px] text-[20px] placeholder:text-primary"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <Button onClick={handleMappedOrg} className="h-14">
          Search
        </Button>
      </div>
      <div className="mt-10 w-full">
        <APIProvider apiKey={"AIzaSyBT_7Q6oBgnkM-f_18dZBRvT1BeNA8TQkY"}>
          <div style={{ height: "100vh", width: "100%" }}>
            <Map
              defaultZoom={14}
              defaultCenter={position1}
              mapId="a0c7f1864bf16324"
            >
              {mapOrgs?.map((org, i) => (
                <React.Fragment key={i}>
                  <AdvancedMarker
                    position={{ lat: Number(org?.lat), lng: Number(org?.lng) }}
                    // position={{ lat: org.lat, lng: 106.901336 }}
                    title={org.name}
                  >
                    <Pin
                      background={"#FE0E0E"}
                      borderColor={"#B30808"}
                      glyphColor={"#9C0909"}
                    />
                  </AdvancedMarker>

                  <InfoWindow
                    position={{
                      lat: Number(org?.lat),
                      lng: Number(org?.lng),
                    }}
                    maxWidth={250}
                    minWidth={150}
                  >
                    <div className="h-[130px] w-[200px]">
                      <img
                        src={org.images.at(0)}
                        className="h-[80px] w-full object-cover"
                      />
                      <p className="text-black text-lg font-medium w-full">
                        {org.name}
                      </p>
                      {/* <p className="text-black">{org.location}</p> */}

                      <p className="text-black font-medium justify-end flex mt-2 gap-1">
                        <span className="text-[#FB1818] ">{org.openTime}</span>:
                        <span className="text-[#27a445] ">{org.closeTime}</span>
                      </p>
                    </div>
                  </InfoWindow>

                  <div className="text-bold">{org.name}</div>
                </React.Fragment>
              ))}
              <AdvancedMarker
                position={userLocation}
                className=" bg-transparent"
              >
                <GiPerson className="text-5xl text-orange-500 z-10" />
              </AdvancedMarker>
            </Map>
          </div>
        </APIProvider>
      </div>
    </div>
  );
};

export default SearchMap;
