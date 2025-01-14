import { PythonOriginal, RustOriginal, GithubactionsOriginal, TypescriptOriginal, TailwindcssOriginal, GitOriginal, NodejsOriginal, ReactOriginal, AstroOriginal } from 'devicons-react';

export default function Technologies() {
  return (
    <div className='bg-[#23272e] py-12 tracking-tighter'>
      <div className='text-white max-w-4xl mx-auto font-custom'>
        <p className='text-4xl mb-10 font-bold'>Technologies</p>
        <div className="App flex justify-between text-white">
          <div className='w-72'>
            <a href='https://www.rust-lang.org/' target="_blank">
              <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640] transition-all duration-100 hover:opacity-90 hover:drop-shadow-lg">
                <RustOriginal size="52" className="mr-2 bg-gray-400 p-1 rounded-md" />
                <div className='flex flex-col justify-center'>
                  <p>Rust</p>
                  <p className='text-sm'>Fast, safe system language.</p>
                </div>
              </div>
            </a>
            <a href='https://www.python.org/' target="_blank">
              <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640] transition-all duration-100 hover:opacity-90 hover:drop-shadow-lg">
                <PythonOriginal size="52" className="mr-2 bg-blue-300 p-1 rounded-md" />
                <div className='flex flex-col justify-center'>
                  <p>Python</p>
                  <p className='text-sm'>Simple, versatile language.</p>
                </div>
              </div>
            </a>
            <a href='https://github.com/features/actions' target="_blank">
              <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640] transition-all duration-100 hover:opacity-90 hover:drop-shadow-lg">
                <GithubactionsOriginal size="52" className="mr-2 bg-blue-300 p-1 rounded-md" />
                <div className='flex flex-col justify-center'>
                  <p>Github Actions</p>
                  <p className='text-sm'>Automated CI/CD pipelines.</p>
                </div>
              </div>
            </a>
          </div>
          <div className='w-72'>
            <a href='https://www.typescriptlang.org/' target="_blank">
              <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640] transition-all duration-100 hover:opacity-90 hover:drop-shadow-lg">
                <TypescriptOriginal size="52" className="mr-2 bg-blue-300 p-1 rounded-md" />
                <div className='flex flex-col justify-center'>
                  <p>TypeScript</p>
                  <p className='text-sm'>JavaScript, but with types.</p>
                </div>
              </div>
            </a>
            <a href='https://tailwindcss.com/' target="_blank">
              <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640] transition-all duration-100 hover:opacity-90 hover:drop-shadow-lg">
                <TailwindcssOriginal size="52" className="mr-2 bg-teal-200 p-1 rounded-md" />
                <div className='flex flex-col justify-center'>
                  <p>Tailwind</p>
                  <p className='text-sm'>Utility-first CSS styling.</p>
                </div>
              </div>
            </a>
            <a href='https://git-scm.com/' target="_blank">
              <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640] transition-all duration-100 hover:opacity-90 hover:drop-shadow-lg">
                <GitOriginal size="52" className="mr-2 bg-orange-300 p-1 rounded-md" />
                <div className='flex flex-col justify-center'>
                  <p>Git</p>
                  <p className='text-sm'>Tool for version control.</p>
                </div>
              </div>
            </a>
          </div>
          <div className='w-72'>
            <a href='https://nodejs.org/en' target="_blank">
              <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640] transition-all duration-100 hover:opacity-90 hover:drop-shadow-lg">
                <NodejsOriginal size="52" className="mr-2 bg-green-300 p-1 rounded-md" />
                <div className='flex flex-col justify-center'>
                  <p>Node.js</p>
                  <p className='text-sm'>JavaScript for servers.</p>
                </div>
              </div>
            </a>
            <a href='https://react.dev/' target="_blank">
              <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640] transition-all duration-100 hover:opacity-90 hover:drop-shadow-lg">
                <ReactOriginal size="52" className="mr-2 bg-blue-600 p-1 rounded-md" />
                <div className='flex flex-col justify-center'>
                  <p>React</p>
                  <p className='text-sm'>A JavaScript UI library.</p>
                </div>
              </div>
            </a>
            <a href='https://astro.build/' target="_blank">
              <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640] transition-all duration-100 hover:opacity-90 hover:drop-shadow-lg">
                <AstroOriginal size="52" className="mr-2 bg-orange-300 p-1 rounded-md" />
                <div className='flex flex-col justify-center'>
                  <p>Astro</p>
                  <p className='text-sm'>Framework for static sites.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}
