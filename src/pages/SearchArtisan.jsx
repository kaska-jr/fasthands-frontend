import { SpotlightArtisan, SearchForm, Artisan } from "./../components";

const SearchArtisan = () => {
  return (
    <div className="bg-blue-300">
      <section className="bg-white">
        <SpotlightArtisan />
        <SearchForm />
      </section>

      <section className="bg-white w-[100%] flex justify-center items-center pb-10">
        <section className="w-[96%]">
          <div className="flex justify-center items-center mt-[3em] text-gray-800 text-2xl font-semibold ">
            <h1 className="text-2xl text-gray-700 font-bold">
              Recommended Artisans
            </h1>
          </div>
          <section className="flex justify-center items-center">
            <section className="w-[98%] min-w-[350px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
              {[1, 2, 3, 6, 4].map((_, i) => {
                return <Artisan key={i} id={i} />;
              })}
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default SearchArtisan;
