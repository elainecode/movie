import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import './Film.css';

const Film = () => {
  return (
    <>
      <Card>
        <CardActionArea>
          <Link to="/films/wwwd">
            <CardMedia
              className="list-item-image"
              image="http://via.placeholder.com/100x300"
              title="film poster image"
            />
          </Link>
          <CardContent>
            <div className="card-content-top">
              <Typography variant="subtitle2">Film Title</Typography>
              <Typography variant="subtitle2">Year</Typography>
            </div>
            <Typography variant="p">Film Genre</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Film;
