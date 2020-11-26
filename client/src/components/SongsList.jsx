import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from '@material-ui/core';
import Diagram from './Diagram';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        height: 'calc(100vh - 279px)',
        overflow: 'auto'
    },
});
const SongsList = () => {
    const [songs, setSongs] = useState([]);
    const [diagramData, setDiagramData] = useState(null);
    const classes = useStyles();


    useEffect(() => {
        fetch('/get-songs', {headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }}).then(response => response.json()).then(result =>  {
            setSongs(result.songs);
        });
    },[]);

    const checkSongHandler = (id) => {
        fetch('/song/' + id, {headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }}).then(response => response.json()).then(result =>  setDiagramData(result.song?.weeks));
    };

    return (
        <>
            <Diagram data={diagramData}/>
            <div className={classes.root}>
                <List component="nav" aria-label="secondary mailbox folders">
                    {songs?.map(song => (
                        <ListItem button onClick={() => checkSongHandler(song._id)}>
                            <ListItemText primary={song.name} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </>
    );
};

export default SongsList;
