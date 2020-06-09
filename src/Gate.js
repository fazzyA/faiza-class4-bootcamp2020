import React, {useState} from 'react';
import './Style.css'
 function Gate(){
  const [isOpen, setOpen] = useState(true);
    return(

        <div className={`gate ${isOpen?"open":"closed"}` }>
            Hello Toggle the button<br></br>
            <p><button onClick={()=>setOpen(!isOpen)}>play with it</button></p>
        </div>

    )
}
export default Gate;