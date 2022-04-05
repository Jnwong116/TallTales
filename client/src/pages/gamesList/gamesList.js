import AppName from "../../components/appName/appName.js";
import React from "react";
import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import TextField from "@mui/material/TextField";
import "./gamesList.css";

// When using TypeScript 4.x and above
import type {} from '@mui/x-data-grid/themeAugmentation';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

import ContentCopy from '@mui/icons-material/ContentCopy';
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const users = require("../../data/users.json");

let count = 0;

const { text } = "ROOM CODE";

/* maps users to data DataGrid rows */
var initialRows = [
  { id: 0,
    host: "Random Name",
    players: "4/5",
    genre: "Adventure",
    roomcode: 231292
  },
  { id: 1,
    host: "Random Name",
    players: "4/5",
    genre: "Adventure",
    roomcode: 231292
  },
  { id: 2,
    host: "Random Name",
    players: "4/5",
    genre: "Adventure",
    roomcode: 231292
  },
  { id: 3,
    host: "Random Name",
    players: "4/5",
    genre: "Adventure",
    roomcode: 231292
  },
  { id: 4,
    host: "Random Name",
    players: "4/5",
    genre: "Adventure",
    roomcode: 231292
  },
];


function GamesList(props) {
  const [rows] = React.useState(initialRows);

  const columns: GridColDef[] = [
    { field: 'host',          editable: false,  type: 'string',   headerName: 'Host',       width: 200, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'players',       editable: false,  type: 'string',  headerName: 'Players',          width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator', },

    { field: 'genre',   editable: false, type: 'string',   headerName: 'Genre',          width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'roomcode',     editable: false, type: 'number',   headerName: 'Room ID',     width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'divider',       editable: false, type: 'number',   headerName: '',                flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator' },
    { field: 'copyID', editable: false, type: 'actions',  headerName: 'Copy ID',     width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator',
      getActions: (params) =>
      [ <GridActionsCellItem icon={<ContentCopy />} label="Copy ID" onClick={console.log("copied link: " + params.id)} />, ], },
    { field: 'join',    editable: false, type: 'actions',  headerName: 'Join',    width: 100, headerAlign: 'center', align: 'center', headerClassName: 'lastcolumnSeparator',
      getActions: (params) =>
      [ <GridActionsCellItem icon={<DoubleArrow />} label="Join" onClick={console.log("joined: " + params.id)} />, ], }
  ];


  return (

    <div className="gamesList-new" style={{ height: '100%',  width: '100%' }}>                           {/* TODO: Move in-line styling to CSS */}
      <div className="gamesListHeader" style={{ display: "flex", "justify-content": "center"}}>
        <AppName className="gamesHeader" />
      </div>
      <div className="gamesListBody">
        <div className="gamesListContainer" style={{ display: 'flex', "justify-content": "center", "align-items": "center", height: '100%', width: '100%' }}>

          <ArrowBackIosNewIcon sx={{ fontSize: 80, "padding-right": '100px' }} />

          <div className="gamesListGridDataContainer" style={{ display: "flex", height: '526px', width:'800px' }}>

            {/* experimentalFeatures required for certain props such as editable cells */}
            {/* columns prop disables sortable on divider col */}
            {/*  disableColumnMenu: disables additional column options (sorting, filtering, etc) */}
            {/* NOTE: There seems to be a pagination bug that makes editing very hard and error/warning-prone.
                      Modelling from the code provided at https://mui.com/components/data-grid/pagination/
                      the error never fails to manifest. Because of this, we have disabled pagination.
                      Side-effect: a console warning about [100] not being included in the rowsPerPageOptions. */}

            {/*
            {...initialRows}
            initialState={{
              ...initialRows.initialState,
              pagination: {
                page: 1,
              },
            }}
            pageSize={8}
            */}

            {/* loads 8 rows per page */}

            {/*  sets page size to 8 rows */}


            <DataGrid
              experimentalFeatures={{ newEditingApi: true }}
              rows={rows}
              columns={[...columns, {field: 'divider', sortable: false}]}
              disableColumnMenu={true}
              rowsPerPageOptions={[0]}
              pagination
              initialState={{
                pagination: {
                  pageSize: 8,
                },
              }}

              hideFooterSelectedRowCount= {true}
              onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
                console.log("Edited cell:")
                console.log(params);
              }}
            />
            {/* NOTE:     processRowUpdate={processRowUpdate} */         /*  api call for processing updates to rows of Grid Data */}


          </div>

          <UserIcon icon={"avatar01.png"} username={"your-name-here"} style={{ "padding-left": '100px' }} />

        </div>
      </div>

      <div className="gamesListMenu" style={{ "padding-top": '25px' }}>

      <span style={{ display: "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", width: '100%' }}>
        <span className="user-login-input">
            <div className="user-input-fields">
                <TextField
                    id="user-name"
                    label="ROOM CODE"
                    variant="filled"
                    margin="normal"
                    maxRows="1"
                />
            </div>
        </span>


        <Button text="JOIN ROOM"
                handleClick={() => {
                this.handleClick(this.state);}} />
      </span>
    </div>
  </div>
  );
}

export default GamesList;
