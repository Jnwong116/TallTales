import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.js";
import AdminMenu from "../../components/dashboardMenu/adminMenu.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./dashboard.css";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

import DropDown from "../../components/dropDown/dropDown.js";

const users = require("../../data/users.json");

class AdminBrowsePrompts extends React.Component {
  render() {

    const genres = this.props.app.state.stories.stories.map(
      object => object.genre
    );

    const theme = {
      spacing: 20,
    }

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

        <div className="adminContent" style={{ height: '526px', display: 'flex', 'flex-direction': 'column', 'justify-content': 'flex-start', width: '100%' }}>

          <div className="promptsMenuRow" style={{ display: 'flex', width: '100%', 'justify-content': 'flex-end' }}>
            <div className="promptsDropDown" style={{ width:'310px', 'margin-right':"10px" }}>  {/* used to be: 371px */}
              <DropDown items={genres}></DropDown>
            </div>

            <div className="promptsDelete" style={{ width:'310px', 'margin-left':"10px" }}>  {/* used to be: 371px */}
              <span className="dashboardMenu">
                <Button text="DELETE GENRE"
                        handleClick={() => {
                        this.handleClick(this.state);}} />
              </span>
            </div>
          </div>

          <div className="promptsMenuRow" style={{ display: 'flex', 'flex-direction': 'column', width: '100%', 'justify-content': 'flex-end', 'align-items':'flex-end' }}>
            <Card sx={{ width: 638 }} variant="outlined">
              <CardHeader style={{ textAlign: 'left' }}
                avatar={
                  <Avatar sx={{ bgcolor: '#292929' }} aria-label="recipe">
                    C
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Canned Food"
                subheader="Submitted by gazi"
              />

              <CardContent>
                <Typography style={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                  User 1 and User 2 are trying to turn random cans of food into something remotely tasty. When most canned “food” is either pet food or well past its expiration date (or both), they’ve got to turn to other means.
                </Typography>
              </CardContent>
            </Card>

            <Box
              sx={{ m: 1.4 }}
            />

            <Card sx={{ width: 638 }} variant="outlined">
              <CardHeader style={{ textAlign: 'left' }}
                avatar={
                  <Avatar sx={{ bgcolor: '#292929' }} aria-label="recipe">
                    B
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Bakery Break-In"
                subheader="Submitted by jasper"
              />

              <CardContent>
                <Typography style={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                  Detectives User 1, User 2, and User 3 are investigating a break-in at a bakery. The only thing missing? A very secret ingredient.
                </Typography>
              </CardContent>
            </Card>

          </div>

        </div>

        </span>
      </div>
    );
  }
}

export default AdminBrowsePrompts;
