import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('./Components/HeroSection'));
const TableSection = dynamic(() => import('./Components/TableSection'));
const TopPicks = dynamic(() => import('./Components/TopPicks'));
const NewArrivals = dynamic(() => import('./Components/NewArrivals'));
const Blog = dynamic(() => import('./Components/Blog'));
const FollowUs = dynamic(() => import('./Components/FollowUs'));

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TableSection />
      <TopPicks />
      <NewArrivals />
      <Blog />
      <FollowUs />
    </main>
  );
}