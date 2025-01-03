import { PythonOriginal, RustOriginal, GithubactionsOriginal, TypescriptOriginal, TailwindcssOriginal, GitOriginal, NodejsOriginal, ReactOriginal, AstroOriginal } from 'devicons-react';

export default function Technologies() {
  return (
    <div className='bg-[#23272e] py-12'>
      <div className='text-white max-w-4xl mx-auto font-custom'>
        <p className='text-4xl mb-10 font-bold'>Technologies</p>
        <div className="App flex justify-between text-white">
          <div className='w-72'>
            <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640]">
              <RustOriginal size="52" className="mr-2 bg-gray-400 p-1 rounded-md" />
              <div className='flex flex-col justify-center'>
                <p>Rust</p>
                <p className='text-sm'>Fast, safe system language.</p>
              </div>
            </div>
            <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640]">
              <PythonOriginal size="52" className="mr-2 bg-blue-300 p-1 rounded-md" />
              <div className='flex flex-col justify-center'>
                <p>Python</p>
                <p className='text-sm'>Simple, versatile language.</p>
              </div>
            </div>
            <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640]">
              <GithubactionsOriginal size="52" className="mr-2 bg-blue-300 p-1 rounded-md" />
              <div className='flex flex-col justify-center'>
                <p>Github Actions</p>
                <p className='text-sm'>Automated CI/CD pipelines.</p>
              </div>
            </div>
          </div>
          <div className='w-72'>
            <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640]">
              <TypescriptOriginal size="52" className="mr-2 bg-blue-300 p-1 rounded-md" />
              <div className='flex flex-col justify-center'>
                <p>TypeScript</p>
                <p className='text-sm'>JavaScript, but with types.</p>
              </div>
            </div>
            <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640]">
              <TailwindcssOriginal size="52" className="mr-2 bg-teal-200 p-1 rounded-md" />
              <div className='flex flex-col justify-center'>
                <p>Tailwind</p>
                <p className='text-sm'>Utility-first CSS styling.</p>
              </div>
            </div>
            <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640]">
              <GitOriginal size="52" className="mr-2 bg-orange-300 p-1 rounded-md" />
              <div className='flex flex-col justify-center'>
                <p>Git</p>
                <p className='text-sm'>Tool for version control.</p>
              </div>
            </div>
          </div>
          <div className='w-72'>
            <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640]">
              <NodejsOriginal size="52" className="mr-2 bg-green-300 p-1 rounded-md" />
              <div className='flex flex-col justify-center'>
                <p>Node.js</p>
                <p className='text-sm'>JavaScript for servers.</p>
              </div>
            </div>
            <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640]">
              <ReactOriginal size="52" className="mr-2 bg-blue-600 p-1 rounded-md" />
              <div className='flex flex-col justify-center'>
                <p>React</p>
                <p className='text-sm'>A JavaScript UI library.</p>
              </div>
            </div>
            <div className="outline outline-1 rounded-md flex p-2 mb-5 bg-[#313640]">
              <AstroOriginal size="52" className="mr-2 bg-orange-300 p-1 rounded-md" />
              <div className='flex flex-col justify-center'>
                <p>Astro</p>
                <p className='text-sm'>Framework for static sites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
