import HeroBrands from "@/components/HeroBrands";
import Button from "./utils/Button";
import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/HeroList");
  if (!res.ok) {
    throw new Error("Failed to fetch hero");
  }
  return res.json();
}

const Hero = async () => {
  const data = await getData();

  return (
    <section className="grid place-items-center overflow-hidden min-h-[100vh] mt-[-80px] pt-40 pb-10 w-full bg-gradient-to-b from-[#D7F5DC] to-[#D7F5DC]">
      <div className="container mb-[70px]">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 items-center">
          {/* texts */}
          <div className="lg:max-w-xl max-lg:text-center">
            <h2 className="text-[calc(2rem+1.4vw)] mb-5 font-bold capitalize leading-[1.3]">
              {data["title"]}
            </h2>
            <p className="text-xl medium mb-16">{data["description"]}</p>

            <Button className="bg-[#20B15A] hover:bg-[#1d954d] py-[16px] px-7 max-lg:mx-auto">
              Get Started
            </Button>
          </div>

          {/* images */}
          <div className="lg:w-[90%] lg:ml-auto max-lg:mt-10">
            <div className="max-[525px]:flex-col flex gap-3 mb-3">
              <div className="max-[525px]:w-full w-2/3 ">
                <Image
                  width={1000}
                  height={100}
                  className="h-52 object-cover rounded-xl"
                  src={data["image2"]}
                  alt=""
                />
              </div>

              <div className="max-[525px]:w-full w-1/3">
                <Image
                  width={1000}
                  height={100}
                  className="h-52 object-cover rounded-xl"
                  src={data["image1"]}
                  alt=""
                />
              </div>
            </div>

            <div className="max-[525px]:flex-col flex gap-3">
              <div className="max-[525px]:w-full w-1/3">
                <Image
                  width={1000}
                  height={100}
                  className="w-full h-52 bg-center object-cover rounded-xl"
                  src={data["image4"]}
                  alt=""
                />
              </div>

              <div className="max-[525px]:w-full w-2/3">
                <Image
                  width={1000}
                  height={100}
                  className="w-full h-52 bg-center object-cover rounded-xl"
                  src={data["image3"]}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroBrands />
    </section>
  );
};

export default Hero;
