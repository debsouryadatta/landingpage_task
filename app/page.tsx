import { Hero } from '@/components/hero';
import { QuickFacts } from '@/components/quick-facts';
import { RequestConsideration } from '@/components/request-consideration';
import { WhyUs } from '@/components/why-us';
import { ClientTestimonials } from '@/components/client-testimonials';
import { Franchising } from '@/components/franchising';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <RequestConsideration />
      <QuickFacts />
      <Franchising />
      <ClientTestimonials />
      <WhyUs />
      <Footer />
    </>
  );
}
