import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  checkbox,
  json,
  password,
  relationship,
  text,
} from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

type Session = {
  data: {
    id: string;
    isAdmin: boolean;
  };
};

const isAdmin = ({ session }: { session?: Session }) =>
  session?.data.isAdmin ?? false;

export const lists = {
  User: list({
    access: {
      operation: {
        query: allowAll,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
      },
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ isIndexed: "unique", validation: { isRequired: true } }),
      password: password({ validation: { isRequired: true } }),
      posts: relationship({ ref: "Post.author", many: true }),
      isAdmin: checkbox({ defaultValue: false }),
    },
  }),
  Post: list({
    access: {
      operation: {
        query: allowAll,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
      },
    },
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
    access: {
      operation: {
        query: allowAll,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
      },
    },
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
      technologies: json({ defaultValue: [] }),
      siteUrl: text(),
      codeUrl: text(),
    },
  }),
  Page: list({
    access: {
      operation: {
        query: allowAll,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
      },
    },
    fields: {
      name: text({ isIndexed: "unique", validation: { isRequired: true } }),
      headerText: text(),
      aboutText: document({
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
    },
  }),
};