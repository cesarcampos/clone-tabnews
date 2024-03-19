import database from "infra/database.js";

async function status(req, res) {
  const result = await database.query("select 1+1;");
  console.log(result.rows);
  res.status(200).json({ chave: "Tudo OK com o status." });
}

export default status;
