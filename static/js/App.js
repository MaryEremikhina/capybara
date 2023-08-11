import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PAGE1 from "{{url_for('static', filename='js/page1.js')}}";
import PAGE2 from "{{url_for('static', filename='js/page2.js')}}";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/page2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PAGE1 />} />
      <Route path="/page2" element={<PAGE2 />} />
    </Routes>
  );
}
export default App;
