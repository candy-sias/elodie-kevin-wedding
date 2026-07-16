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
    time: "19h00",
    title: "Accueil & Installation",
    icon: DoorOpen,
  },
  {
    time: "19h30",
    title: "Ouverture de la Célébration",
    icon: HeartHandshake,
  },
  {
    time: "19h45",
    title: "Entrée des Mariés",
    icon: Crown,
  },
  {
    time: "20h00",
    title: "Présentation des Mariés",
    icon: Users,
  },
  {
    time: "20h30",
    title: "Première Danse",
    icon: Music2,
  },
  {
    time: "21h00",
    title: "Dîner & Partage",
    icon: Utensils,
  },
  {
    time: "22h30",
    title: "Lancer du Bouquet",
    icon: Flower2,
  },
  {
    time: "23h00",
    title: "Ouverture de la Piste",
    icon: PartyPopper,
  },
  {
    time: "03h00",
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
              text-[#E9D8A6]
            "
          >
            La soirée
          </p>

          <h2 className="text-3xl text-[#F8F6F2]">
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
              bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent
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
                    rounded-2xl
                    border
                  bg-[#0F2746]
                  border-[#D4AF37]
                    shadow-[0_0_20px_rgba(212,175,55,0.18)]
                  "
                >
                  <Icon
                    size={20}
                    className="text-[#D4AF37]"
                  />
                </div>

                {/* Carte */}

                <div
                  className="
                    flex-1
                    rounded-[1.5rem]
                    border
                    border-[#D4AF37]/20
                    p-5
                    shadow-[0_15px_35px_rgba(0,0,0,.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D4AF37]/40
                    hover:shadow-[0_20px_50px_rgba(0,0,0,.35)]
                  "
                >
                  <p
                    className="
                      mb-1
                      text-sm
                      font-semibold
                      tracking-widest
                      uppercase
                      text-[#D4AF37]
                    "
                  >
                    {event.time}
                  </p>

                  <h3
                    className="
                      text-lg
                      text-[#F8F6F2]
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

        <div className="mt-20 text-center">

          <div className="mx-auto mb-8 h-px w-36 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"/>

          <p className="text-[#E9D8A6] leading-8">
            Nous avons hâte de partager cette soirée exceptionnelle avec vous.
          </p>

        </div>
      </div>
    </section>
  );
}

export default ProgramSection;