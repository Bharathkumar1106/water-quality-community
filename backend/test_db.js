const db = require('./config/db');

(async () => {
    try {
        console.log("Testing connection...");
        await db.pool.execute("SELECT 1");
        console.log("Connection successful!");
        process.exit(0);
    } catch (e) {
        console.error("DB Error:", e.message);
        process.exit(1);
    }
})();
