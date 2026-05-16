import { Category } from "@/types/category.types";
import { TableCell, TableRow } from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";

const CategoryTable = ({ category }: { category: Category }) => {
  const { id, name } = category;
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell className="text-right flex items-center gap-2 justify-end">
        <SquarePen
          // onClick={handleOpen}
          className="w-6 h-6 cursor-pointer bg-slate-200 p-1 rounded"
        />
        <Trash2
          // onClick={handleDeleteAvailability}
          className={`w-6 h-6 cursor-pointer bg-red-100 text-red-600 p-1 rounded`}
        />

        {/* <UpdateAvailabilityModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          available={available}
        /> */}
      </TableCell>
    </TableRow>
  );
};

export default CategoryTable;
