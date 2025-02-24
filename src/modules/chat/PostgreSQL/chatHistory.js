import pool from "./database.js";

export async function saveChatHistory(userId, messages) {
  const historyJson = JSON.stringify(messages);
  await pool.query(
    "INSERT INTO chat_history (user_id, history) VALUES ($1, $2) ON CONFLICT (user_id) DO UPDATE SET history = $2",
    [userId, historyJson]
  );
}

export async function loadChatHistory(userId) {
  const result = await pool.query("SELECT history FROM chat_history WHERE user_id = $1", [userId]);
  return result.rows.length ? JSON.parse(result.rows[0].history) : [];
}

export async function clearChatHistory(userId) {
  await pool.query("DELETE FROM chat_history WHERE user_id = $1", [userId]);
}
