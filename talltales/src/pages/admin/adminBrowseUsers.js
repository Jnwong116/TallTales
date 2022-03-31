import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.js";
import AdminMenu from "../../components/dashboardMenu/adminMenu.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./dashboard.css";

import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const users = require("../../data/users.json");

let id = 0;

// const rows: GridRowsProp = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//   { id: 3, col1: 'MUI', col2: 'is Amazing' },
//   { id: 4, col1: 'MUI', col2: 'is Amazing' },
//   { id: 5, col1: 'MUI', col2: 'is Amazing' },
// ];

const rows: GridRowsProps = (users.users.map((user) => ({
  id: id++,
  col1: user.username,
  col2: () => <RestartAltIcon />,
  col3: 'delete user',
  col4: user.isAdmin,
})));

const columns: GridColDef[] = [
  { field: 'col1', editable: true, headerName: 'Username', width: 150, headerClassName: 'lastcolumnSeparator' },
  { field: 'col2', headerName: 'Reset Password', width: 150, headerClassName: 'lastcolumnSeparator' },
  { field: 'col3', headerName: 'Delete User', width: 150, headerClassName: 'lastcolumnSeparator' },
  { field: 'col4', editable: true, type: 'boolean', headerName: 'Admin', width: 150, headerClassName: 'lastcolumnSeparator' },
];


class AdminBrowseUsers extends React.Component {

  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

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
          <UserIcon icon={this.props.app.state.currUser.icon} username={this.props.app.state.currUser.username} />
        </div>

        <div className="adminContent">
          <div style={{ display: 'flex', height: '100%',  width: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                rows={rows}
                columns={columns}
                experimentalFeatures={{ newEditingApi: true }}
                autoHeight
              />
            </div>
          </div>
        </div>

        </span>
      </div>
    );
  }
}

export default AdminBrowseUsers;
