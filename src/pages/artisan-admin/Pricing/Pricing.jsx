import React from "react";
import { Header, Loading } from "../../../components";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useGetArtisanPricing } from "../../../services/queries";
import { FaTrashCan } from "react-icons/fa6";
import { useDeleteService } from "../../../services/mutation";
import { formatPriceInNaira } from "../../../lib/helpers";

// const pricing = [
//   {
//     id: 1,
//     service: "Bridal Make-Up",
//     price: "20,000",
//     description: "lorem ipsum",
//   },

//   {
//     id: 2,
//     service: "Birthday Make-Up",
//     price: "2,000",
//   },
//   {
//     id: 3,
//     service: "Natural Make-Up ",
//     price: "8,000",
//   },
//   {
//     id: 4,
//     service: "Fashion/Runaway Make-Up ",
//     price: "9,000",
//   },
//   {
//     id: 5,
//     service: "Cultural Make-Up",
//     price: "10,000",
//   },
//   {
//     id: 6,
//     service: "Prom Make-Up",
//     price: "7,000",
//   },
//   {
//     id: 7,
//     service: "Make-Up Lessons and Workshops",
//     price: "5,000",
//   },
//   {
//     id: 8,
//     service: "Bridal Make-Up",
//     price: "Duration Based",
//   },
// ];

const Pricing = () => {
  const { data, isLoading } = useGetArtisanPricing();

  const { mutate: submitDelete } = useDeleteService();

  const handleDelete = (id) => {
    submitDelete(id);
  };

  const pricingList = data?.data || [];
  console.log(pricingList);

  return (
    <div className="bg-white">
      <Header text="Services" />
      <main className="m-10 w-[90%] max-w-3xl mx-auto">
        <div className="flex flex-col gap-6">
          {pricingList.map((item) => {
            const { id, service_name, price, description } = item;
            return (
              <div
                key={id}
                className="flex flex-col gap-5 p-5 rounded-md border"
              >
                <div className="flex flex-col md:flex-row">
                  <h1 className="text-base font-semibold w-48">
                    Service Title
                  </h1>
                  <p className="max-w-xl flex-1">{service_name}</p>
                </div>

                <div className="flex flex-col md:flex-row">
                  <h1 className="text-base font-semibold w-48">
                    Service Description
                  </h1>
                  <p className="max-w-xl flex-1">{description}</p>
                </div>

                <div className="flex flex-col md:flex-row">
                  <h1 className="font-bold w-48">Service Price</h1>
                  <div className="text-base font-semibold col-span-1 flex gap-9 items-center cursor-pointer max-w-xl flex-1">
                    <span>{formatPriceInNaira(price)}</span>
                    <div className="flex gap-1">
                      <Link to={`/artisan/service/${id}`}>
                        <div
                          className="tooltip flex gap-2 items-center text-white bg-skyBlue900 rounded-md px-3 py-1"
                          data-tip="update this Service"
                        >
                          update
                          <CiEdit />
                        </div>
                      </Link>

                      <div
                        className="tooltip flex gap-2 items-center text-white bg-skyBlue900 rounded-md px-3 py-1"
                        data-tip="delete this Service"
                        onClick={() => handleDelete(id)}
                      >
                        <FaTrashCan />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex justify-center items-center w-full min-h-[50vh]">
              <Loading />
            </div>
          )}
        </div>

        <div className="my-8 pb-8 grid grid-cols-3">
          <Link
            to={"/artisan/create-a-service"}
            className="col-start-2 col-span-2 md:col-start-3 md:col-span-1  flex justify-end md:justify-start"
          >
            <button className="bg-skyBlue900 px-3 py-1 lg:px-3 lg:py-1 text-white text-base lg:text-lg font-medium rounded-md flex items-center justify-between gap-3">
              Create Service
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
