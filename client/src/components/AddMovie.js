import { useState } from "react";

const AddMovie = () => {
    const [userInput, setUserInput] = useState({
        title: "",
        genre: "",
        release_date: "",
        cover: "",
    });

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    const saveToDb = () => {
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput),
        };
        fetch("http://localhost:8081/movies", init)
            .then((res) => res.json())
            .then((data) => {
                console.log("Added movie successfully:", data);
            });
    };

    return (
        <>
            <p>Add movie</p>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} />
            <input type="text" name="genre" placeholder="Genre" onChange={handleChange} />
            <input type="date" name="release_date" placeholder="Release Date" onChange={handleChange} />
            <input type="text" name="cover" placeholder="Cover URL" onChange={handleChange} />
            <button type="submit" onClick={saveToDb}>
                Add Movie to DB
            </button>
        </>
    );
};

export default AddMovie;
