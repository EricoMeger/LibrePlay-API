import 'dotenv/config'
import app from "./server";

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});