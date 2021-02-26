import styled from "styled-components";

export const FlexRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const FlexCol = styled(FlexRow)`
    flex-direction: column;
`;
