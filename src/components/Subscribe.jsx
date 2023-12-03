import Button from "./utils/Button";

const Subscribe = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="container text-center">
        <h4 className="title-sm">Subscribe</h4>
        <h2 className="section-title capitalize mb-2">
          Subscribe to get the latest <br className="max-lg:hidden" /> news
          about us
        </h2>

        <p className="text-[#8B8B8B] capitalize text-lg mb-10">
          Please drop your email below to get daily update about what we do
        </p>

        {/* subscribe */}
        <div className="md:w-1/2 mx-auto">
          <div className="flex max-sm:flex-col max-sm:gap-4 items-center justify-between max-sm:border-0 border-2 border-slate-950 p-2 rounded-xl">
            <input
              type="email"
              className="outline-none rounded-lg max-sm:border-2 max-sm:border-[#F55F1D] w-full p-3"
              placeholder="Enter Your Email"
            />
            <Button className="border-[#F55F1D] bg-[#F55F1D] max-sm:w-full max-sm:justify-center">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
