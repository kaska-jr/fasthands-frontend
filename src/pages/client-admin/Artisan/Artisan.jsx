import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetArtisanProfileById } from "../../../services/queries";
import { ClientHeader } from "../../../components";
import { PhoneCallIcon } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import Service from "./components/Service";
import { Badge, Button } from "@radix-ui/themes";

const Artisan = () => {
  const params = useParams();
  const artisanId = params.artisanID;
  const { data } = useGetArtisanProfileById(artisanId);
  const artisan = data?.data;

  return (
    <section>
      <ClientHeader text="Artisan Profile" />
      <main className="flex flex-col  min-h-[100vh] gap-10">
        <section className="w-[90%]  m-10 mx-auto">
          <div className="flex items-center gap-4 py-4 rounded-md border p-4 mb-4">
            <img
              src="/mechanic.png"
              alt=""
              className="rounded-full  h-28 w-28 md:h-40 md:w-40 object-cover"
            />
            <div className="flex-1 flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl capitalize">{artisan?.username}</h1>
                <h1 className="capitalize flex items-center gap-2">
                  <CiLocationOn /> {artisan?.location?.name || "unknown"}
                </h1>
                <h1>
                  {artisan?.is_available ? (
                    <Badge color="green">Available </Badge>
                  ) : (
                    <Badge color="red">Not Available </Badge>
                  )}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-[#3498db]">
                  <PhoneCallIcon className="w-5 h-5" />
                </Button>

                <div className="hover:stroke-white cursor-pointer stroke-[#3498db] border border-skyBlue900 bg-white hover:bg-skyBlue900 hover:text-white w-fit px-3 rounded-md h-8 flex justify-center items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6H14M6 10H12M10.5 17.5L10 18L7 15H4C3.20435 15 2.44129 14.6839 1.87868 14.1213C1.31607 13.5587 1 12.7956 1 12V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H16C16.7956 1 17.5587 1.31607 18.1213 1.87868C18.6839 2.44129 19 3.20435 19 4V9.5M14 16H20M17 13V19"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* BIO */}
          <div className="border  rounded-md my-4">
            <h1 className="text-xl p-2 ">Bio</h1>
            <div className="flex items-center flex-wrap gap-2  border-t p-3 h-fit">
              <p>{artisan?.bio}</p>
              {!artisan?.bio && (
                <div className=" px-1 py-1 text-sm flex items-center justify-center gap-1 w-full">
                  <span className="capitalize px-2">No Bio Updated</span>
                </div>
              )}
            </div>
          </div>

          {/* SKILLS LIST */}
          <div className="border  rounded-md">
            <h1 className="text-xl p-2 ">Skills</h1>
            <div className="flex items-center gap-2  border-t p-3 h-fit">
              {artisan?.skills?.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-full bg-[#F5F5F5] px-1 py-1 border border-skyBlue900 w-fit text-sm flex items-center gap-1 "
                >
                  <p className="capitalize px-2">{skill}</p>
                </div>
              ))}

              {artisan?.skills?.length === 0 && (
                <div className=" px-1 py-1 text-sm flex items-center justify-center gap-1 w-full">
                  <span className="capitalize px-2">No skills Updated</span>
                </div>
              )}
            </div>
          </div>

          <div className="border  rounded-md my-4">
            <h1 className="text-xl p-2 ">Services</h1>
            <div className="border-t grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10 w-full p-4">
              {artisan?.services &&
                artisan?.services.map((service, index) => (
                  <Service
                    key={service.id}
                    service={service}
                    artisanId={artisanId}
                  />
                ))}
            </div>
            {artisan?.services?.length === 0 && (
              <div className=" px-1 py-1 text-sm flex items-center justify-center gap-1 w-full">
                <span className="capitalize px-2">No Service Added</span>
              </div>
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default Artisan;
