import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";


function EventDetailsSection() {
  return (
    <section
      className="
        px-6
      "
    >
      <div
        className="
          max-w-[768px]
          mx-auto
        "
      >
        

        <h2
          className="
            text-center
            text-3xl
            mb-8
            text-[#5C4033]
          "
        >
          Date & Lieu
        </h2>

        <div
          className="
            rounded-[2rem]
            bg-white
            shadow-lg
            p-10
            border
            border-[#E8D8C6]
            text-center
          "
        >
          {/* Date */}

          <CalendarDays
            size={40}
            className="
              mx-auto
              mb-4
              text-[#C9A86A]
            "
          />

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#8B6F5A]
              text-sm
            "
          >
            Date
          </p>

          <h3
            className="
              mt-2
              text-2xl
              text-[#5C4033]
            "
          >
            Samedi 15 Août 2026
          </h3>

          {/* Heure */}

          <Clock3
            size={40}
            className="
              mx-auto
              mt-12
              mb-4
              text-[#C9A86A]
            "
          />

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#8B6F5A]
              text-sm
            "
          >
            Heure
          </p>

          <h3
            className="
              mt-2
              text-2xl
              text-[#5C4033]
            "
          >
            18h00
          </h3>

          {/* Lieu */}

          <MapPin
            size={40}
            className="
              mx-auto
              mt-12
              mb-4
              text-[#C9A86A]
            "
          />

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#8B6F5A]
              text-sm
            "
          >
            Lieu
          </p>

          <h3
            className="
              mt-2
              text-2xl
              text-[#5C4033]
            "
          >
            Jardin des Roses
          </h3>

          <p
            className="
              mt-2
              text-[#6D5545]
            "
          >
            Kinshasa
          </p>
        </div>
      </div>
    </section>
  );
}

export default EventDetailsSection;