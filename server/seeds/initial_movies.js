/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("movies").del();
    await knex("movies").insert([
        {
            title: "Harry Potter and the Sorcerer's Stone",
            genre: "Adventure",
            release_date: "2001-11-14",
            cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108fdcc83e78192f1bd2084709a2e7d1_71580467-f819-4a5e-87b0-94b412bbc81a_500x749.jpg?v=1573593624",
        },
        { title: "Harry Potter and the Chamber of Secrets", genre: "Adventure", release_date: "2002-11-14", cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/harry_potter_480x.progressive.jpg?v=1672331659" },
        { title: "Harry Potter and the Prisoner of Azkaban", genre: "Adventure", release_date: "2004-06-04", cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1099297_3802756_500x749.jpg?v=1655239235" },
        { title: "Harry Potter and the Goblet of Fire", genre: "Adventure", release_date: "2005-11-18", cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/718098_2675809_500x749.jpg?v=1658756195" },
        {
            title: "Harry Potter and the Order of the Phoenix",
            genre: "Adventure",
            release_date: "2007-07-11",
            cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6a3bac95eaa32830b4863c9c36af4fb2_c0f1c6d3-4fe5-4441-9c9d-e6c786d294db_500x749.jpg?v=1573615858",
        },
        {
            title: "Harry Potter and the Half-Blood Prince",
            genre: "Adventure",
            release_date: "2009-07-15",
            cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f105221d30cc410e3ff3d7179c1121d7_e8153c9e-2f67-48d4-a42a-c8cdc4b4f5c5_500x749.jpg?v=1573590524",
        },
        { title: "Harry Potter and the Deathly Hallows: Part 1", genre: "Adventure", release_date: "2010-11-19", cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemR85055_jpg_500x749.jpg?v=1665600387" },
        {
            title: "Harry Potter and the Deathly Hallows: Part 2",
            genre: "Adventure",
            release_date: "2011-07-15",
            cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/092b7a0939b87a6501e200fba505518a_1c5315e0-7877-446b-a989-3a798250f27e_500x749.jpg?v=1573651531",
        },
        {
            title: "Fantastic Beats and Where to Find Them",
            genre: "Fantasy",
            release_date: "2016-11-10",
            cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7c2c5dbacea2235f8bf9af4bb597b133_19ff0a29-83ed-431d-8b16-5ea45e85f047_500x749.jpg?v=1573592669",
        },
        {
            title: "Fantastic Beasts: The Crimes of Grindelwald",
            genre: "Fantasy",
            release_date: "2018-11-18",
            cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/fantastic-beasts-the-crimes-of-grindelwald_f1021be5_52046ff6-2caa-4df6-a2d1-544537b0c696_500x749.jpg?v=1677265644",
        },
        {
            title: "Fantastic Beasts: The Secrets of Dumbledore",
            genre: "Fantasy",
            release_date: "2022-04-15",
            cover: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/fantastic-beasts-the-secrets-of-dumbledore_iujucbt1_500x749.jpg?v=1643729048",
        },
    ]);
};
