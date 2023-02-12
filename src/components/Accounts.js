import DataTable from 'react-data-table-component';
import { React, useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { deleteAccount } from '../Actions/AccountActions';
import {useSelector} from 'react-redux'
import {Form,Label,Input, Button} from 'semantic-ui-react'
export function Accounts(props) {


    const loading = useSelector((state) => state.accounts.loading)

    const dispatch = useDispatch()
    // single click event use later for overlay. 
    const handleRowClicked = (row) => {
        console.log("ROW CLICKED")
    }

    // double click user later for edit 
    const handleRowDoubleClicked = (row) => console.log("ROW Double CLICKED" + row)


   const handleEditClick = (e) => {
    console.log("BUTTON " + JSON.stringify(e))
   }

   const handleDeleteClick = (row) => {
    dispatch(deleteAccount(row.id))

   }

    const [columns, setColumns] = useState([]);

    useEffect(() => {
            setColumns([
                {
                    name: 'ACCOUNT ID',
                    selector: row => row.accountId,
                    sortable: true,
                    // sortFunction: caseInsensitiveSort
                },
                {
                    name: 'ACCOUNT HOLDER',
                    selector: row => row.accountHolder,
                },
                {
                    name: 'SALARY',
                    selector: row => row.salary,
                    sortable: true,
                    // sortFunction: caseInsensitiveSort
                },
                {
                    name: 'EXPERIENCE',
                    selector: row => row.experience,
                    sortable: true,
                    // sortFunction: caseInsensitiveSort
                },
                {
                    cell: (row) => <Button className ="secondary" onClick={() => handleEditClick (row)}> EDIT</Button>,
                    ignoreRowClick: true,
                    allowOverflow: true,
                    button: true,
                },
                {
                    cell: (row) => <Button color='red'  onClick={() => handleDeleteClick (row)}> DELETE</Button>,
                    ignoreRowClick: true,
                    allowOverflow: true,
                    button: true,
                }
            ])
        }, []);

    return <DataTable columns={columns}
        data={props.accounts}
        progressPending={loading}
        pagination
        onRowClicked={(e) => handleRowClicked(e)}
        onRowDoubleClicked={(e) => handleRowDoubleClicked(e)}
    />;
};