import { useState } from "react";
import IntroVideo from "../components/IntroVideo";


import HeroSection from "../components/wedding/HeroSection";
import RingsDivider from "../components/wedding/RingsDivider";
import EventDetailsSection from "../components/wedding/EventDetailsSection";
import CoupleStorySection from "../components/wedding/CoupleStorySection";
import ProgramSection from "../components/wedding/ProgramSection";
import DressCodeSection from "../components/wedding/DressCodeSection";
import GiftSection from "../components/wedding/GiftSection";
import RSVPSection from "../components/wedding/RSVPSection";
import DeveloperFooter from "../components/DeveloperFooter";

function WeddingHome() {
    const [phase, setPhase] = useState("intro");

    if (phase !== "wedding") {
        return (
            <IntroVideo
                phase={phase}
                setPhase={setPhase}
            />
        );
    }

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

            <RingsDivider />

            <RSVPSection />

            <DeveloperFooter />
        </main>
    );
}

export default WeddingHome;