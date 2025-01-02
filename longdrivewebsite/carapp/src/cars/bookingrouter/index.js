


import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import InstantBooking from '../booking/index'; // Path to your component
import Form1 from "../form/index";

// import Details from "../cards/index";
function App4() {
  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<InstantBooking />} />
          <Route path="/form1" element={<Form1 />} />
        
        </Routes>
      </div>
    </Router>
  );
}
export default  App4