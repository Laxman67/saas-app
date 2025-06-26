import CompanionCard from '@/components/CompanionCard';
import CompanionList from '@/components/CompanionList';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { recentSessions } from '@/constants';
import { Section } from 'lucide-react';
import React from 'react';

const Page = () => {
  return (
    <div className="m-6">
      <h2 className="font-bold text-3xl">Popular Companions</h2>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="The Flower of Sand"
          topic="Neutral Energy"
          subject="Literature"
          duration={45}
          color="#ffda56"
        />

        <CompanionCard
          id="456"
          name="The Edge of Time"
          topic="Quantum Mysteries"
          subject="Physics"
          duration={60}
          color="#7ed6df"
        />

        <CompanionCard
          id="789"
          name="Journey to the Core"
          topic="Human Anatomy"
          subject="Biology"
          duration={30}
          color="#ff6b81"
        />
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </div>
  );
};

export default Page;
