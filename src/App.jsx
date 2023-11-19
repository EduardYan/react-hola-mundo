import "./App.css";
import { TwitterFollowCard } from "./twitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="eduardyan" name="EduardYan">
        Eduard Yan
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev" name="Midudev">
        Midudev
      </TwitterFollowCard>

      <TwitterFollowCard userName="elon" name="Elon Musk">
        Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard userName="oscar" name="Oscar">
        Oscar
      </TwitterFollowCard>
    </section>
  );
}
