import "./App.css";
import { TwitterFollowCard } from "./twitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="profile.png" name="Eduard Yan" />
      <TwitterFollowCard isFollowing userName="profile.png" name="Pablo Hernández" />
      <TwitterFollowCard isFollowing={false} userName="profile.png" name="Elon Musk" />
      <TwitterFollowCard isFollowing userName="profile.png" name="VanderHart" />
    </section>
  );
}
