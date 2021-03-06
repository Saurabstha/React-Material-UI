import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardMedia } from '@material-ui/core';



const CoffeeCard = (props) => {
  const { avatarUrl, title, price, description, imageUrl} = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={avatarUrl} />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
        <CardMedia style={{height: "150px"}}
        image={imageUrl}
      />
      <CardContent>
        {description}
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;
