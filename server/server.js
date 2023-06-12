const express = require("express");
const app = express();
const port = 8081;
const knex = require("knex")(require("./knexfile")[process.env.NODE_ENV || "development"]);

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE");
    next();
});

app.get("/", async (req, res) => {
    const searchTerm = req.query.searchTerm;

    try {
        const movies = await knex("movies").where("title", "ilike", `%${searchTerm}%`);
        console.log("movies", movies);
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/movies", (req, res) => {
    knex("movies")
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ Error: "This movie cannot be retrieved right now..." });
        });
});

app.get("/movies/:id", (req, res) => {
    const input = req.params.id;

    knex("movies")
        .where("id", input)
        .then((data) => {
            if (data.length > 0) {
                return res.status(200).json(data);
            } else {
                return res.status(404).json({ message: `Movie not found at id: ${input}. Please try again with a new id.` });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: `Cannot be gotten right now, try again later. Error: ${err}` });
        });
});

app.get("/movies/:id", (req, res) => {
    const input = req.params.id;

    knex("movies")
        .where("id", input)
        .then((data) => {
            if (data.length > 0) {
                return res.status(200).json(data);
            } else {
                return res.status(404).json({ message: `Movie not found at id: ${input}. Please try again with a new id.` });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: `Cannot be gotten right now, try again later. Error: ${err}` });
        });
});

app.post("/movies", (req, res) => {
    const body = req.body;
    console.log("body: ", body);

    knex("movies")
        .insert(body)
        .then(() => res.status(201).json({ message: `You added ${body.title}!` }))
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: `You can't post a movie ${body.title}` });
        });
});

app.put("/movies/:id", (req, res) => {
    const { name, secure_pass, email } = req.body;
    let queryValue = req.params.id;

    knex("movies")
        .where("id", queryValue)
        .update({ name, secure_pass, email })
        .then(() => res.status(201).json({ message: "You updated the movie!" }))
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: "There was an error updating the movie!" });
        });
});

app.patch("/movies/:id", (req, res) => {
    const body = req.body;
    let queryValue = req.params.id;

    knex("movies")
        .where("id", queryValue)
        .update(body)
        .then(() => res.status(201).json({ message: `You updated the movie!` }))
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: `There was an error updating ${body.name}!` });
        });
});

app.delete("/movies/:id", (req, res) => {
    const body = req.body;
    let queryValue = req.params.id;

    knex("movies")
        .where("id", queryValue)
        .del()
        .then(() => res.status(200).json({ message: `You deleted a movie!` }))
        .catch((err) => {
            res.status(500).json({
                message: `Movie cannot be deleted right now, try again later. Error: ${err}`,
            });
        });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
