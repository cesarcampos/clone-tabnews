function status(req, res) {
  res.status(200).json({ chave: "Tudo OK com o status." });
}

export default status;
