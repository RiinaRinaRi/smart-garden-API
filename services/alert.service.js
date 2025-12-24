const db = require("../config/db");
exports.check = async (deviceId, data) => {
  if (data.ph > 7) {
    await db.query(
      "INSERT INTO alerts(device_id, type, value) VALUES (?, 'PH_HIGH', ?)",
      [deviceId, data.ph]
    );
  }
};
