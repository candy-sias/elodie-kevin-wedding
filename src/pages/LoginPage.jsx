import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (password === "Elovin") {
            localStorage.setItem(
                "scanner_auth",
                "authenticated"
            );

            navigate("/scan");
            return;
        }

        setErrorMessage(
            "Mot de passe incorrect."
        );
    }

    return (
        <main
            className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#F5EBDD]
        px-6
      "
        >
            <div
                className="
          w-full
          max-w-md
          rounded-[2rem]
          bg-white
          p-8
          shadow-lg
        "
            >
                <h1
                    className="
            mb-6
            text-center
            text-3xl
            text-[#5C4033]
          "
                >
                    Accès Protocole
                </h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        placeholder="Mot de passe"
                        className="
              w-full
              rounded-xl
              border
              border-[#D8C4B6]
              px-4
              py-3
              outline-none
            "
                    />

                    {errorMessage && (
                        <p
                            className="
                mt-3
                text-sm
                text-red-600
              "
                        >
                            {errorMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="
              mt-6
              w-full
              rounded-xl
              bg-[#5C4033]
              px-6
              py-3
              text-white
            "
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </main>
    );
}

export default LoginPage;