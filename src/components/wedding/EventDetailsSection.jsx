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
            text-[#F8F6F2]
          "
        >
          Date & Lieu
        </h2>

        <div
          className="
            rounded-[2rem]
            p-10
            border
            border-[#D4AF37]/30
            text-center
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
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
              text-[#FFFFFF]
              text-sm
            "
          >
            Date
          </p>

          <h3
            className="
              mt-2
              text-2xl
              text-[#E9D8A6]
            "
          >
            Samedi 22 Août 2026
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
              text-[#FFFFFF]
              text-sm
            "
          >
            Heure
          </p>

          <h3
            className="
              mt-2
              text-2xl
              text-[#E9D8A6]
            "
          >
            19h00
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

          <p className="uppercase tracking-[0.3em] text-[#FFFFFF] text-sm">
            Lieu
          </p>

          <h3 className="mt-2 text-2xl text-[#E9D8A6]">
            Espace Kalongo
          </h3>

          <div className="mt-4 text-[#D7DDE8] leading-7">
            <p>Quartier GB</p>
            <p>Référence : Mino Congo</p>
            <p>Avenue Kalongo n° 5B</p>
            <p>Kinshasa, RDC</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetailsSection;