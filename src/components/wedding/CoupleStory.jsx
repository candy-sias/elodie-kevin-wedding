import coupleStory from "../../assets/images/couple-story.jpg";
import '../../index.css'

function CoupleStory() {
    return (
        <img
            src={coupleStory}
            alt="Elodie et Kevin"
            className="
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

export default CoupleStory;