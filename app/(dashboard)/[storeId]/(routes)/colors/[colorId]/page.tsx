import prismadb from "@/lib/prismadb";

import { ColorForm } from "./components/color-form";

import { generate12ByteId } from "@/lib/utils";

const ColorPage = async ({
  params
}: {
  params: { colorId: string }
}) => {
      // Check colors ID on params
      const checkParamIdForColors = (params: any) => {
        if (params?.colorId === "new") {
            const id = generate12ByteId(12);
            return id;
        }
        return params?.color;
    }

    const color = await prismadb.color.findUnique({
        where: {
            id: checkParamIdForColors(params)
        }
    });



  // const color = await prismadb.color.findUnique({
  //   where: {
  //     id: params.colorId
  //   }
  // });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
}

export default ColorPage;
