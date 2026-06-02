function DressCodeSection() {
    const colors = [
        {
            name: "Beige",
            color: "#E8D8C6",
        },
        {
            name: "Chocolat",
            color: "#5C4033",
        },
        {
            name: "Crème",
            color: "#FFF9F2",
        },
        {
            name: "Terracotta",
            color: "#C07A59",
        }
    ];

    return (
        <section className="px-6">
            <div className="mx-auto max-w-[768px]">
                {/* Header */}

                <h2 className="text-3xl text-[#5C4033] mb-10 text-center">
                    Code Vestimentaire
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
                    <h3
                        className="
                    text-2xl
                    text-[#5C4033]
                    mb-4
                    "
                    >
                        Champêtre Élégant
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
                    text-[#6D5545]
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