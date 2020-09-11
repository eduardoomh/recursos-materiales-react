import React from "react";
import { Pagination } from "semantic-ui-react";
import "./Paginacion.scss";

export default function Paginacion(props){
    const { from, to, lastPage, currentPage } = props;

    const changePage = (data) => {
        console.log(data);

    }

    return(
        <div className="paginacion">
            <Pagination
                firstItem={from}
                lastItem={to}
                totalPages={lastPage}
                boundaryRange={1}
                defaultActivePage={currentPage}
                ellipsisItem={null}
            
            />
        </div>
    )
}