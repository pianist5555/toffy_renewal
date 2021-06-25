import axios from 'axios';

export const getGameList = id =>
    axios.get("/cms/api/tfgame/").catch(err => console.log(err))