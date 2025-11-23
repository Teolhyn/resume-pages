import ProjectPage from "../components/ProjectPage";

const ElectricityPriceCalculator = () => {
  const repo_url = "https://github.com/Teolhyn/kumpi-sahko";
  const website_url = "https://kumpisähkö.fi";
  const title = "Electricity Price Calculator"

  return (
    <ProjectPage title={title} repo_url={repo_url} website_url={website_url} header_img='/kumpisahko.png'>
      <h2 className='text-lg mb-2 mt-6'>Introduction</h2>
      <p className="font-light mb-2">An electricity price calculator (<a href='https://www.xn--kumpishk-5za6p.fi/' target='_blank' rel='noopener noreferrer' className='underline'>kumpisähkö.fi</a>). Easily find out which electricity contract, spot-priced or fixed, saves you more based on your real electricity consumption data.
        This app helps Finnish consumers make smarter energy decisions using Fingrid Datahub data.</p>
      <p className='font-light mb-2'>I built this web app to a) try out the <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer' className='underline'>Next.JS</a> full-stack framework and b) to see how fast I can ship a product. Due to this I used PaaS only. The app is hosted on <a href='https://vercel.com/' target='_blank' rel='noopener noreferrer' className='underline'>Vercel</a> and the database is running on <a href='https://neon.com/' target='_blank' rel='noopener noreferrer' className='underline'>Neon</a>. </p>
      <h2 className='text-lg mb-2 mt-6'>Nerd Section 🤓</h2>
      <p className='font-light mb-2'>Like mentioned, the app is built using the Next.JS full-stack framework and it has a postgress database running in Neon. The backend uses a (Vercel) cron job to fetch electricity spot prices every night from the Entso-e open data portal. It then stores the data to Neon. </p>
      <p className='font-light mb-2'>Users use their electricity consumption data that is downloadable from Fingrid datahub and the backend is used to calculate price of consumption, total consumption, and average spot price. With these values it is still possible to adjust e.g. the margin of spot price or the constant price of electricity to get live (client side calculated) results, which results in good UX.</p>
    </ProjectPage>
  );
};

export default ElectricityPriceCalculator;
