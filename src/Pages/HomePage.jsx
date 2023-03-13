import { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../Components/HomePage/Section";
import { MovieGrid } from "../Components/HomePage/MovieGrid";

export function HomePage() {
    const first = "Descubrir"
  const [sectionToggle, setSectionToggle] = useState({
    first: "Descubrir",
  });
  const handleToggledValue = (section, selectedValue) => {
    setSectionToggle((prev) => ({
      ...prev,
      [section]: selectedValue,
    }));
  };

  return (
    <div>
        <Section
          title="Recomendaciones..."
          items={["Descubrir", "Próximamente"]}
          onToggle={handleToggledValue.bind(null, first)}
          isToggled={sectionToggle.first === "Descubrir" ? false : true}
        >
          <MovieGrid fetch={sectionToggle.first} />
        </Section>
    </div>
  );
}

export default HomePage