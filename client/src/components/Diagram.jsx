import React from "react";
import {makeStyles} from "@material-ui/core";

const loop = ['0', '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];

const useStyles = makeStyles({
    root: {
        height: '200px',
        display: 'flex',
        alignItems: 'flex-end',
        margin: '8px'
    },
    diagram: {
        backgroundColor: 'red',
        width: '5%',
        display: 'inline-block'
    }
});

const Diagram = (props) => {
    const classes = useStyles();

    return (
       <div className={classes.root}>
           {props.data && loop.map(i => {
               const week = props.data.find(week => week.index == i);
               let height = 0;
               if (week) {
                   height = ((week.position * 200) / 200) ;
               }

               return (<div className={classes.diagram} style={{height: height + 'px'}}></div>);
           }
           )}
       </div>
    );
};

export default Diagram;
