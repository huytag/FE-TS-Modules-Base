import React from "react";
import './GlobalStyles.scss';

interface Props {
    children: JSX.Element,
}

const GlobalStyles: React.FC<Props> = (props) => {
    return <>
        {props.children}
    </>;
}

export default GlobalStyles;