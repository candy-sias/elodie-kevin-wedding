function DressCodeSection() {
    const colors = [
        {
            name: "Navy",
            color: "#0B1F3A",
        },
        {
            name: "Bleu minuit",
            color: "#191970",
        },
        {
            name: "Bleu royal",
            color: "#1E3A8A",
        },
        {
            name: "Champagne",
            color: "#E9D8A6",
        }
    ];

    return (
        <section className="px-6">
            <div className="mx-auto max-w-[768px]">
                {/* Header */}

                <h2 className="text-3xl text-[#F8F6F2] mb-10 text-center">
                    Code Vestimentaire
                </h2>

                {/* Card */}

                <div
                    className="
                rounded-[2rem]
                bg-white/10
                p-8
                border
                border-[#D4AF37]/20
                shadow-md
                text-center
                shadow-[0_20px_60px_rgba(0,0,0,.35)]
                "
                >
                    <h3
                        className="
                    text-2xl
                    text-[#F8F6F2]
                    mb-4
                    "
                    >
                        Bleu & Élégance
                    </h3>

                    {/* Palette */}

                    <div
                        className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-6
            "
                    >
                        {colors.map((item) => (
                            <div
                                key={item.name}
                                className="
                  flex
                  flex-col
                  items-center
                  gap-2
                "
                            >
                                <div
                                    className="
                    h-14
                    w-14
                    rounded-full
                    border
                    border-black/10
                    shadow-sm
                  "
                                    style={{
                                        backgroundColor: item.color,
                                    }}
                                />

                                <span
                                    className="
                    text-sm
                    text-[#E9D8A6]
                  "
                                >
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default DressCodeSection;