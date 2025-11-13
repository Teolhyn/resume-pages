import BlogPost from "../components/BlogPost";

function Blogs() {
  return (
    <BlogPost
      title="My First Quarter as an Entrepreneur"
      date={new Date('2025-07-05')}
      content={
        <div>
          <p>It's been three months since I officially became an entrepreneur. I wanted to write a short recap of how it started, what I expected, what I've learned, and how I feel about it now.</p>

          <h2 className="text-lg font-bold mb-2 mt-6">How it all started</h2>
          <p>It really began with Laina. I got funding from the Stellar Community Fund earlier this year to build a DeFi lending protocol on Soroban. That gave me the runway and motivation to go all in—though in practice I started part-time.</p>

          <p>We decided to create two separate companies. One for the Laina project and future product ideas, and another for freelance work. It felt cleaner that way: keep experiments and long-term bets separate from cash flow.</p>

          <p>I also had a strong burn to do freelance software engineering. Not just for income, but because I enjoy it—and it lets me stay sharp while figuring out what to build next.</p>

          <h2 className="text-lg font-bold mb-2 mt-6">Why I decided to start part-time</h2>
          <p>Simple reasons.</p>

          <p>I have a child. I have a mortgage. I like stability, and I wasn't ready to drop everything on day one.</p>

          <p>Do I even need to go further?</p>

          <h2 className="text-lg font-bold mb-2 mt-6">What I expected</h2>
          <p>I thought a lot of the business side would be hard—founding the companies, dealing with taxes, accounting, invoicing, and so on. Turns out, none of that was as painful as I expected. Not easy, but manageable.</p>

          <p>Ironically, I assumed investing company funds into DeFi would be smooth, since I'm already deep in that world. That part ended up being more complicated than I thought—especially from an accounting and reporting perspective.</p>

          <h2 className="text-lg font-bold mb-2 mt-6">What I've learned</h2>
          <p>Everything costs money. Everyone wants a piece. Software, tools, banks, accountants, platforms—nothing is free.</p>

          <p>That said, some things are worth paying for. I still believe in a lean strategy, but the reality is that even the leanest company needs to spend. And when you do spend, it better be on things that keep the cash flowing or save real time.</p>

          <p>There's no escaping the need for steady income. Freelance work has been a good anchor, but I can see how easy it would be to get distracted or burn out if I didn't have a focus.</p>

          <h2 className="text-lg font-bold mb-2 mt-6">How it went</h2>
          <p>Overall, I'm happy. The freelance side is working. Laina is progressing. And thanks to a good accountant, even the DeFi side of company finances is in order.</p>

          <p>I'm still excited. Still learning. Open to new challenges.</p>

          <p>With ❤️,<br />Teemu</p>
        </div>
      }
      author="Teemu Hynnä"
    />
  );
}

export default Blogs;
