import RustOriginal from "devicons-react/lib/icons/RustOriginal";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import GithubactionsOriginal from "devicons-react/lib/icons/GithubactionsOriginal";
import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";
import TailwindcssOriginal from "devicons-react/lib/icons/TailwindcssOriginal";
import GitOriginal from "devicons-react/lib/icons/GitOriginal";
import NodejsOriginal from "devicons-react/lib/icons/NodejsOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import AstroOriginal from "devicons-react/lib/icons/AstroOriginal";

function TechnologyCard({ icon: Icon, title, description, link, bg }: any) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="outline rounded-md flex p-2 backdrop-blur-md transition-all duration-100 hover:scale-105">
        <Icon size="52" className={`mr-2 p-1 rounded-md ${bg}`} />
        <div className="flex flex-col justify-center">
          <p>{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}

const technologies = [
  { icon: RustOriginal, title: "Rust", description: "Fast, safe system language.", link: "https://www.rust-lang.org/", bg: "bg-gray-400" },
  { icon: PythonOriginal, title: "Python", description: "Simple, versatile language.", link: "https://www.python.org/", bg: "bg-blue-300" },
  { icon: GithubactionsOriginal, title: "GitHub Actions", description: "Automated CI/CD pipelines.", link: "https://github.com/features/actions", bg: "bg-blue-300" },
  { icon: TypescriptOriginal, title: "TypeScript", description: "JavaScript, but with types.", link: "https://www.typescriptlang.org/", bg: "bg-blue-300" },
  { icon: TailwindcssOriginal, title: "Tailwind CSS", description: "Utility-first CSS styling.", link: "https://tailwindcss.com/", bg: "bg-teal-200" },
  { icon: GitOriginal, title: "Git", description: "Tool for version control.", link: "https://git-scm.com/", bg: "bg-orange-300" },
  { icon: NodejsOriginal, title: "Node.js", description: "JavaScript for servers.", link: "https://nodejs.org/en", bg: "bg-green-300" },
  { icon: ReactOriginal, title: "React", description: "A JavaScript UI library.", link: "https://react.dev/", bg: "bg-blue-600" },
  { icon: AstroOriginal, title: "Astro", description: "Framework for static sites.", link: "https://astro.build/", bg: "bg-orange-300" },
];

export default function Technologies() {
  return (
    <div className="bg-black/30 py-12 tracking-tighter">
      <div className="text-white max-w-4xl mx-auto font-custom">
        <p className="text-4xl mb-10 font-bold text-left">Technologies</p>
        <div className="grid grid-cols-1 mx-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

