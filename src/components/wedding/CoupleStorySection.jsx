import CoupleStory from "./CoupleStory";

function CoupleStorySection() {
  return (
    <section className="px-6 py-10">
      <div className="max-w-[768px] mx-auto">

        <CoupleStory />

        <div className="mt-16 text-center">

          <h2
            className="
              text-4xl
              text-[#F8F6F2]
              mb-8
              love
            "
          >
            Notre Histoire
          </h2>

          <div
            className="
              max-w-2xl
              mx-auto
              space-y-6
              text-[#D7DDE8]
              leading-relaxed
              text-lg
            "
          >
            <p>
              Notre histoire s'écrit depuis de nombreuses années, 
              portée par l'amour, les souvenirs partagés et la famille 
              que nous avons construite ensemble.
            </p>

            <p>
              Aujourd'hui, entourés de nos proches, nous célébrons 
              cette union qui nous unit depuis longtemps et l'avenir 
              que nous continuons d'écrire main dans la main.
            </p>

          </div>

        </div>

      </div>
      
    </section>
  );
}

export default CoupleStorySection;