import Blog from "./Components/Blog";
import HeroSection from "./Components/HeroSection";
import NewArrrivals from "./Components/NewArrrivals";
import TableSection from "./Components/TableSection";
import TopPicks from "./Components/TopPicks";
import FollowUs from "./Components/FollowUs";


export default function HomePage() {
  return (
    <main>
      <HeroSection/>
      <TableSection/>
      <TopPicks/>
      <NewArrrivals/>
      <Blog/>
      <FollowUs/>
    </main>
  );
}
