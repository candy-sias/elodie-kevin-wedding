import { useRef } from "react";
import introVideo from "../assets/videos/wed_intro_01.mp4";

function IntroVideo({ phase, setPhase }) {
  const videoRef = useRef(null);

  function startExperience() {
    setPhase("playing");

    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">

      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        playsInline
        preload="auto"
        onEnded={() => setPhase("wedding")}
      >
        <source src={introVideo} type="video/mp4" />
      </video>

      {phase === "intro" && (
        <button
          onClick={startExperience}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            text-sm
            uppercase
            tracking-[0.3em]
            text-white          "
        >
          Tap
        </button>
      )}
    </div>
  );
}

export default IntroVideo;