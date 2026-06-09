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
                {/* Décor floral */}

                <Flower
                    size={40}
                    className="
                        absolute
                        top-4
                        left-4
                        text-[#5C4033]
                        opacity-20
                    "
                />

                <Flower
                    size={40}
                    className="
                        absolute
                        top-4
                        right-4
                        text-[#5C4033]
                        opacity-20
                    "
                />

                {/* Alliances */}

                <div
                    className="
                        fade-up
                        mb-4
                        mt-10
                        text-[#C9A86A]
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
                        tracking-[0.4em]
                        text-[#8B6F5A]
                        title
                    "
                >
                    Célébration de Mariage
                </p>

                {/* Photo */}

                <CoupleHero />


                {/* Noms */}

                <div className="fade-up delay-3">
                    <h1
                        className="
                            text-7xl
                            md:text-8xl
                            love
                            text-[#5C4033]
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
                            text-[#C9A86A]
                        "
                    >
                        &
                    </span>

                    <h1
                        className="
                            text-7xl
                            md:text-8xl
                            love
                            text-[#5C4033]
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
                        text-[#6D5545]
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
                        text-[#6D5545]
                    "
                >
                    Nous avons la joie de vous convier à la célébration de notre union.
                </p>

            </div>
        </section>
    );
}

export default HeroSection;