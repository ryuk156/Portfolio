
import React,{useState} from "react"
import Modal from "../Modal/Modal"

const Card=()=>{

  const [showModal,setShowModal] = useState(false)
   

    return(
        <div className="card" onClick={()=>{setShowModal(!showModal)}}>
          <div className="card-content">
            <div className="card-item-a">
                <img src="/images/me.png" className="card-img" />
            </div>
            <div className="card-item-b">
                  image-info
            </div>
          </div>
       
          {
            showModal===true?(
             <Modal />
            ):(
              ""
            )
          }
          

        </div>
    )
}


export default Card