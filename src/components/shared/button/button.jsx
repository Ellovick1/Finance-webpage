import React from 'react'

function Button({ bgColor,textColor,myPadding,myRadius,myText,removeBorder,myBorder,myMargin,}) {
  const myButton ={
    backgroundColor:bgColor,
    padding:myPadding,
    color:textColor,
    border:removeBorder,
    borderColor:myBorder,
    marginTop:myMargin,
    borderRadius:myRadius,
    
    
  }
  return (
    <div>
    <button style={myButton}>{myText}</button>
</div>
  )
}

export default Button