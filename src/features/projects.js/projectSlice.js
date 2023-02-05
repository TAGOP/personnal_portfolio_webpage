import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:0,
        title:"Dr.Norman Borlaug",
        liveLink:"https://taha-khoumani.github.io/dr-norman-borlaug/",
        githubLink:"https://github.com/taha-khoumani/dr-norman-borlaug",
        picture:"imgs/dr-norman-borlaug.png"
    },
    {
        id:6,
        title:"Free Trial",
        liveLink:"https://taha-khoumani.github.io/free-trial/",
        githubLink:"https://github.com/taha-khoumani/free-trial",
        picture:"imgs/free-trial.png"
    },
    {
        id:7,
        title:"React Facts",
        liveLink:"https://taha-khoumani.github.io/react-facts/",
        githubLink:"https://github.com/taha-khoumani/react-facts",
        picture:"imgs/react-facts.png"
    },
    {
        id:1,
        title:"Dumbo Form",
        liveLink:" https://taha-khoumani.github.io/dumbo-form/",
        githubLink:"https://github.com/taha-khoumani/dumbo-form",
        picture:"imgs/dumbo-form.png"
    },
    {
        id:2,
        title:"Original Trambones",
        liveLink:"https://taha-khoumani.github.io/original-trambones/",
        githubLink:"https://github.com/taha-khoumani/original-trambones",
        picture:"imgs/original-trambones.png"
    },
    {
        id:3,
        title:"JS Documentation",
        liveLink:"https://taha-khoumani.github.io/js-documentation/",
        githubLink:"https://github.com/taha-khoumani/js-documentation",
        picture:"imgs/js-documentation.png"
    },
    {
        id:5,
        title:"FlagoMeme",
        liveLink:"https://taha-khoumani.github.io/FlagoMeme/",
        githubLink:"https://github.com/taha-khoumani/FlagoMeme",
        picture:"imgs/flago-meme.png"
    },
    {
        id:4,
        title:"Job Filter",
        liveLink:"https://taha-khoumani.github.io/job-filter/",
        githubLink:"https://github.com/taha-khoumani/job-filter",
        picture:"imgs/job-filter.png"
    },
    {
        id:8,
        title:"Quizzical Trivia",
        liveLink:"https://taha-khoumani.github.io/quizzical-trivia/",
        githubLink:"https://github.com/taha-khoumani/quizzical-trivia",
        picture:"imgs/quizzical-trivia.png"
    },    
    {
        id:9,
        title:"audiophile",
        liveLink:"https://taha-khoumani.github.io/audiophile/",
        githubLink:"https://github.com/taha-khoumani/audiophile",
        picture:"imgs/audiophile.png"
    },

]

const projectSlice = createSlice({
    name:"projectSlice",
    initialState,
})

export default projectSlice.reducer;
















