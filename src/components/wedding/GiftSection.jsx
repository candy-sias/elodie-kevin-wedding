import { Heart, Gift, HeartHandshake } from "lucide-react";

function GiftSection() {
    return (
        <section className="px-6">
            <div className="mx-auto max-w-[768px]">
                {/* Header */}

                <h2 className="text-3xl text-[#F8F6F2] mb-10 text-center">
                    Cadeaux
                </h2>

                {/* Card */}

                <div
                    className="
            rounded-[2rem]
            p-8
            border
          border-[#D4AF37]/20
            backdrop-blur-sm
            shadow-[0_20px_60px_rgba(0,0,0,.35)]
            text-center
          "
                >
                    <div
                        className="
              mb-6
              flex
              justify-center
            "
                    >
                        <HeartHandshake
                            size={34}
                            className="text-[#D4AF37]"
                        />
                    </div>

                    <p
                        className="
              mb-6
              leading-relaxed
              font-semibold
              text-[#D7DDE8]
            "
                    >
                        Votre présence à nos côtés sera
                        notre plus beau cadeau.
                    </p>

                    <div className="
                        mx-auto
                        my-8
                        h-px
                        w-28
                        bg-gradient-to-r
                        from-transparent
                        via-[#D4AF37]
                        to-transparent
                    "/>

                    <p className="leading-relaxed text-[#D7DDE8]">
                        Pour celles et ceux qui souhaitent
                        nous témoigner une attention particulière,
                        une contribution libre destinée à nos projets
                        futurs sera chaleureusement appréciée.
                    </p>

                    <div
                        className="
              mt-8
              flex
              justify-center
            "
                    >
                        <Heart
                            size={20}
                            className="text-[#D4AF37]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GiftSection;