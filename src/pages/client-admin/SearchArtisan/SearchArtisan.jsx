import { ClientHeader, Loading } from "../../../components";
import Artisan from "./components/Artisan";
import SpotlightArtisan from "./components/SpotlightArtisan";
import SearchForm from "./components/SearchForm";
import { useEffect, useState } from "react";
import { locationOptions, skillsOption } from "../../../lib/constants";
import { useSearchArtisan } from "../../../services/queries";

const SearchArtisan = () => {
  const [artisans, setArtisans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <ClientHeader text="Find Skill" />

      <section className="bg-white">
        <SpotlightArtisan />
        <SearchForm setArtisans={setArtisans} setIsLoading={setIsLoading} />
      </section>

      <section className="bg-white w-[100%] flex justify-center items-center pb-10">
        <section className="w-[96%]">
          <div className="flex justify-center items-center mt-[3em] text-gray-800 text-2xl font-semibold ">
            <h1 className="text-2xl text-gray-700 font-bold">
              Recommended Artisans
            </h1>
          </div>
          <section className="flex justify-center items-center">
            <section className="w-[98%] min-w-[350px] grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {artisans?.map((artisan) => {
                return <Artisan key={artisan.id} {...artisan} />;
              })}
            </section>

            {isLoading && (
              <div className="flex justify-center items-center w-full min-h-[50vh]">
                <Loading />
              </div>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default SearchArtisan;
