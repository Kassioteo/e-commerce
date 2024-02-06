const app = require("./app");
const { connection } = require("./Model");
const PORT = 3002;

app.listen(PORT, async () => {
  console.log(`API E-COMMERCE RUNNING ON THE PORT ${PORT}`);
  try {
    const [[result]] = await connection.execute('SELECT "3003" as "DATABASE RUNNING ON THE PORT"')
    console.log(result);
  }catch (err) {
    console.log('DATABASE NO RUNNING');
  }
});
