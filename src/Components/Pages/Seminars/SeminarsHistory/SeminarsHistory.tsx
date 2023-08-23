import React, {FC, useEffect, useMemo, useState} from 'react';
import SeminarsHistoryList from "./SeminarsHistoryList";
import SeminarsHistoryHead from "./SeminarsHistoryHead";
import "./seminarsHistory.css"
import axios from "axios";
import {IHistory} from "../../../../types/types";
const SERVER = "http://localhost:5005/history"

const SeminarsHistory:FC = () => {
    const [search, setSearch]=useState<string>("")
    const [history, setHistory] = useState<IHistory[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)
    const [limit, setLimit] = useState<number>(5)
    const [pages, setPages] = useState<number>(1)

    const searchedSeminarsHistory=useMemo(()=>{
        return history.filter(e=> e.name.toLowerCase().includes(search.toLowerCase()))
    },[search,history])
    const fetching = async () => {
        const response = await axios.get<IHistory[]>(SERVER, {
            params: {
                _limit: limit,
                _page: pages
            }
        })
        setHistory(response.data)
        setTotalPages(response.headers["x-total-count"])
    }
    const totalCount = () => {
        return Math.ceil(totalPages/limit)
    }

    useEffect(() => {
        fetching().then()
    }, [limit, pages])
    return (
        <div className={"seminarsHistory_main"}>
            <SeminarsHistoryHead setHistory={setHistory} history={history} total={totalCount} pages={pages} setLimit={setLimit} setPages={setPages} search={search} setSearch={setSearch}/>
            <SeminarsHistoryList setHistory={setHistory} history={history} searchedSeminarsHistory={searchedSeminarsHistory}/>
        </div>
    );
};

export default SeminarsHistory;