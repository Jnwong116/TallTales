import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.js";
import AdminMenu from "../../components/dashboardMenu/adminMenu.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./dashboard.css";

import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DeleteIcon from '@mui/icons-material/Delete';

const users = require("../../data/users.json");

let count = 0;

const initialRows = (users.users.map((user) => ({
  id: count++,
  username: user.username,
  isAdmin: user.isAdmin,
  gamesPlayed: user.gamesPlayed,
  highScore: user.highScore,
})));

function AdminBrowseUsers(props) {

  const [rows, setRows] = React.useState(initialRows);

  const columns: GridColDef[] = [
    { field: 'username',      editable: true,  type: 'string',   headerName: 'Username',       width: 150, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'isAdmin',       editable: true,  type: 'boolean',  headerName: 'Admin',          width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'gamesPlayed',   editable: false, type: 'number',   headerName: 'Games',          width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'highScore',     editable: true,  type: 'number',   headerName: 'High Score',     width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'divider',       editable: false, type: 'number',   headerName: '',                flex:   1, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'resetPassword', editable: false, type: 'actions',  headerName: 'Reset Pass',     width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator',
      getActions: (params) =>
      [ <GridActionsCellItem icon={<RestartAltIcon />} label="Delete" onClick={resetPassword(params.id)} />, ], },
    { field: 'deleteUser',    editable: false, type: 'actions',  headerName: 'Delete User',    width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator',
      getActions: (params) =>
      [ <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={deleteUser(params.id)} />, ], }
  ];

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const resetPassword = React.useCallback(
    (id) => () => {
      alert("Password reset!")
    },
    [],
  );

  return (
    <div className="dashboard">
      <span className="dashboardLeft">
        <div className="header">
          <AppName></AppName>
        </div>
          <AdminMenu></AdminMenu>
      </span>

      <span className="dashboardDivider">
      </span>

      <span className="dashboardRight">

      <div className="profileAvatarContainer">
        <UserIcon icon={props.app.state.currUser.icon} username={props.app.state.currUser.username} />
      </div>

      <div className="adminContent">
        <div style={{ display: 'flex', height: '100%',  width: '100%' }}>
          <div style={{ height: '526px', width:'100%' }}>  {/* used to be: 371px */}
            <DataGrid
              rows={rows}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
              rowsPerPageOptions={[8]}
              initialState={{
                pagination: {
                  pageSize: 8,
                },
              }}
              hideFooterSelectedRowCount= {true}
            />
          </div>
        </div>
      </div>

      </span>
    </div>
  );
}

export default AdminBrowseUsers;
