type Technology = {
  title: string,
  description: string,
  link: string,
};

function TechnologyCard({ title, description, link }: Technology) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="font-manrope flex p-2 transition-all duration-100 hover:scale-105">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-lg">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}

const technologies = [
  { title: "Rust", description: "Fast, safe system language.", link: "https://www.rust-lang.org/", bg: "bg-gray-400" },
  { title: "Python", description: "Simple, versatile language.", link: "https://www.python.org/", bg: "bg-blue-300" },
  { title: "GitHub Actions", description: "Automated CI/CD pipelines.", link: "https://github.com/features/actions", bg: "bg-blue-300" },
  { title: "TypeScript", description: "JavaScript, but with types.", link: "https://www.typescriptlang.org/", bg: "bg-blue-300" },
  { title: "Tailwind CSS", description: "Utility-first CSS styling.", link: "https://tailwindcss.com/", bg: "bg-teal-200" },
  { title: "Git", description: "Tool for version control.", link: "https://git-scm.com/", bg: "bg-orange-300" },
  { title: "Node.js", description: "JavaScript for servers.", link: "https://nodejs.org/en", bg: "bg-green-300" },
  { title: "React", description: "A JavaScript UI library.", link: "https://react.dev/", bg: "bg-blue-600" },
  { title: "Astro", description: "Framework for static sites.", link: "https://astro.build/", bg: "bg-orange-300" },
];

export default function Technologies() {
  return (
    <div className="tracking-tighter">
      <div className="text-black max-w-4xl min-w-2xl mx-10 md:mx-auto font-manrope bg-white outline-3 outline-black p-10 shadow-xl/50">
        <p className="text-4xl mb-10 font-bold text-left">&lt;Technologies /&gt;</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} {...tech} />
          ))}
        </div>
      </div>
    </div >
  );
}

