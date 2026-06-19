import { useEffect, useState } from "react";

const useActiveSection = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = sectionIds.map((id) =>
      document.getElementById(id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% visible → active
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;