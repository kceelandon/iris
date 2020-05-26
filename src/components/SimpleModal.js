import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Filter } from './Filter';
import { ClassList } from './ClassList';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  export default function SimpleModal() {
    const styles = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const [word, setWord] = React.useState('');
    const [filterDisplay, setFilterDisplay] = React.useState([]);

    const [classesList] = React.useState([
      {
        name: 'CSE 311'
      },
      {
        name: 'CSE 312'
      }
    ]);

    const handleChange = e => {
      let oldList = classesList.map(classTitle => {
        return {name: classTitle.name.toLowerCase()};
      });
  
      if (e !== '') {
        let newList = [];
        setWord(e);
        newList = oldList.filter(classTitle => classTitle.name.includes(word.toLowerCase()));
        setFilterDisplay(newList);
      } else {
        setFilterDisplay(classesList);
      }
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={styles.paper}>
        <Filter value={word} handleChange={e=>handleChange(e.target.value)}/>
        <ClassList classes={word.length < 1 ? classesList : filterDisplay}/>
        <button type="button" onClick={handleClose}>
            Close
        </button>
      </div>
    );
  
    return (
      <div>
        <h1 style={{ float: 'left'}}> Classes </h1>
        <button class="class-button" onClick={handleOpen}>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }