import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("Failed to fetch all project");
  }
  return res.json();
}

const Project = async () => {
  const data = await getData();

  return (
    <section className="overflow-hidden py-20">
      <div className="container">
        <h4 className="title-sm">all project</h4>
        <h2 className="section-title mb-20">
          Better Agency/SEO Solution At <br className="max-lg:hidden" /> Your
          Fingertips
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {data.map((item) => (
            <div
              key={item["id"]}
              className="bg-white rounded-xl overflow-hidden px-10 py-8 shadow-[0_4px_10px_#0000001a]"
            >
              <a href="">
                <Image
                  src={item["image"]}
                  width={1000}
                  height={100}
                  alt=""
                  className="rounded-lg mb-5 object-cover"
                />
              </a>

              <h2 className="text-[calc(1rem+0.2vw)] uppercase font-bold">
                {item["title"]}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
