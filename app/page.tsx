import SecondSection from "@/components/homepage/SecondSection";
import SectionWelcome from "@/components/homepage/SectionWelcome";
import ShowcarSection from "@/components/homepage/ShowcarSection";

export default function Home() {
    return (
        <div className="flex flex-col overflow-hidden">
			<SectionWelcome/>
			<SecondSection/>
            <ShowcarSection/>
		</div>
    );
}
