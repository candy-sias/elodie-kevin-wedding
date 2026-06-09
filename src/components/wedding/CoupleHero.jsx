import coupleHero from "../../assets/images/couple-hero.jpg";
import '../../index.css'

function CoupleHero() {
    return (
        <img
            src={coupleHero}
            alt="Elodie et Kevin"
            className="
                        fade-up
                        delay-2
          mb-8
          h-full
          w-full
          rounded-full
          object-cover
          border-4
          border-[#C9A86A]
          shadow-xl
        "
        />
    );
}

export default CoupleHero;