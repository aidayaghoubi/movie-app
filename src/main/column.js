import styled from "styled-components";

const ColumnStyled = styled.div`
`

const Columns = ({ children, width }) => {

    return <ColumnStyled style={{ width }}>
        {children}
    </ColumnStyled>

}

export default Columns