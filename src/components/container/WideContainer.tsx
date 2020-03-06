import React from "react";

export const WideContainer = React.memo((props) => {
  return (
      <div className='container'>
        {props.children}
      </div>
  )
});
