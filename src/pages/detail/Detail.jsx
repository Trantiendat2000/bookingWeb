import NavBar from "../home/NavBar";
import DetailAdress from "./DetailAdress";
import DetailList from "./DetailList";
import DetailInfo from "./DetailInfo";
import Form from "../home/Form";
import Footer from "../home/Footer";
import { NAVBAR, DUMMY_FOOTER, DUMMY_DETAIL } from "../home/shared/homapage";

const Detail = () => {
  return (
    <div>
      <NavBar navbar={NAVBAR} />
      <DetailAdress adress={DUMMY_DETAIL} />
      {DUMMY_DETAIL.map((photo, index) => {
        return <DetailList list={photo} key={index} />;
      })}
      <DetailInfo info={DUMMY_DETAIL} />
      <Form />
      <Footer footer={DUMMY_FOOTER} />
    </div>
  );
};

export default Detail;
