import HeroSection from '@/components/sections/HeroSection';
import PracticeAreasSection from '@/components/sections/PracticeAreasSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import NewsCoverageSection from '@/components/sections/NewsCoverageSection';
import TeamSection from '@/components/sections/TeamSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <PracticeAreasSection />
      </div>
      <StatisticsSection />
      <div id="news">
        <NewsCoverageSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="about">
        <BlogSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
