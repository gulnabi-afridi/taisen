import React from 'react';
import Appbar from "../Headers/Appbar";

const WithHeader = (WrapperComponent) =>  function WithHeaderComponent({...props}) {
    return (
      <>
        <Appbar/>
        <WrapperComponent {...props}/>
      </>
    )
};

export default WithHeader;
