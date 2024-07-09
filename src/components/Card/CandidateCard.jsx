
import { Card} from "antd";

import CandidateImage from "./CandidateImage";
import { Link } from "react-router-dom";

const { Meta } = Card;

// eslint-disable-next-line react/prop-types
const CandidateCard = ({ candidate }) => {
  return (
    <Card
      style={{ width: 300, margin: 16 }}
      cover={
        <CandidateImage
          // eslint-disable-next-line react/prop-types
          imageUrl={candidate.imageUrl}
          altText={`${name}'s avatar`}
        />
      }
      actions={[
        // eslint-disable-next-line react/prop-types
        <Link key="more" to={`/candidates/${candidate.candidateId}`}>
          Thông tin chi tiết
        </Link>,
      ]}
      // eslint-disable-next-line react/prop-types, react/prop-types
      className="group-hover:shadow-lg transition-transform transform duration-300 ease-in-out"><Meta title={candidate.name} description={candidate.role} />
    </Card>
  );
};

export default CandidateCard;
