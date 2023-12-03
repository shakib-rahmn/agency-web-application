import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("Failed to fetch testimonials");
  }
  return res.json();
}

const Testimonial = async () => {
  const data = await getData();

  return (
    <section className="overflow-hidden py-20">
      <div className="container">
        <h4 className="title-sm">Testimonial List</h4>
        <h2 className="section-title mb-20">
          Better Agency/SEO Solution At <br className="max-lg:hidden" /> Your
          Fingertips
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item["id"]}
              className="bg-white text-center rounded-xl overflow-hidden px-10 py-8 shadow-[0_4px_10px_#0000001a]"
            >
              <div className="mb-5">
                <Image
                  src={item["image"]}
                  width={1000}
                  height={100}
                  alt=""
                  className="rounded-lg mb-5 object-cover w-16 h-16 mx-auto"
                />
              </div>

              <p className="text-lg mb-5 text-[#9D9D9D]">{item['msg']}</p>
              <h2 className="font-bold text-xl uppercase mb-2">{item['name']}</h2>
              <p className="font-semibold text-slate-600">{item['designation']}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
