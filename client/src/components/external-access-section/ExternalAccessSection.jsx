import "./ExternalAccessSection.css";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

const ExternalAccessSection = ({ id }) => {
  return (
    <div className="external-access-section">
      <Link
        className="external-access-section__link"
        to={`/character/${id}`}
      >{`http://10.129.224.165:3000/character/${id}`}</Link>
      <div className="external-access-section__link_qr-code">
        <QRCode
          size={150}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={`http://10.129.224.165:3000/character/${id}`}
          viewBox={`0 0 150 150`}
        />
      </div>
    </div>
  );
};

export default ExternalAccessSection;
