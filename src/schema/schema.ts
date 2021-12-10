import { list } from "@keystone-6/core";
import {
  password,
  relationship,
  text,
} from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ isIndexed: "unique", validation: { isRequired: true } }),
      password: password({ validation: { isRequired: true } }),
      posts: relationship({ ref: "Post.author", many: true }),
    },
  }),
  Post: list({
    fields: {
      title: text({ validation: { isRequired: true } }),
      slug: text({ isIndexed: "unique", isFilterable: true }),
      content: document({
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
      author: relationship({ ref: "User.posts", many: false }),
    },
  }),
  Project: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      shortDescription: text({
        validation: { length: { max: 140 } },
        ui: {
          displayMode: "textarea",
        },
      }),
      description: text({
        validation: { isRequired: true },
        ui: {
          displayMode: "textarea",
        },
      }),
      // TODO: #3 Create custom multi-select field
      // technologies: select({
      //   type: "enum",
      //   options: [
      //     { label: "GraphQL", value: "GRAPHQL" },
      //     { label: "React", value: "REACT" },
      //     { label: "NextJS", value: "NEXTJS" },
      //   ],
      //   ui: {
      //     displayMode: "select",
      //   },
      // }),
      siteUrl: text(),
      codeUrl: text(),
    },
  }),
  Page: list({
    fields: {
      name: text({ isIndexed: "unique", validation: { isRequired: true } }),
      headerText: text(),
      aboutText: text(),
    },
  }),
};
