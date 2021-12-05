// keystone.ts

import { config } from "@keystone-6/core";
import { createAuth } from "@keystone-6/auth";
import { statelessSessions } from "@keystone-6/core/session";
import { lists } from "./schema/schema";
import dotEnvLoad from 'dotenv-load';

dotEnvLoad();

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: { fields: ["firstName", "lastName", "email", "password"] },
});

const session = statelessSessions({
  secret: process.env.SESSION_SECRET,
});

export default withAuth(
  config({
    db: { provider: "sqlite", url: "file:./app.db" },
    experimental: {
      generateNextGraphqlAPI: true,
      generateNodeAPI: true,
    },
    server: {
      port: 1234,
    },
    lists,
    session,
  })
);
