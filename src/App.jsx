import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HelloWorld from "./pages/HelloWorld/HelloWorld";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/hello" element={<HelloWorld />} />
            </Routes>
        </>
    );
}

export default App;
