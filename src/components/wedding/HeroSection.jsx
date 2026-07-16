import Rings from "./Rings";
import { Flower } from "lucide-react";
import '../../index.css'
import CoupleHero from "./CoupleHero";


function HeroSection() {
    return (
        <section>
            <div
                className="
                    relative
                    min-h-screen
                    max-w-[768px]
                    mx-auto
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-6
                    text-center
                    overflow-hidden
                "
            > 
                {/* Alliances */}

                <div
                    className="
                        fade-up
                        mb-4
                        mt-10
                        text-[#D4AF37]
                    "
                >
                    <Rings />
                </div>

                {/* Sous titre */}

                <p
                    className="
                        fade-up
                        delay-1
                        mb-6
                        text-sm
                        uppercase
                        tracking-[0.5em]
                        text-[#E9D8A6]
                        title
                    "
                >
                    Célébration de Mariage
                </p>

                {/* Photo */}

                <CoupleHero />


                {/* Noms */}

                <div className="fade-up delay-3 py-5">
                    <h1
                        className="
                            text-7xl
                            md:text-8xl
                            love
                            text-[#F8F6F2]
                        "
                    >
                        Élodie
                    </h1>

                    <span
                        className="
                            block
                            my-2
                            text-7xl
                            md:text-8xl
                            love
                            text-[#D4AF37]
                        "
                    >
                        &
                    </span>

                    <h1
                        className="
                            text-7xl
                            md:text-8xl
                            love
                            text-[#F8F6F2]
                        "
                    >
                        Kevin
                    </h1>
                </div>

                {/* Texte */}

                <p
                    className="
                        fade-up
                        delay-4
                        mt-9
                        text-3xl
                        leading-relaxed
                        text-[#E9E4DA]
                    "
                >
                    Cher(e) Invité(e)
                </p>

                <p
                    className="
                        fade-up
                        delay-5
                        mt-4
                        max-w-lg
                        text-lg
                        leading-relaxed
                        text-[#E9E4DA]
                    "
                >
                    Nous avons la joie de vous convier à la célébration de notre union.
                </p>

            </div>
        </section>
    );
}

export default HeroSection;