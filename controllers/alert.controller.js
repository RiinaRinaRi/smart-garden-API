const db = require("../config/db");
exports.getAll = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM alerts ORDER BY created_at DESC");
  res.json(rows);
};
