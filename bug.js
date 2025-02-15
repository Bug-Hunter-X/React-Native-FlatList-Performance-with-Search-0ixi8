```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const App = () => {
  const [data, setData] = useState(DATA);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  
  useEffect(() => {
    const filteredData = DATA.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    setData(filteredData);
  }, [searchQuery]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
  },
});

export default App;
```