import HeroSection from "../components/wedding/HeroSection";
import RingsDivider from "../components/wedding/RingsDivider";
import EventDetailsSection from "../components/wedding/EventDetailsSection";
import CoupleStorySection from "../components/wedding/CoupleStorySection";
import ProgramSection from "../components/wedding/ProgramSection";
import DressCodeSection from "../components/wedding/DressCodeSection";
import GiftSection from "../components/wedding/GiftSection";
import TestSupabase from "../components/wedding/TestSupabase";

function WeddingHome() {
    return (
        <main className="bg-[#F5EBDD] text-[#5C4033]">
            <HeroSection />

            <RingsDivider />

            <EventDetailsSection />

            <RingsDivider />

            <ProgramSection />

            <CoupleStorySection />

            <RingsDivider />

            <DressCodeSection />

            <RingsDivider />

            <GiftSection />

            <TestSupabase /> 

        </main>
    );
}

export default WeddingHome;