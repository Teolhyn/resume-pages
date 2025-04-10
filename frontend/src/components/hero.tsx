export default function Hero() {
  return (
    <div>
      <div className=" flex flex-col">
        <div className="lg:mt-0 lg:flex flex-row items-center justify-start tracking-tighter font-manrope">
          <div className="flex drop-shadow-lg">
            <img srcSet="/Teemu-102_cropped-400w.avif 400w, /Teemu-102_cropped-600w.avif 600w, /Teemu-102_cropped-800w.avif 800w, /Teemu-102_cropped-1000w.avif 1000w, /Teemu-102_cropped-1200w.avif 1200w, /Teemu-102_cropped-1600w.avif 1600w, /Teemu-102_cropped-2000w.avif 2000w"
              sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
              src="/Teemu-102_cropped.jpg" alt='Teemu Hynnä' width="3550" height="3550" className="flex items-start justify-center w-56 shadow-xl mb-5 aspect-square" />
          </div>
          <div>
            <div className="flex w-full md:items-center text-center justify-center text-6xl font-extrabold md:mx-auto text-black mb-5">
              Hi, I'm Teemu Hynnä
            </div>
            <div className="flex w-full items-center justify-center mb-10">
              <h1
                className="justify-center flex bg-gradient-to-r items-center text-black bg-clip-text text-2xl font-extrabold text-center select-auto">
                FULL STACK DEVELOPER
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
