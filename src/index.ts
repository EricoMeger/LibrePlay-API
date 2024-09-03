import 'dotenv/config'
import app from "./interfaces/http/expressAdapter";

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});