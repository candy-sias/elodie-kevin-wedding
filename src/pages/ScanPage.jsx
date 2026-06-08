import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scanner } from "@yudiel/react-qr-scanner";

import {
  findGuestByUuid,
  checkInGuest,
  getCheckedInCount,
} from "../services/scanService";

function ScanPage() {
  const navigate = useNavigate();

  const [uuid, setUuid] = useState("");
  const [guest, setGuest] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [scanMode, setScanMode] = useState(true);
  const [scanSuccess, setScanSuccess] = useState(false);
  const [scannerKey, setScannerKey] = useState(0);
  const [checkedInCount, setCheckedInCount] = useState(0);

  useEffect(() => {
    const auth = localStorage.getItem("scanner_auth");

    if (!auth) {
      navigate("/login");
      return;
    }

    loadCheckedInCount();
  }, [navigate]);

  async function loadCheckedInCount() {
    const { count, error } =
      await getCheckedInCount();

    if (!error) {
      setCheckedInCount(count);
    }
  }

  async function handleSearch(code) {
    const finalCode = (code || uuid).trim();

    if (!finalCode) {
      setMessage("Aucun code détecté.");
      return;
    }

    setLoading(true);
    setMessage("");
    setGuest(null);

    const { data, error } = await findGuestByUuid(finalCode);

    setLoading(false);

    if (error || !data) {
      setMessage("Invité introuvable.");
      return;
    }

    setGuest(data);
    setScanMode(false);
  }

  async function handleCheckIn() {
    if (!guest) return;

    const { data, error } = await checkInGuest(guest.id);

    if (error) {
      setMessage("Erreur check-in.");
      return;
    }

    setGuest(data);
    setCheckedInCount((prev) => prev + 1);
    setMessage("Entrée validée.");
  }

  function reset() {
    setUuid("");
    setGuest(null);
    setMessage("");

    setScanSuccess(false);

    setScannerKey(prev => prev + 1);

    setScanMode(true);
  }

  function handleLogout() {
    localStorage.removeItem("scanner_auth");
    navigate("/login");
  }

  return (
    <main className="min-h-screen bg-[#F5EBDD] p-6">
      <div className="mx-auto max-w-2xl">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">

          <div>
            <h1 className="text-3xl text-[#5C4033] font-bold">
              Scan entrée
            </h1>

            <p className="text-sm text-[#C9A86A] mt-2 font-medium">
              {checkedInCount} invités admis
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-[#5C4033] text-white px-4 py-2 rounded-xl"
          >
            Déconnexion
          </button>
        </div>

        {/* TOGGLE */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setScanMode(true)}
            className={`px-4 py-2 rounded-xl ${scanMode ? "bg-[#5C4033] text-white" : "bg-white"
              }`}
          >
            Caméra
          </button>

          <button
            onClick={() => setScanMode(false)}
            className={`px-4 py-2 rounded-xl ${!scanMode ? "bg-[#5C4033] text-white" : "bg-white"
              }`}
          >
            Code manuel
          </button>
        </div>

        {/* CAMERA */}

        {scanMode && (
          <div
            className="
      bg-[#FFFDF9]
      rounded-[36px]
      p-6
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      border border-[#E7D7C4]
    "
          >
            <div className="text-center mb-6">
              <p className="uppercase tracking-[0.3em] text-xs text-[#C9A86A]">
                Kevin & Élodie
              </p>

              <h2 className="text-[#5C4033] text-xl font-semibold mt-2">
                Contrôle des invitations
              </h2>

              <div className="w-20 h-[1px] bg-[#C9A86A] mx-auto mt-4" />
            </div>

            <div
              className={`
        relative
        overflow-hidden
        rounded-[28px]
        bg-black

        ${scanSuccess
                  ? "ring-4 ring-green-500"
                  : ""
                }
      `}
            >
              <Scanner
                key={scannerKey}
                components={{
                  finder: false,
                }}

                onScan={(result) => {
                  if (result?.[0]?.rawValue) {
                    setScanSuccess(true);

                    handleSearch(
                      result[0].rawValue
                    );

                    setTimeout(() => {
                      setScanSuccess(false);
                    }, 1000);
                  }
                }}
                onError={(error) => {
                  console.error(error);

                  setMessage(
                    "Caméra inaccessible"
                  );
                }}
              />

              {/* Overlay Premium */}

              <div
                className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
        "
              >
                <div className="relative h-72 w-72">

                  {/* coin haut gauche */}

                  <div className="absolute top-0 left-0 h-10 w-10 border-l-4 border-t-4 border-[#C9A86A]" />

                  {/* coin haut droit */}

                  <div className="absolute top-0 right-0 h-10 w-10 border-r-4 border-t-4 border-[#C9A86A]" />

                  {/* coin bas gauche */}

                  <div className="absolute bottom-0 left-0 h-10 w-10 border-l-4 border-b-4 border-[#C9A86A]" />

                  {/* coin bas droit */}

                  <div className="absolute bottom-0 right-0 h-10 w-10 border-r-4 border-b-4 border-[#C9A86A]" />

                  {/* ligne scan */}

                  <div className="scanner-line-premium" />
                </div>
              </div>
            </div>

            <p
              className="
        text-center
        mt-5
        text-sm
        text-[#7A5A48]
      "
            >
              Présentez votre invitation digitale
            </p>
          </div>
        )}


        {/* MANUAL INPUT */}
        {!scanMode && (
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <input
              value={uuid}
              onChange={(e) => setUuid(e.target.value)}
              placeholder="UUID ou code QR"
              className="w-full border p-3 rounded-xl"
            />

            <button
              onClick={() => handleSearch()}
              className="mt-3 w-full bg-[#5C4033] text-white py-3 rounded-xl"
            >
              Rechercher
            </button>
          </div>
        )}

        {/* MESSAGE */}
        {message && (
          <div className="mt-4 bg-white p-4 rounded-xl shadow">
            {message}

            <button
              onClick={reset}
              className="mt-2 text-sm underline"
            >
              Recommencer scan
            </button>
          </div>
        )}

        {/* RESULT */}

        {guest && (
          <div
            className="
      mt-6
      bg-[#FFFDF9]
      rounded-[32px]
      p-8
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      border border-[#E7D7C4]
    "
          >
            <div className="text-center mb-6">

              <p className="uppercase tracking-[0.3em] text-xs text-[#C9A86A]">
                Invité reconnu
              </p>

              <h2
                className="
          mt-3
          text-2xl
          font-semibold
          text-[#5C4033]
        "
              >
                {guest.fullname}
              </h2>

            </div>

            <div className="space-y-3 text-[#5C4033]">

              <div className="flex justify-between">
                <span>Téléphone</span>
                <span>{guest.phone}</span>
              </div>

              <div className="flex justify-between">
                <span>Présence</span>
                <span>{guest.attendance}</span>
              </div>

              <div className="flex justify-between">
                <span>Statut</span>

                <span
                  className={
                    guest.checked_in
                      ? "text-green-600 font-medium"
                      : "text-[#C9A86A] font-medium"
                  }
                >
                  {guest.checked_in
                    ? "Déjà enregistré"
                    : "Non enregistré"}
                </span>
              </div>

            </div>

            {!guest.checked_in && (
              <button
                onClick={handleCheckIn}
                className="
          w-full
          mt-6
          py-4
          rounded-2xl
          bg-[#5C4033]
          text-white
          font-medium
          transition
          hover:opacity-90
        "
              >
                Valider l'entrée
              </button>
            )}

            <button
              onClick={reset}
              className="
        w-full
        mt-3
        py-3
        text-[#7A5A48]
      "
            >
              Nouveau scan
            </button>
          </div>
        )}

      </div>
    </main>
  );
}

export default ScanPage;