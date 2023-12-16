import "./FacebookPage.css";
import { FacebookProvider, Page } from "react-facebook";

const FacebookPage = () => {
  return (
    <FacebookProvider appId="61554686402211">
      <Page
        href="https://www.facebook.com/profile.php?id=61554686402211"
        tabs="timeline"
      />
    </FacebookProvider>
  );
};

export default FacebookPage;
