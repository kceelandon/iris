import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';


function Dropdown({ title, update, items, multiSelect = false, currentlySelected}) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(currentlySelected);
  const toggle = () => setOpen(!open);
  const [count, setCount] = useState(0);
  Dropdown.handleClickOutside = () => setOpen(false);
  

  // everytime a class is added, it should be added to the database and associated with the current user
  function handleOnClick(item) {
    //var db = firebase.firestore();
    if (!selection.includes(item.value)) { // if item is not already in selection array
      if (multiSelect && count !== 4) {
        setCount(count + 1);
        //db.collection("users").add(item)
        setSelection([...selection, item]); // add class here
        update(item.value);
      } else {
        alert('You can only add 4 classes');
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.value !== item.value
      );
      // remove class from user's current class selection list
      // TODO: update class selection in database
      if (count > 0) {
        setCount(count - 1); 
        //db.ref('users/item').remove()
      }
      setSelection([...selectionAfterRemoval]);
      update(item.value);
    }
  }

  function isItemInSelection(item) {
    if (selection.includes(item.value)) {
      return true;
    }
    return false;

  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Added'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);