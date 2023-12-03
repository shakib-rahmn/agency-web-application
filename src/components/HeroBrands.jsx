import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("Failed to fetch hero");
  }
  return res.json();
}

const HeroBrands = async () => {
  const data = await getData();

  return (
    <div className="w-full bg-[#F8FFF9] py-10">
      <div className="container">
        <div className="flex flex-wrap items-center justify-around gap-10">
          {data.map((item) => (
            <div key={item['name']} className="last-of-type:w-20">
              <Image className="w-28" src={item['image']} width={500} height={100} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBrands;
