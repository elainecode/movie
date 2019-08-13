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

const Film = ({ title, year, id, image_id, genres }) => {
  return (
    <>
      <Card>
        <CardActionArea>
          <Link to={`/films/${id}`}>
            <CardMedia
              className="list-item-image"
              image={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${image_id}`}
              title={title}
            />
          </Link>
          <CardContent>
            <div className="card-content-top">
              <Typography variant="subtitle2">{title}</Typography>
              <Typography variant="subtitle2">{year}</Typography>
            </div>
            <Typography variant="body2">
              {genres.join(', ')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Film;
