import React from "react";
import {Loader} from "../loader/Loader"

export const WideContainer = React.memo((props) => {
  return (
      <div className='container'>
        <Loader isLoading={false}>
          {props.children}
        </Loader>
      </div>
  )
});
