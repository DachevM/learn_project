import React, {useEffect, useMemo} from 'react';
import "./clients.css"
import ClientsList from "./ClientsList";

import {IClients} from "../../../types/types";
import Search from "../../Elements/Search/Search";
import Pagination from "../../Elements/Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../../../Redux/hooks";
import {RootState} from "../../../Redux/store";
import {fetchClients} from "../../../Redux/action-creators/clientsAction";

const SERVER_URL = "http://localhost:5005/clients"

const Clients = () => {
    const {pages,limit,clients,totalPages}=useAppSelector(state =>state.clients )
    const search = useAppSelector<string>((state: RootState) => state.search.text)
    const dispatch=useAppDispatch()

    useEffect(() => {
        dispatch(fetchClients(SERVER_URL,pages,limit))
    }, [dispatch, limit, pages])

    const totalCount = () => {
        return Math.ceil(totalPages / limit)
    }

    const searchedClients= useMemo(() => {
        return clients.filter((e:IClients) => e.name.toLowerCase().includes(search.toLowerCase()))
    }, [search, clients])


    return (
        <div className={"clients_main"}>
            <div className={"clients_head"}>
                <Search search={search} />
                <Pagination pages={pages} total={totalCount}/>
            </div>
            <ClientsList searched={searchedClients}/>
        </div>
    );
};

export default Clients;