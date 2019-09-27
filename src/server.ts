import app from "./app";
import { PORT } from "./constans/pokeApi.constans";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
