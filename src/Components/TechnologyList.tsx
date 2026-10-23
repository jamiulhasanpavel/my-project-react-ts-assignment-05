import type { Technology } from "../App";
import TechnologyCards from "../data/Technologies";

function TechnologyList({ onAdd }: { onAdd: (technology: Technology) => void }) {
  return <TechnologyCards onAdd={onAdd} />;
}

export default TechnologyList;