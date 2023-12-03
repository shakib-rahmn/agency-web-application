import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

const Page = () => {
	return (
		<>
			<Hero />
			<WorkList />
			<Stats />
			<FeaturedProject />
			<Subscribe />
		</>
	)
}

export default Page;
