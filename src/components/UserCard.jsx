import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

const UserCard = ({ items }) => {
  const [colorLike, setcolorLike] = useState(false);

  const ColorChange = () => {
    setcolorLike(!colorLike);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="mt-3">
      <CardHeader
        avatar={<Avatar aria-label="recipe">{items.name.slice(0, 1)}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={items.name}
        subheader={items.email}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Address : {items.address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="flex justify-between">
        <Link to="/users">
          <IconButton aria-lable="back">
            <ArrowBackIosNewIcon />
          </IconButton>
        </Link>
        <IconButton onClick={ColorChange} aria-label="add to favorites">
          <FavoriteIcon sx={{ color: colorLike && red[500] }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
