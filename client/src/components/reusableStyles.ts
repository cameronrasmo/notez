import styled from "styled-components";

export const FlexRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

export const FlexCol = styled(FlexRow)`
    flex-direction: column;
`;
