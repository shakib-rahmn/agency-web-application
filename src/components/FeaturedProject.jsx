import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("Failed to fetch featured project");
  }
  return res.json();
}

const FeaturedProject = async () => {
  const data = await getData();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateString = data[0]["created_at"];
  const parsedDate = new Date(dateString);
  const month = parsedDate.getMonth();
  const monthName = months[month];
  const date = parsedDate.getDate();
  const year = parsedDate.getFullYear();

  return (
    <section className="overflow-hidden bg-[#F0FDF4] py-20">
      <div className="container">
        <h4 className="title-sm">Featured Project</h4>
        <h2 className="section-title mb-20">
          We provide the Perfect Solution <br className="max-lg:hidden" /> to
          your business growth
        </h2>

        {/* row */}
        <div className="grid xl:grid-cols-2 gap-10 items-center">
          {/* large image */}
          <div className="">
            <a href={data[1]["live"]} target="_blank">
              <div>
                <Image
                  alt=""
                  src={data[1]["image"]}
                  width={1000}
                  height={100}
                  className="object-cover rounded-xl xl:min-h-[550px]"
                />
              </div>

              <p className="capitalize mt-4 mb-2 text-sm font-medium text-[#2E3E5C]">{`${data[1]["remark"]} - ${monthName} ${date}, ${year}`}</p>

              <h2 className="font-bold">{data[1]["title"]}</h2>
            </a>
          </div>

          {/* small images */}
          <div className="grid sm:grid-cols-2 gap-5">
            <a href={data[1]["live"]} target="_blank">
              <div>
                <Image
                  src={data[1]["image"]}
                  width={1000}
                  height={100}
                  className="rounded-xl"
                  alt=""
                />
              </div>

              <p className="capitalize mt-4 mb-2 text-sm font-medium text-[#2E3E5C]">{`${data[1]["remark"]} - ${monthName} ${date}, ${year}`}</p>

              <h2 className="font-bold">{data[1]["title"]}</h2>
            </a>

            <a href={data[1]["live"]} target="_blank">
              <div>
                <Image
                  src={data[1]["image"]}
                  width={1000}
                  height={100}
                  className="rounded-xl"
                  alt=""
                />
              </div>

              <p className="capitalize mt-4 mb-2 text-sm font-medium text-[#2E3E5C]">{`${data[1]["remark"]} - ${monthName} ${date}, ${year}`}</p>

              <h2 className="font-bold">{data[1]["title"]}</h2>
            </a>

            <a href={data[1]["live"]} target="_blank">
              <div>
                <Image
                  src={data[1]["image"]}
                  width={1000}
                  height={100}
                  className="rounded-xl"
                  alt=""
                />
              </div>

              <p className="capitalize mt-4 mb-2 text-sm font-medium text-[#2E3E5C]">{`${data[1]["remark"]} - ${monthName} ${date}, ${year}`}</p>

              <h2 className="font-bold">{data[1]["title"]}</h2>
            </a>

            <a href={data[1]["live"]} target="_blank">
              <div>
                <Image
                  src={data[1]["image"]}
                  width={1000}
                  height={100}
                  className="rounded-xl"
                  alt=""
                />
              </div>

              <p className="capitalize mt-4 mb-2 text-sm font-medium text-[#2E3E5C]">{`${data[1]["remark"]} - ${monthName} ${date}, ${year}`}</p>

              <h2 className="font-bold">{data[1]["title"]}</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
