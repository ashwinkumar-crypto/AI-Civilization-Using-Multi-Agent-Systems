import { useState } from "react";
import { resourcesData } from "@/data/resources.data";

export function useResources() {
  const [resources] = useState(resourcesData);
  return { resources };
}
