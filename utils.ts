export const gql = ([content]: TemplateStringsArray) => content;
require("dotenv").config();

export async function fetchGraphQL(
  query: string,
  variables?: Record<string, any>
) {
  return fetch(`${process.env.HOST_BASE_URL}/api/graphql`, {
    method: "POST",
    body: JSON.stringify({ query, variables }),
    headers: { "Content-Type": "application/json" },
  })
    .then((x) => x.json())
    .then(({ data, errors }) => {
      if (errors) {
        throw new Error(
          `GraphQL errors occurred:\n${errors
            .map((x: any) => x.message)
            .join("\n")}`
        );
      }
      return data;
    });
}
