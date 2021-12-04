import { list } from "@keystone-6/core";
import { password, relationship, text } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export const lists = {
  User: list({
    fields: {
      firstName: text({ validation: { isRequired: true } }),
      lastName: text({ validation: { isRequired: true } }),
      email: text({ isIndexed: "unique", validation: { isRequired: true } }),
      password: password({ validation: { isRequired: true } }),
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
      author: relationship({ ref: "User", many: false }),
    },
  }),
  Project: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      description: text({ validation: { isRequired: true } }),
      siteUrl: text(),
      codeUrl: text(),
    },
  }),
};
