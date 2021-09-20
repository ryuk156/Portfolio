/* eslint-disable react/no-unescaped-entities */
import Board from "../Board/Board";

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
       
      </div>
    </div>
  );
};
export default Container;
