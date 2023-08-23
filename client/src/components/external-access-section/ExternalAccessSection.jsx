import "./ExternalAccessSection.css";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

const ExternalAccessSection = ({ id, name, ipAddress }) => {
  return (
    <div className="external-access-section">
      <h3 className="external-access-section__header">
        Open {name} card in your device
      </h3>
      <Link
        className="external-access-section__link"
        to={`/character/${id}`}
      >{`http://${ipAddress}:3000/character/${id}`}</Link>
      <div className="external-access-section__link_qr-code">
        <QRCode
          size={150}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={`http://${ipAddress}:3000/character/${id}`}
          viewBox={`0 0 150 150`}
        />
      </div>
    </div>
  );
};

export default ExternalAccessSection;
