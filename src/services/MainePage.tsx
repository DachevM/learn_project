import React, { useEffect, useState } from 'react';
import {UserService} from "./UserService";
import {IClients} from "../types/types";
const MainPage = () => {
    const [users, setUsers] = useState<any>([]);

    const loadUsers = async (searchText = '') => {
        const data = await UserService.getUsers(searchText);
        setUsers(data)
    }

    useEffect(() => {
        loadUsers().then()
    }, [])


    const handleChangeSearchText = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        loadUsers(value).then();
    }

    return <div>
        <input placeholder="Search text" onChange={handleChangeSearchText} />

        <b>Users length</b> {users.map((e:IClients)=>e.name)}
    </div>
}

export default MainPage