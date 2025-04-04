export default function Hero() {
  return (
    <div className="h-screen mt-40 lg:mt-0 lg:flex flex-row items-center justify-center tracking-tighter font-manrope">
      <div className="flex px-8 drop-shadow-lg">
        <img src='/img22.avif' alt='Teemu Hynnä' className="flex items-start justify-center mx-auto w-64 rounded-md mb-5 aspect-square" />
      </div>
      <div>
        <div className="flex w-full md:items-center text-center justify-center text-7xl font-extrabold md:mx-auto text-white mb-5">
          Hi, I'm Teemu Hynnä
        </div>
        <div className="flex w-full items-center justify-center mb-10">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-teal-200 via-blue-200 to-pink-200 bg-clip-text text-5xl box-content font-extrabold text-transparent text-center select-none">
            FULL STACK DEVELOPER
          </span>
          <h1
            className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-teal-200 via-blue-200 to-pink-200 bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto">
            FULL STACK DEVELOPER
          </h1>
        </div>
      </div>
    </div>
  );
}
