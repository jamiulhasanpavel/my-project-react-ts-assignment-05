import TechnologyCards from "../data/Technologies";

export type Technology = {
  name: string;
  description: string;
};

function TechnologyList({ onAdd }: { onAdd: (technology: Technology) => void }) {
  return <TechnologyCards onAdd={onAdd} />;
}

export default TechnologyList;