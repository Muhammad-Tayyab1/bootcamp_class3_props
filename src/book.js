import React from 'react'

function Book (props){
return(
       <div>
       <h1>This is a key book of: {props.bName} </h1>
       <h1>This is a key book of: {props.rName}</h1>
       </div>
)
}
export default Book;