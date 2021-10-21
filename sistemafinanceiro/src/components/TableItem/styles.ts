import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-inline-block;
    padding: 8px 10px;
    border-radius: 5px;
    color: #FFF;
    width: fit-content;
    background-color: ${props => props.color};
`;