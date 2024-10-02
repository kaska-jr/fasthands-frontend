import React from "react";
import { Header, Loading } from "../../../components";
import { useGetArtisanBookings } from "../../../services/queries";
import { convertToNormalTime } from "../../../lib/helpers";

const Bookings = () => {
  const { data, isLoading } = useGetArtisanBookings();

  const tableHeader = [
    "S/N",
    "Job No",
    "Client Name",
    "Service Name",
    "EDD",
    "Time",
    "Job Status",
    "Date Created",
  ];

  return (
    <div className="bg-white">
      <Header text="My Bookings" />
      <main className="flex flex-col  min-h-[100vh] gap-10 border">
        <section className="w-[90%] m-10 mx-auto overflow-x-auto">
          <div>
            <div className="mt-4">
              <table className=" text-left table-auto mb-10 border">
                <thead className="table-header">
                  <tr className="text-nowrap">
                    {tableHeader.map((item, index) => {
                      return (
                        <th className="px-4 py-2 text-nowrap" key={index}>
                          {item}
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody className="text-nowrap fast-table ">
                  {data?.data.map((item, index) => {
                    return (
                      <tr key={item.id} className="text-nowrap">
                        <td className="px-4 py-2 ">{index + 1}</td>
                        <td className="px-4 py-2 ">{item.job_id}</td>
                        <td className="px-4 py-2 ">{item?.client}</td>
                        <td className="px-4 py-2 ">
                          {item?.service_name || "N/A"}
                        </td>
                        <td className="px-4 py-2 ">
                          {convertToNormalTime(item.booking_date).date}
                        </td>
                        <td className="px-4 py-2 ">
                          {convertToNormalTime(item.booking_date).time}
                        </td>
                        <td className="px-4 py-2 ">{item.status}</td>
                        <td className="px-4 py-2 ">
                          {convertToNormalTime(item.created_at).date}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {data?.data.length === 0 && <p>No Bookings</p>}
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center w-full">
          {isLoading && <Loading />}
        </div>
      </main>
    </div>
  );
};

export default Bookings;
