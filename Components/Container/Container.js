/* eslint-disable react/no-unescaped-entities */
import Board from "../Board/Board";
import Link from "next/link"

const Container = ({content}) => {
  return (
    <div className="content_container">
      <div>
        <div className="start_content">
          Hey!<span className="waving-hand">👋</span>
        </div>
        <div className="intro_content">
          I'm Yash and I'm UI Engineer and an open source contributor
        </div>
        <Board cardsData={content}/>
        <div className="experince-conatiner">
          <Link href={`/experience`}>

        <div className="more-button">More <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></div>
        </Link>
        </div>
        
      </div>
    </div>
  );
};
export default Container;
