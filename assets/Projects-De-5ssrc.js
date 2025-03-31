import{a as i,j as e}from"./index-CymnIXyo.js";const h=({closeModal:t,projectUrl:r})=>{const s=i.useRef(null);return i.useEffect(()=>{const o=n=>{s.current&&!s.current.contains(n.target)&&t()};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[t]),e.jsx("div",{className:"font-manrope fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50",children:e.jsxs("div",{ref:s,className:"bg-white p-4 rounded-lg w-10/12 md:w-10/12 relative",children:[e.jsx("button",{className:"absolute top-2 right-2 text-xl font-bold text-black",onClick:t,children:"×"}),e.jsx("h2",{className:"text-xl text-black mb-4",children:"Project Showcase"}),e.jsx("iframe",{src:r,className:"w-full h-[60vh] rounded-lg",title:"Project Demo"})]})})},a=({projectUrl:t,title:r,description:s,image_url:o,alt:n,preview:c})=>{const[d,l]=i.useState(!1),m=()=>{l(!0)},p=()=>{l(!1)};return e.jsxs("div",{children:[e.jsxs("div",{className:"card bg-black/30 backdrop-blur-sm w-96 h-[30rem] drop-shadow-lg outline-white text-white",children:[e.jsx("img",{className:"min-h-[14rem] max-h-[14rem] object-cover overflow-hidden rounded-t-lg object-top",src:o,alt:n}),e.jsxs("div",{className:"card-body",children:[e.jsx("h2",{className:"card-title",children:r}),e.jsx("p",{children:s}),e.jsx("div",{className:"card-actions justify-end",children:e.jsx("button",{onClick:m,className:"btn btn-outline disabled:btn-disabled",disabled:!c,children:"Open Preview"})})]})]}),d&&e.jsx(h,{closeModal:p,projectUrl:t})]})},f=()=>e.jsx("div",{className:"min-h-[calc(100vh-240px)]",children:e.jsx("div",{className:"p-10",children:e.jsxs("div",{className:"flex gap-8 justify-center flex-wrap",children:[e.jsx(a,{projectUrl:"https://laina-de.fi",title:"Laina",description:`Laina is a decentralized lending and borrowing platform offering low fees and trustless transactions.
                  Built on Stellar's smart contract platform, Soroban, it uses Rust for smart contracts.
                  The front end, developed with React and Astro, connects to the blockchain via TypeScript binding RPC calls.
`,image_url:"/project avatar non clip border.png",preview:!0}),e.jsx(a,{projectUrl:"https://github.com/Teolhyn/photography-portfolio-platform",title:"Custom Homeassistant UI",description:"Still in very early stages. Custom UI for my own home automation. Connected to Home Assistant through websocket.",image_url:"/homeassistant.png",preview:!0}),e.jsx(a,{projectUrl:"https://draftphotography.netlify.app",title:"Photography portfolio",description:`Still in very early stages. Custom photography portfolio built on React using Contentful as headless content management system, allowing users to easily
            upload their content without worrying about code.`,image_url:"/photoportfolio.png",preview:!1})]})})});export{f as default};
