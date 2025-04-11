export default function Hero() {
  return (
    <div>
      <div className=" flex flex-col">
        <div className="flex flex-row items-center justify-start tracking-tighter">
          <div className="flex drop-shadow-lg">
            <img srcSet="/Teemu-102_cropped-400w.avif 400w, /Teemu-102_cropped-600w.avif 600w, /Teemu-102_cropped-800w.avif 800w, /Teemu-102_cropped-1000w.avif 1000w, /Teemu-102_cropped-1200w.avif 1200w, /Teemu-102_cropped-1600w.avif 1600w, /Teemu-102_cropped-2000w.avif 2000w"
              sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
              src="/Teemu-102_cropped.jpg" alt='Teemu Hynnä' width="3550" height="3550" className="flex items-start justify-center w-32 mr-5 rounded-2xl shadow-xl mb-5 aspect-square" />
          </div>
          <div>
            <h1 className="flex w-full md:items-center text-3xl font-bold md:mx-auto">
              Teemu Hynnä
            </h1>
            <h2
              className="bg-gradient-to-r items-center bg-clip-text text-lg font-light">
              Full stack developer
            </h2>
            <p className="text-md font-light">teemu@hynnaconsulting.fi</p>
          </div>
        </div>
      </div>
    </div >
  );
}
