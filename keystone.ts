// keystone.ts

import { config } from "@keystone-6/core";
import { createAuth } from "@keystone-6/auth";
import { statelessSessions } from "@keystone-6/core/session";
import { lists } from "./src/keystone/schema";
import dotEnvLoad from "dotenv-load";

dotEnvLoad();

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: { fields: ["email", "password", "isAdmin"] },
  sessionData: 'isAdmin'
});

const session = statelessSessions({
  secret:
    (process.env.SESSION_SECRET as string) ||
    "a;slkdfj[09hj2[0i3nf;lkan;sdilfj;alisdj;flk3nr;l23knr;'o23ro'ij23r;oj",
});

export default withAuth(
  config({
    db: { provider: "sqlite", url: "file:./app.db" },
    server: {
      port: 1234,
    },
    lists,
    session,
  })
);
