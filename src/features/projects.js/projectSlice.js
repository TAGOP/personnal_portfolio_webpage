import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:0,
        title:"Dr.Norman Borlaug",
        liveLink:"https://tagopig.github.io/dr-norman-borlaug/",
        githubLink:"https://github.com/tagopig/dr-norman-borlaug",
        picture:"imgs/dr-norman-borlaug.png"
    },
    {
        id:1,
        title:"Dumbo Form",
        liveLink:" https://tagopig.github.io/dumbo-form/",
        githubLink:"https://github.com/tagopig/dumbo-form",
        picture:"imgs/dumbo-form.png"
    },
    {
        id:2,
        title:"Original Trambones",
        liveLink:"https://tagopig.github.io/original-trambones/",
        githubLink:"https://github.com/tagopig/original-trambones",
        picture:"imgs/original-trambones.png"
    },
    {
        id:3,
        title:"JS Documentation",
        liveLink:"https://tagopig.github.io/js-documentation/",
        githubLink:"https://github.com/tagopig/js-documentation",
        picture:"imgs/js-documentation.png"
    },
    {
        id:4,
        title:"Job Filter",
        liveLink:"https://tagopig.github.io/job-filter/",
        githubLink:"https://github.com/tagopig/job-filter",
        picture:"imgs/job-filter.png"
    },
    {
        id:5,
        title:"FlagoMeme",
        liveLink:"https://tagopig.github.io/FlagoMeme/",
        githubLink:"https://github.com/tagopig/FlagoMeme",
        picture:"imgs/flago-meme.png"
    },
    {
        id:6,
        title:"Free Trial",
        liveLink:"https://tagopig.github.io/free-trial/",
        githubLink:"https://github.com/tagopig/free-trial",
        picture:"imgs/free-trial.png"
    },
    {
        id:7,
        title:"React Facts",
        liveLink:"https://tagopig.github.io/react-facts/",
        githubLink:"https://github.com/tagopig/react-facts",
        picture:"imgs/react-facts.png"
    },
    {
        id:8,
        title:"Quizzical Trivia",
        liveLink:"https://tagopig.github.io/quizzical-trivia/",
        githubLink:"https://github.com/tagopig/quizzical-trivia",
        picture:"imgs/quizzical-trivia.png"
    },

]

const projectSlice = createSlice({
    name:"projectSlice",
    initialState,
})

export default projectSlice.reducer;
















