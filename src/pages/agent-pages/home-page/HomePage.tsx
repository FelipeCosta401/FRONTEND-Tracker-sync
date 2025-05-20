import {
  Accordion
} from "@/components/ui/accordion";

import NewMovementSection from "./new-movement-section/NewMovementSection";

const HomePage = () => {
  return (
    <main>
      <Accordion collapsible type="single">
        <NewMovementSection />
      </Accordion>
    </main>
  );
};

export default HomePage;
