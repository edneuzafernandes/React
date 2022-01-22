import React from 'react';

const useForm = (type) => {
  const [value, setValue] = React.useState('');

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
};

export default useForm;
