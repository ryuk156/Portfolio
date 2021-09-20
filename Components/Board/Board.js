import Card from "../Card/Card";

const Board = ({cardsData}) => {
  return (
    <div className="board">
      <div className="board-content">
        {
         cardsData && cardsData.map((card)=>{
            return(
              <Card key={card.id} title={card.title} id={card.id}  />
            )
          })
        }
       
      </div>
    </div>
  );
};

export default Board;
