import prismadb from "@/lib/prismadb";

import { ColorForm } from "./_components/color-form";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  let color;

  if (params.colorId.length >= 12) {
    color = await prismadb.color.findUnique({
      where: {
        id: params.colorId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm
          // @ts-ignore
          initialData={color}
        />
      </div>
    </div>
  );
};

export default ColorPage;
