import { Children } from "react";
import styled from "styled-components";
import styledComponents from "styled-components";

const ContainerStyled = styled.div`
width: 100%;
max-width: 1200px;
background-color: #eceff0;
margin: 0 auto;
height: auto;
margin: 15px auto;
display: flex;
align-items: flex-start;
justify-content: center;
transition:0.35s;

`

const Container = ({ children }) => {

   

    return <ContainerStyled>
        {children}
    </ContainerStyled>
}

export default Container