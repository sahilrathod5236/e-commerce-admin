"use client";

import { useParams } from "next/navigation";

import { APiAlert } from "@/components/api-alert";

import { useOrigin } from "@/hooks/use-origin";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList = ({ entityName, entityIdName }: ApiListProps) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <APiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <APiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <APiAlert
        title="GET"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <APiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <APiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};
