import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  useActiveSectionContext,
  SectionName,
} from "@/context/active-section-context";

export function useSectionInView(
  SectionName: SectionName,
  threshold: number = 0.5,
) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [SectionName, inView, setActiveSection, timeOfLastClick]);
  return ref;
}
