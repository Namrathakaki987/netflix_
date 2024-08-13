// import {configureStore} from "@reduxjs/toolkit"
// import userReducer from "./userSlice.js"
// import movieReducer from "./movieSlice.js";

// const store =configureStore({
//     reducer:{
//         app:userReducer,
//         movie:movieReducer

//     }
// })

// export default store;

import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        app:userReducer,
        movie:movieReducer,
        searchMovie:searchSlice
    }
});
export default store;