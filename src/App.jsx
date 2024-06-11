import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HelloWorld from "./pages/HelloWorld/HelloWorld";
import Test from "./pages/Test/Test";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/hello" element={<HelloWorld />} />
                <Route path="/" element={<Test />} />
            </Routes>
        </>
    );
}

export default App;
