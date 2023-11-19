import "./App.css";
import { TwitterFollowCard } from "./twitterFollowCard.jsx";

export function App() {
  const showSome = (text) => <span>{text}</span>

  return (
    <section className="App">
      <TwitterFollowCard showSome={showSome} userName="eduardyan">
        Eduard Yan
      </TwitterFollowCard>

      <TwitterFollowCard showSome={showSome} userName="midudev">
        Midudev
      </TwitterFollowCard>

      <TwitterFollowCard showSome={showSome} userName="elon">
        Elon Musk
      </TwitterFollowCard>

      <TwitterFollowCard showSome={showSome} userName="oscar">
        Oscar
      </TwitterFollowCard>
    </section>
  );
}
