
const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const url = `https://${SHOPIFY_STORE_DOMAIN}/api/2026-07/graphql.json`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token":
        SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });

  const responseText = await response.text();

  console.log("Shopify Status:", response.status);
  console.log("Shopify Response:", responseText);

  if (!response.ok) {
    throw new Error(
      `Shopify API error ${response.status}: ${responseText}`
    );
  }

  const data = JSON.parse(responseText);

  if (data.errors) {
    console.error("Shopify GraphQL Errors:", data.errors);

    throw new Error(
      `Shopify GraphQL error: ${JSON.stringify(data.errors)}`
    );
  }

  return data;
}

export async function getPage(handle: string) {
  const query = `
    query GetPage($handle: String!) {
      page(handle: $handle) {
        id
        title
        handle
        body
        bodySummary
        seo {
          title
          description
        }
      }
    }
  `;

  const result = await shopifyFetch<{
    data: {
      page: {
        id: string;
        title: string;
        handle: string;
        body: string;
        bodySummary: string;
        seo: {
          title: string | null;
          description: string | null;
        } | null;
      } | null;
    };
  }>(query, {
    handle,
  });

  return result.data.page;
}