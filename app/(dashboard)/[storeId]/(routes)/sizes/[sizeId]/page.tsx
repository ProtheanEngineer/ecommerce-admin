import prismadb from "@/lib/prismadb";

import { SizeForm } from "./components/size-form";

import { generate12ByteId } from "@/lib/utils";

const SizePage = async ({
  params
}: {
  params: { sizeId: string }
}) => {
      // Check sizes ID on params
      const checkParamIdForSizes = (params: any) => {
        if (params?.sizeId === "new") {
            const id = generate12ByteId(12);
            return id;
        }
        return params?.size;
    }

    const size = await prismadb.size.findUnique({
        where: {
            id: checkParamIdForSizes(params)
        }
    });



  // const size = await prismadb.size.findUnique({
  //   where: {
  //     id: params.sizeId
  //   }
  // });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
}

export default SizePage;
