import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:0,
        title:"My Travel Journey",
        liveLink:"",
        githubLink:"https://github.com/tagopig/my-travel-journal",
        picture:""
    },
    {
        id:1,
        title:"FlagoMeme",
        liveLink:"https://tagopig.github.io/FlagoMeme/",
        githubLink:"https://github.com/tagopig/FlagoMeme",
        picture:"imgs/FlagoMeme.png"
    },
    {
        id:2,
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
















