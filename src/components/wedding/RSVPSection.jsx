import { createGuest } from "../../services/guestService";
import { useEffect, useState, useRef } from "react";
import { Heart, Send, Sparkles } from "lucide-react";
import { QRCode } from "react-qr-code";
import { toPng } from "html-to-image";
import Rings from "./Rings";


function RSVPSection() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");

  const [guest, setGuest] = useState(null);

  const cardRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function normalizePhone(phone) {
    return phone.replace(/\D/g, "");
  }

  async function downloadInvitation() {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
      });

      const link = document.createElement("a");

      link.href = dataUrl;
      link.download = `invitation-${guest.fullname}.png`;

      link.click();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setErrorMessage("");

    const cleanedFullname = fullname.trim();
    const cleanedMessage = message.trim();
    const normalizedPhone = normalizePhone(phone);

    if (!cleanedFullname) {
      return setErrorMessage(
        "Veuillez renseigner votre nom complet."
      );
    }

    if (!normalizedPhone) {
      return setErrorMessage(
        "Veuillez renseigner votre numéro."
      );
    }

    if (normalizedPhone.length < 9) {
      return setErrorMessage(
        "Veuillez saisir un numéro valide."
      );
    }

    if (!attendance) {
      return setErrorMessage(
        "Veuillez indiquer votre présence."
      );
    }

    try {
      setLoading(true);

      const { data, error } = await createGuest({
        fullname: cleanedFullname,
        phone: normalizedPhone,
        attendance,
        message: cleanedMessage,
      });

      if (error) {
        if (error.code === "23505") {
          setErrorMessage(
            "Une réponse a déjà été enregistrée avec ce numéro."
          );
          return;
        }

        throw error;
      }

      setGuest(data);

      localStorage.setItem(
        "wedding_guest",
        JSON.stringify(data)
      );

      setSuccess(true);

      setFullname("");
      setPhone("");
      setAttendance("");
      setMessage("");
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Une erreur est survenue. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    const savedGuest =
      localStorage.getItem("wedding_guest");

    if (!savedGuest) return;

    const parsedGuest =
      JSON.parse(savedGuest);

    setGuest(parsedGuest);
    setSuccess(true);
  }, []);


  return (
    <section className="px-6">
      <div className="mx-auto max-w-[768px]">

        {/* Header */}

        <div className="mb-16 text-center">

          <h2
            className="
              mb-4
              text-3xl
              text-[#5C4033]
            "
          >
            RSVP
          </h2>

          <p
            className="
              mx-auto
              max-w-md
              leading-relaxed
              text-[#6D5545]
            "
          >
            Merci de nous confirmer votre présence afin
            de nous aider à préparer cette journée
            exceptionnelle dans les meilleures conditions.
          </p>

        </div>

        {/* Success */}

        {success ? (
          <div
            className="
      rounded-[2rem]
      bg-[#FFF9F2]
      p-10
      text-center
      shadow-lg
    "
          >
            <h3
              className="
        mb-8
        text-2xl
        text-[#5C4033]
      "
            >
              Merci pour votre réponse
            </h3>

            {guest && (
              <div className="flex flex-col items-center">

                <div
                  ref={cardRef}
                  className="
    w-[340px]
    rounded-[32px]
    bg-[#5B3A29]
    p-8
    text-center
    shadow-xl
  "
                >

                  <div
                    className="
                        flex
                        justify-center
                        mb-5
                    "
                  >
                    <Heart
                      size={18}
                      className="text-[#f8efe8ab]"
                    />

                  </div>

                  <h3
                    className="
      text-3xl
      text-[#FFF8F0]
      love
    "
                  >
                    Kevin & Elodie
                  </h3>

                  <p
                    className="
      mt-2
      text-[#fff8f083]
    "
                  >
                    22 Août 2026
                  </p>

                  <div
                    className="
      mx-auto
      my-8
      w-fit
      rounded-2xl
      bg-white
      p-4
    "
                  >
                    <QRCode
                      value={guest.guest_uuid}
                      size={180}
                    />
                  </div>

                  <p
                    className="
      text-lg
      text-[#FFF8F0]
    "
                  >
                    {guest.fullname}
                  </p>

                  <p
                    className="
      mt-4
      text-sm
      leading-relaxed
      text-[#EBD8C8]
    "
                  >
                    Présentez cette invitation
                    lors de votre arrivée.
                  </p>

                </div>

                <div
                  className="
    mt-6
    max-w-sm
    text-center
  "
                >
                  <p
                    className="
      text-md
      text-[#6D5545]
    "
                  >
                    Présentez ce QR Code à l'entrée.
                  </p>

                  <p
                    className="
      mt-4
      text-sm
      leading-relaxed
      text-[#8A7565]
    "
                  >
                    Pour toute modification,
                    merci de contacter directement
                    les mariés.
                  </p>
                </div>

                <button
                  onClick={downloadInvitation}
                  className="
    mt-6
    rounded-xl
    bg-[#5C4033]
    px-6
    py-3
    text-white
  "
                >
                  Télécharger mon invitation
                </button>

              </div>
            )}

          </div>
        ) : (

          <form
            onSubmit={handleSubmit}
            className="
              rounded-[2rem]
              bg-[#FFF9F2]
              p-8
              shadow-lg
            "
          >

            {/* Nom */}

            <div className="mb-6">

              <label
                className="
                  mb-2
                  block
                  text-[#5C4033]
                "
              >
                Nom complet *
              </label>

              <input
                type="text"
                value={fullname}
                onChange={(e) =>
                  setFullname(e.target.value)
                }
                placeholder="Votre nom complet"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D8C4B6]
                  px-4
                  py-3
                  outline-none
                  focus:border-[#C9A86A]
                "
              />

            </div>

            {/* Téléphone */}

            <div className="mb-6">

              <label
                className="
                  mb-2
                  block
                  text-[#5C4033]
                "
              >
                Téléphone *
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="0..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D8C4B6]
                  px-4
                  py-3
                  outline-none
                  focus:border-[#C9A86A]
                "
              />

            </div>

            {/* Présence */}

            <div className="mb-8">

              <p
                className="
                  mb-4
                  text-[#5C4033]
                "
              >
                Serez-vous présent ?
              </p>

              <div className="grid gap-4">

                <button
                  type="button"
                  onClick={() =>
                    setAttendance("accepted")
                  }
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    px-4
                    py-4
                    transition-all
                    duration-300

                    ${attendance === "accepted"
                      ? "border-[#C9A86A] bg-[#F5EBDD]"
                      : "border-[#D8C4B6]"
                    }
                  `}
                >
                  <Sparkles
                    size={18}
                    className="text-[#C9A86A]"
                  />

                  <span>
                    J'accepte avec joie
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setAttendance("declined")
                  }
                  className={`
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    px-4
                    py-4
                    transition-all
                    duration-300

                    ${attendance === "declined"
                      ? "border-[#C9A86A] bg-[#F5EBDD]"
                      : "border-[#D8C4B6]"
                    }
                  `}
                >
                  Je décline avec regret
                </button>

              </div>

            </div>

            {/* Message */}

            <div className="mb-8">

              <label
                className="
                  mb-2
                  block
                  text-[#5C4033]
                "
              >
                Message aux mariés
              </label>

              <textarea
                rows="5"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                placeholder="Partagez vos vœux..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D8C4B6]
                  px-4
                  py-3
                  outline-none
                  focus:border-[#C9A86A]
                "
              />

            </div>

            {/* Error */}

            {errorMessage && (
              <div
                className="
                  mb-6
                  rounded-xl
                  bg-red-50
                  p-4
                  text-sm
                  text-red-600
                "
              >
                {errorMessage}
              </div>
            )}

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#5C4033]
                px-6
                py-4
                text-white
                transition
                hover:opacity-90
                disabled:opacity-50
              "
            >
              <Send size={18} />

              {loading
                ? "Envoi en cours..."
                : "Envoyer ma réponse"}
            </button>

          </form>
        )}

      </div>
    </section>
  );
}

export default RSVPSection;