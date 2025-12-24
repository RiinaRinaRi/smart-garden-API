const db = require("../config/db");
exports.updateStatus = async (deviceId) => {
  await db.query(
    "UPDATE devices SET status='online', last_seen=NOW() WHERE device_id=?",
    [deviceId]
  );
};
exports.getAll = async () => {
  const [rows] = await db.query("SELECT * FROM devices");
  return rows;
};
