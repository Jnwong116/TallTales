import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.js";
import AdminMenu from "../../components/dashboardMenu/adminMenu.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./dashboard.css";

// When using TypeScript 4.x and above
import type {} from '@mui/x-data-grid/themeAugmentation';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

import Checkbox from '@mui/material/Checkbox';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DeleteIcon from '@mui/icons-material/Delete';

import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

const users = require("../../data/users.json");

let count = 0;

/* maps users to data DataGrid rows */
const initialRows = (users.users.map((user) => ({
  id: count++,
  username: user.username,
  isAdmin: user.isAdmin,
  gamesPlayed: user.gamesPlayed,
  highScore: user.highScore,
})));

function AdminBrowseUsers(props) {

  const [rows, setRows] = React.useState(initialRows);

  const deleteUser = React.useCallback(
    (id) => () => {
      if (id > 1) {
        setTimeout(() => {
          setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        });
        console.log("Deleted user id: " + id);
      } else {
        console.log("Can't delete user id: " + id);
      }
    },
    [],
  );

  const resetPassword = React.useCallback(
    (id) => () => {
      if (id > 1) {
        console.log("Password reset for user id: " + id);
      } else {
        console.log("Can't reset for user id: " + id);
      }
    },
    [],
  );

  const columns: GridColDef[] = [
    { field: 'username',      editable: true,  type: 'string',   headerName: 'Username',       width: 150, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator',
      preProcessEditCellProps: (params: GridPreProcessEditCellProps) => { /* validates username change */
        let hasError;
        if (hasError = params.props.value.length < 1) {           /*  Ensures that username can't be less than 1 character
                                                                      Not really needed anymore, leaving in for levity. */
          console.log("Username can't be 0 characters!");               /* This needs to be a snack */
        } else if (hasError = params.row.username === 'admin' ) { /* Ensures admin can't be renamed */
          console.log("Admin can't be renamed!");                       /* This needs to be a snack */
        }
        return {
          ...params.props, error: hasError
        };
      },
    },
    { field: 'isAdmin',       editable: true,  type: 'boolean',  headerName: 'Admin',          width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator',
      preProcessEditCellProps: (params: GridPreProcessEditCellProps) => { /* validates isAdmin change */
        const hasError = params.row.username === 'admin';         /*  Ensures that 'admin' user can't be demoted to regular user
                                                                      Not really needed anymore, leaving in for levity. */
        if(hasError) {
          console.log("Admin can't be demoted!");                       /* This needs to be a snack */
        }
        return {
          ...params.props, error: hasError
        };
      },
    },
    { field: 'gamesPlayed',   editable: false, type: 'number',   headerName: 'Games',          width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'highScore',     editable: false, type: 'number',   headerName: 'High Score',     width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'divider',       editable: false, type: 'number',   headerName: '',                flex:   1, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'resetPassword', editable: false, type: 'actions',  headerName: 'Reset Pass',     width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator',
      getActions: (params) =>
      [ <GridActionsCellItem icon={<RestartAltIcon />} label="Reset Password" onClick={resetPassword(params.id)} />, ], },
    { field: 'deleteUser',    editable: false, type: 'actions',  headerName: 'Delete User',    width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator',
      getActions: (params) =>
      [ <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={deleteUser(params.id)} />, ], }
  ];

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

              onCellEditStop={(params, event) => {            /* more events: https://mui.com/components/data-grid/events/ */
                  const oldName = "temp";
                  const newName = "temp";
                  console.log("Changed cell from " + oldName + " to " + newName);
                  console.log("Finished editing cell.");        /* This function will return the current table row once cell editing has concluded. */
                  console.log(params.row);
              }}
              {...initialRows}

              rows={rows}
              columns={[...columns, {field: 'divider', sortable: false}]}            /* disables sorting on the divider column */
              disableColumnMenu={true}                        /*  disables additional column options (sorting, filtering, etc) */
              experimentalFeatures={{ newEditingApi: true }}  /*  required for certain props*/
              isCellEditable={(params) => params.row.id > 1}  /*  admin and user rows (ids 0, 1) are not editable.
                                                                  NOTE: This makes the alerts in delete user and
                                                                  reset password unnecessary but left them there for
                                                                  educational purposes */
              rowsPerPageOptions={[8]}                        /*  loads 8 rows per page */
              initialState={{                                 /*  sets page size to 8 rows */
                pagination: {
                  pageSize: 8,
                },
              }}
              hideFooterSelectedRowCount= {true}              /*  self-explanatory */
            /* processRowUpdate={processRowUpdate} */         /*  api call for processing updates to rows */
            />
          </div>
        </div>
      </div>

      </span>
    </div>
  );
}

export default AdminBrowseUsers;
