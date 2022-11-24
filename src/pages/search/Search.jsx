import NavBar from "../home/NavBar";
import SearchPopup from "./SearchPopup";
import SearchList from "./SearchList";
import Form from "../home/Form";
import Footer from "../home/Footer";
import { NAVBAR, DUMMY_FOOTER, DUMMY_SEARCH } from "../home/shared/homapage";

const Search = () => {
  return (
    <div>
      <NavBar navbar={NAVBAR} />
      <SearchPopup />
      <SearchList search={DUMMY_SEARCH} />
      <Form />
      <Footer footer={DUMMY_FOOTER} />
    </div>
  );
};

export default Search;
