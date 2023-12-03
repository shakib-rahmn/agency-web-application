import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill  } from "react-icons/ri";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("Failed to fetch work list");
  }
  return res.json();
}

const Team = async () => {
  const data = await getData();

  return (
    <section className="overflow-hidden py-20">
      <div className="container">
        <h4 className="title-sm">Our Team Member</h4>
        <h2 className="section-title mb-20">
          Check our awesome team <br className="max-lg:hidden" /> members
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {data.map((item) => (
            <div
              key={item["id"]}
              className="flex flex-col bg-white rounded-xl overflow-hidden text-center shadow-[0_1px_5px_#13102333]"
            >
              <div className="relative">
                <Image
                  src={item["image"]}
                  width={1000}
                  height={100}
                  alt=""
                  className="h-[24rem] object-cover object-center"
                />

                {/* social */}
                <div className="flex items-center gap-2 absolute bg-white rounded-full px-4 py-[10px] left-[50%] -translate-x-[50%] bottom-6">
                  <a
                    href={item["facebook"]}
                    target="_blank"
                    className="border-r pe-2 text-[#737588]"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href={item["twitter"]}
                    target="_blank"
                    className="border-r px-2 text-[#737588]"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href={item["instagram"]}
                    target="_blank"
                    className="ps-2 text-[#737588]"
                  >
                    <RiInstagramFill  />
                  </a>
                </div>
              </div>
              <p className="py-5 font-bold text-xl">{item["name"]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
