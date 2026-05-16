import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllCategory } from "@/services/category.service";
import CategoryTable from "@/components/table/CategoryTable";
import { Category } from "@/types/category.types";

const AdminCategories = async () => {
  const data = await getAllCategory();
  const categories: Category[] = data?.data;
  console.log(categories);
  return (
    <div className="gird grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-5">
        <Card className="gap-4">
          <CardHeader>
            <CardTitle>All Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category Name</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <CategoryTable key={category.id} category={category} />
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default AdminCategories;
