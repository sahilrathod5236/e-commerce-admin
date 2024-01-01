import prismadb from "@/lib/prismadb";

import { BillboardForm } from "./_components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  let billboard;

  if (params.billboardId.length >= 12) {
    billboard = await prismadb.billboard.findUnique({
      where: {
        id: params.billboardId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm
          // @ts-ignore
          initialData={billboard}
        />
      </div>
    </div>
  );
};

export default BillboardPage;
