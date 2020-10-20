import { gql } from "@apollo/client";

export const SOLICITUDES_HOY = gql`
query solicitudesHoy($input: String!){
    solicitudesHoy(input: $input)
}
`;
