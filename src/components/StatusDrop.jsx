import React, { useState } from 'react';
  import { Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'Finished', value: 'Finished' },
    { label: 'Unfinished', value: 'Unfinished'},
  ];

  const StatusDrop = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
      }
      return null;
    };

    return (
      <View >
        {renderLabel()}
        <Dropdown  className="rounded-md border-2 border-gray-400/100 w-40 h-12  mb-5 px-3 bg-gray-200"
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Status' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  };

  export default StatusDrop;

