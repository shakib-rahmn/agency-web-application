import Button from "./utils/Button";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("Failed to fetch work list");
  }
  return res.json();
}

const WorkList = async () => {
  const data = await getData();

  return (
    <section className="overflow-hidden py-20">
      <div className="container">
        <h4 className="title-sm">Work list</h4>
        <h2 className="section-title mb-20">
          We provide the Perfect Solution <br className="max-lg:hidden" /> to
          your business growth
        </h2>

        <div className="flex justify-around max-lg:flex-col gap-14">
          {data.map((item) => (
            <div className="w-full lg:w-1/3" key={item["id"]}>
              {/* icon */}
              <div className="grid place-items-center mb-5 w-[70px] h-16 bg-[#D7F5DC] rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-semibold mb-5">{item["title"]}</h2>
              <p className="text-lg mb-8">{item["des"]}</p>

              <Button className="border-transparent rounded-none text-dark hover:border-b-[#20B15A] px-0 ml-6">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
