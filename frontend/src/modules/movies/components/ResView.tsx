import type { Restaurant } from "@/types/res";
const ResView = ({ res }: { res: Restaurant; onClick: () => void }) => {
  return (
    <a className="text-xl  mb-2 flex items-center gap-1">
      {res.name} - - {res.borough}-- {res.cuisine} -- {res.address.building}{" "}
      {res.address.street}
    </a>
  );
};

export { ResView };
