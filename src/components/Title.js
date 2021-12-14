import React from 'react';
import styled from "styled-components";

export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <TitleCon1 className="text-capitilize font-weight-bold"> 
                {name} <TitleCon>{title}</TitleCon>
                </TitleCon1>
            </div>
        </div>
    )
}



const TitleCon = styled.strong `
color: var(--mainSlateBlue);
`
const TitleCon1 = styled.h1 `
color: var(--cadetBlue);
`