import React from "react";
import { Pagination } from "semantic-ui-react";
import "./Paginacion.scss";

export default function Paginacion(){
    return(
        <div className="paginacion">
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
            />
        </div>
    )
}