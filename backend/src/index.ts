import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/hello", (_, res) => {
    res.json({ message: "Hello from Hydra backend!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
