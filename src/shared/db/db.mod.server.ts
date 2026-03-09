import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { relations } from "#/shared/db/db.relations.server";
import * as schema from "#/shared/db/db.schema.server";

interface UnknownPostgresTypes extends Record<
  string,
  postgres.PostgresType<unknown>
> {}

export interface DrizzleDatabaseClient extends ReturnType<
  typeof drizzle<
    typeof schema,
    typeof relations,
    postgres.Sql<UnknownPostgresTypes>
  >
> {}

const SQL_CLIENT_PRODUCTION_OPTIONS: postgres.Options<UnknownPostgresTypes> = {
  /**
   * Disables runtime type fetching from `pg_types`. The postgres.js driver
   * queries this system catalog on first connect to map OIDs to type parsers.
   * Since we don't use custom Postgres types, we skip this query to reduce
   * cold-start latency.
   */
  fetch_types: false,
  /**
   * Limits the connection pool to 5 concurrent connections to keep server-side
   * connection usage predictable.
   */
  max: 5,
};

export const createDrizzleDatabaseClient = (
  dbUrl: string,
): DrizzleDatabaseClient => {
  const queryClient = postgres<UnknownPostgresTypes>(
    dbUrl,
    import.meta.env.PROD ? SQL_CLIENT_PRODUCTION_OPTIONS : undefined,
  );

  return drizzle({
    casing: "snake_case",
    client: queryClient,
    logger: import.meta.env.DEV,
    schema: {
      relations,
      ...schema,
    },
  });
};
