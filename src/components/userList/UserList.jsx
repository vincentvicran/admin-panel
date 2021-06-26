import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user',
            headerName: 'User',
            width: 210,
            renderCell: (params) => {
                return (
                    <div className="userLists">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            sortable: false,
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={'/user/' + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>

                        <DeleteOutline className="userListDeleteIcon" onClick={() => handleDelete(params.row.id)} />
                    </div>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <DataGrid rows={data} columns={columns} pageSize={10} disableSelectionOnClick checkboxSelection />
        </div>
    );
}
