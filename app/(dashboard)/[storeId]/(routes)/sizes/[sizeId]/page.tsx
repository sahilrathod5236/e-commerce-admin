import prismadb from "@/lib/prismadb";

import { SizeForm } from "./_components/size-form";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  let size;

  if (params.sizeId.length >= 12) {
    size = await prismadb.size.findUnique({
      where: {
        id: params.sizeId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm
          // @ts-ignore
          initialData={size}
        />
      </div>
    </div>
  );
};

export default SizePage;
