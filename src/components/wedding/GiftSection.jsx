import { Heart, Gift } from "lucide-react";

function GiftSection() {
    return (
        <section className="px-6">
            <div className="mx-auto max-w-[768px]">
                {/* Header */}

                <h2 className="text-3xl text-[#5C4033] mb-10 text-center">
                    Cadeaux
                </h2>

                {/* Card */}

                <div
                    className="
            rounded-[2rem]
            bg-[#FFF9F2]
            p-8
            shadow-md
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
                        <Gift
                            size={42}
                            className="text-[#C9A86A]"
                        />
                    </div>

                    <p
                        className="
              mb-6
              leading-relaxed
              text-[#6D5545]
            "
                    >
                        Votre présence à nos côtés sera
                        notre plus beau cadeau.
                    </p>

                    <p
                        className="
              leading-relaxed
              text-[#6D5545]
            "
                    >
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
                            className="text-[#C9A86A]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GiftSection;