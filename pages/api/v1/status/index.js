import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();

  const dbVersionResult = await database.query("SHOW server_version;");
  const dbVersionValue = dbVersionResult.rows[0].server_version;
  const dbMaxConnResult = await database.query("SHOW max_connections;");
  const dbMaxConnValue = dbMaxConnResult.rows[0].max_connections;
  const dbName = process.env.POSTGRES_DB;

  const dbOpenedConnResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [dbName],
  });
  const dbOpenedConnValue = dbOpenedConnResult.rows[0].count;

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        name: dbName,
        version: dbVersionValue,
        max_connections: parseInt(dbMaxConnValue),
        opened_connections: dbOpenedConnValue,
      },
    },
  });
}

export default status;
