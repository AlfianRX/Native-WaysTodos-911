import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

  export default function CategoryDropForm() {

    const [data, setData] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);

    const getData = async() =>{
      try {
          const token = await AsyncStorage.getItem('token');
          if (token === null) {
              navigation.navigate("Login")
          }

          const config = {
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + token
              },
          };

          setDataLoading(true);

          const res = await axios.get('https://api.kontenbase.com/query/api/v1/7205b1b0-d903-47c9-9e8c-99d05599eb68/category?$lookup=*', config);
          setData(res.data)
          setDataLoading(false)          
          
        } catch (error) {
          console.log(error);
          setDataLoading(false)
        }
      }
      
      React.useEffect(()=> {
        getData()
      },[data])
      // const stamp = res.data.title
      const datas = data.map((item) => {
        return {label: item.title, value: item.title}
      })

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
        <Dropdown  className="rounded-md border-2 border-gray-400/100 w-80 h-10 mb-5 px-3 bg-gray-200"
          data={datas}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Category' : '...'}
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

