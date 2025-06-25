import CompanionCard from '@/components/CompanionCard';
import CompanionList from '@/components/CompanionList';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Section } from 'lucide-react';
import React from 'react';

const Page = () => {
  return (
    <>
      <h1 className="text-2xl underline my-3">Popular Companions</h1>

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
        <CompanionList />
        <CTA />
      </section>
    </>
  );
};

export default Page;
