import React from 'react';

const task = (tasks) => {
  return (
    tasks.map((element => <li>{element}</li>))
  );
}

export default task