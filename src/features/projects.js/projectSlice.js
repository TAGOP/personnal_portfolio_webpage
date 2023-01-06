import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:0,
        title:"FlagoMeme",
        liveLink:"",
        githubLink:"https://github.com/tagopig/FlagoMeme",
        picture:""
    },
    {
        id:1,
        title:"Quizzical Trivia",
        liveLink:"https://tagopig.github.io/quizzical-trivia/",
        githubLink:"https://github.com/tagopig/quizzical-trivia",
        picture:"imgs/quizzical-trivia.png"
    },
    {
        id:2,
        title:"My Travel Journey",
        liveLink:"",
        githubLink:"https://github.com/tagopig/my-travel-journal",
        picture:""
    },
]

const projectSlice = createSlice({
    name:"projectSlice",
    initialState,
})

export default projectSlice.reducer;
















