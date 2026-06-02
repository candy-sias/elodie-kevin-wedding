import {
  DoorOpen,
  HeartHandshake,
  Crown,
  Users,
  Music2,
  Utensils,
  Flower2,
  PartyPopper,
  MoonStar,
} from "lucide-react";

const events = [
  {
    time: "18h00",
    title: "Accueil & Installation",
    icon: DoorOpen,
  },
  {
    time: "18h30",
    title: "Ouverture de la Célébration",
    icon: HeartHandshake,
  },
  {
    time: "18h45",
    title: "Entrée des Mariés",
    icon: Crown,
  },
  {
    time: "19h00",
    title: "Présentation des Mariés",
    icon: Users,
  },
  {
    time: "19h30",
    title: "Première Danse",
    icon: Music2,
  },
  {
    time: "20h00",
    title: "Dîner & Partage",
    icon: Utensils,
  },
  {
    time: "21h30",
    title: "Lancer du Bouquet",
    icon: Flower2,
  },
  {
    time: "22h00",
    title: "Ouverture de la Piste",
    icon: PartyPopper,
  },
  {
    time: "02h00",
    title: "Clôture de la Soirée",
    icon: MoonStar,
  },
];

function ProgramSection() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-[768px]">
        {/* Header */}

        <div className="mb-16 text-center">
          <p
            className="
              mb-3
              text-sm
              uppercase
              tracking-[0.35em]
              text-[#8B6F5A]
            "
          >
            La soirée
          </p>

          <h2 className="text-3xl text-[#5C4033]">
            Programme
          </h2>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Ligne verticale */}

          <div
            className="
              absolute
              left-6
              top-0
              bottom-0
              w-[2px]
              bg-[#C9A86A]/30
            "
          />

          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <div
                key={index}
                className="
                  relative
                  mb-8
                  flex
                  gap-5
                "
              >
                {/* Icône */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#C9A86A]
                    bg-[#FFF9F2]
                    shadow-sm
                  "
                >
                  <Icon
                    size={20}
                    className="text-[#C9A86A]"
                  />
                </div>

                {/* Carte */}

                <div
                  className="
                    flex-1
                    rounded-[1.5rem]
                    bg-[#FFF9F2]
                    p-5
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <p
                    className="
                      mb-1
                      text-sm
                      font-medium
                      tracking-widest
                      text-[#C9A86A]
                    "
                  >
                    {event.time}
                  </p>

                  <h3
                    className="
                      text-lg
                      text-[#5C4033]
                    "
                  >
                    {event.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}

        <div className="mt-16 text-center">
          <p
            className="
              italic
              text-[#8B6F5A]
            "
          >
            Nous avons hâte de partager cette soirée exceptionnelle avec vous.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;