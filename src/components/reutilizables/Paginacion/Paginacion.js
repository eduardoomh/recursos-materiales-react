import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Paginacion.scss";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { getFetchPage } from "../../../servicios/paginacion";
import { endpoint } from "../../../api/endpoint";

export default function Paginacion(props){
    const { lastPage, currentPage, prevUrl, nextUrl, setData, setLoading } = props;

    const changePage = async (link) => {
        setLoading(true);
        const url = endpoint.url.length;
        const newUrl = link.substring(url-1);
        const result = await getFetchPage(newUrl);
        scrollTop();

        setData(() => {
            if(result.status === "success") return result.elementos
        });

        setLoading(() => {
            if(result.status === "success") return false
        })

    }

    return(
        <div className="paginacion">
            <Button disabled={currentPage === 1 ? true: false}  onClick={() => changePage(prevUrl)}><Icon name="angle left" />Anterior</Button>
            <p>{currentPage}</p>
            <p>de</p>
            <p>{lastPage}</p>
            <Button disabled={currentPage === lastPage ? true : false} onClick={() => changePage(nextUrl)}>Siguiente<Icon name="angle right" /></Button>
        </div>
    )
}