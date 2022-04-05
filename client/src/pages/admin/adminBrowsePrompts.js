import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import AdminMenu from "../../components/profileMenu/adminMenu.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import PromptItemMenu from "../../components/promptItemMenu/promptItemMenu.js";
import "./admin.css";

import Stack from '@mui/material/Stack';
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
const stories = require("../../data/stories.json");

class AdminBrowsePrompts extends React.Component {
  render() {

    var genres = stories.stories.map(object => object.genre);

    genres.splice(0, 0, "<New Genre>");

    const theme = {
      spacing: 20,
    }

    return (
      <div className="adminDashboard">
        <span className="adminDashboardLeft">
          <div className="adminDashboardHeader">
            <AppName></AppName>
          </div>

          <AdminMenu></AdminMenu>

        </span>

        <span className="adminDashboardDivider">
        </span>

        <span className="adminDashboardRight">

        <div className="profileAvatarContainer">
          <UserIcon icon={"avatar01.png"} username={"name01"} />
        </div>

        <div className="adminContent" style={{ height: '600px', display: 'flex', 'flex-direction': 'column', 'justify-content': 'flex-start', width: '100%' }}>

          <div className="promptsMenuRow" style={{ display: 'flex', width: '100%', 'justify-content': 'flex-end' }}>
            <div className="promptsDropDown" style={{ width:'310px', 'margin-right':"10px" }}>
              <DropDown items={genres} app={this.props.app}></DropDown>
            </div>

            <div className="promptsDelete" style={{ width:'310px', 'margin-left':"10px", 'margin-right':'24px' }}>
              <span className="adminDashboardMenu">
                <Button text="DELETE GENRE"
                        handleClick={() => {
                        this.handleClick(this.state);}} />
              </span>
            </div>
          </div>

          <div className="promptsMenuRow" style={{ display: 'flex', 'flex-direction': 'column', 'justify-content': 'flex-start', 'align-items':'flex-end', width: '100%', 'overflow-y': 'scroll' }}>
            <Box sx={{ width: 638, "margin-right": 0, "padding": "0px 10px 10px 0px " }}>
              <Stack spacing={2}>

                <Card sx={{ width: 638 }} variant="outlined">
                  <CardHeader style={{ textAlign: 'left' }}
                    avatar={
                      <Avatar sx={{ bgcolor: '#292929' }} aria-label="recipe">
                        C {/* TODO: dynamically pick first letter of the title or something */}
                      </Avatar>
                    }
                    action={ <PromptItemMenu /> }
                    title="Canned Food"
                    subheader="Submitted by gazi"
                  />

                <CardContent>
                  <Typography style={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                    User 1 and User 2 are trying to turn random cans of food into something remotely tasty. When most canned “food” is either pet food or well past its expiration date (or both), they’ve got to turn to other means.
                  </Typography>
                </CardContent>
              </Card>

            <Box sx={{ m: 1.4 }} />

            <Card sx={{ width: 638 }} variant="outlined">
              <CardHeader style={{ textAlign: 'left' }}
                avatar={
                  <Avatar sx={{ bgcolor: '#292929' }} aria-label="recipe">
                    B
                  </Avatar>
                }
                action={ <PromptItemMenu /> }
                title="Bakery Break-In"
                subheader="Submitted by jasper"
              />

              <CardContent>
                <Typography style={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                  Detectives User 1, User 2, and User 3 are investigating a break-in at a bakery. The only thing missing? A very secret ingredient.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ width: 638 }} variant="outlined">
              <CardHeader style={{ textAlign: 'left' }}
                avatar={
                  <Avatar sx={{ bgcolor: '#292929' }} aria-label="recipe">
                    B
                  </Avatar>
                }
                action={ <PromptItemMenu /> }
                title="Bakery Break-In"
                subheader="Submitted by jasper"
              />

              <CardContent>
                <Typography style={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                  Detectives User 1, User 2, and User 3 are investigating a break-in at a bakery. The only thing missing? A very secret ingredient.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ width: 638 }} variant="outlined">
              <CardHeader style={{ textAlign: 'left' }}
                avatar={
                  <Avatar sx={{ bgcolor: '#292929' }} aria-label="recipe">
                    B
                  </Avatar>
                }
                action={ <PromptItemMenu /> }
                title="Bakery Break-In"
                subheader="Submitted by jasper"
              />

              <CardContent>
                <Typography style={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                  Detectives User 1, User 2, and User 3 are investigating a break-in at a bakery. The only thing missing? A very secret ingredient.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ width: 638 }} variant="outlined">
              <CardHeader style={{ textAlign: 'left' }}
                avatar={
                  <Avatar sx={{ bgcolor: '#292929' }} aria-label="recipe">
                    B
                  </Avatar>
                }
                action={ <PromptItemMenu /> }
                title="Bakery Break-In"
                subheader="Submitted by jasper"
              />

              <CardContent>
                <Typography style={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                  Detectives User 1, User 2, and User 3 are investigating a break-in at a bakery. The only thing missing? A very secret ingredient.
                </Typography>
              </CardContent>
            </Card>

          </Stack>
        </Box>
      </div>

      <div className="promptsMenuRow" style={{ display: 'flex', width: '100%', 'justify-content': 'flex-end', 'margin-top':'20px' }}>
        <div className="promptsDropDown" style={{ width:'310px', 'margin-right':'10px' }}>
          <DropDown items={genres} app={this.props.app}></DropDown>
        </div>

        <div className="promptsDelete" style={{ width:'310px', 'margin-left':"10px", 'margin-right':'24px' }}>
          <span className="adminDashboardMenu">
            <Button text="DELETE GENRE"
                    handleClick={() => {
                    this.handleClick(this.state);}} />
          </span>
        </div>
      </div>

    </div>

    </span>
  </div>
    );
  }
}

export default AdminBrowsePrompts;
