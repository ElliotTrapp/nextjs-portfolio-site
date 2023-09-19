import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  useActiveSectionContext,
  SectionName,
} from "@/components/active-section-context";

export function useSectionInView(SectionName: SectionName) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [SectionName, inView, setActiveSection, timeOfLastClick]);
  return ref;
}
