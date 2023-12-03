import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }
  return res.json();
}

const Services = async () => {
  const data = await getData();

  return (
    <section className="overflow-hidden py-20">
      <div className="container">
        <h4 className="title-sm">Our all services</h4>
        <h2 className="section-title mb-20">
          We Provide Best Web design <br className="max-lg:hidden" /> services
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {data.map((item) => (
            <div
              key={item["id"]}
              className="bg-white rounded-xl overflow-hidden px-6 py-4 shadow-[0_4px_10px_#0000001a]"
            >
              <h2 className="text-[calc(1rem+0.2vw)] uppercase font-bold mb-4">
                {item["title"]}
              </h2>

              <p className="text-[#9D9D9D]">{item["des"]}</p>

              {/* images */}
              <div className="mt-10">
                <div className="max-[525px]:flex-col flex gap-3 mb-3">
                  <div className="max-[525px]:w-full w-2/3 ">
                    <Image
                      width={1000}
                      height={100}
                      className="h-52 object-cover object-top rounded-xl"
                      src={item["image1"]}
                      alt=""
                      priority
                    />
                  </div>

                  <div className="max-[525px]:w-full w-1/3">
                    <Image
                      width={1000}
                      height={100}
                      className="h-52 object-cover rounded-xl"
                      src={item["image2"]}
                      alt=""
                      priority
                    />
                  </div>
                </div>

                <div className="max-[525px]:flex-col flex gap-3">
                  <div className="max-[525px]:w-full w-1/3">
                    <Image
                      width={1000}
                      height={100}
                      className="w-full h-[18rem] bg-center object-cover rounded-xl"
                      src={item["image3"]}
                      alt=""
                      priority
                    />
                  </div>

                  <div className="max-[525px]:w-full w-2/3">
                    <Image
                      width={1000}
                      height={100}
                      className="w-full h-[18rem] bg-center object-cover rounded-xl"
                      src={item["image4"]}
                      alt=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
