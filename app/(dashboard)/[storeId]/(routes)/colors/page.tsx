import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { ColorsClient } from "./_components/client";
import { ColorColumn } from "./_components/columns";

const ColorsPage = async ({ params }: { params: { colorId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.colorId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default ColorsPage;
