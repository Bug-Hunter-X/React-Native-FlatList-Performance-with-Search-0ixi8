```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, SectionList, StyleSheet, TextInput } from 'react-native';

const DATA = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );
  
  const getSections = () => {
    if(searchQuery === '') return [{title: 'All Items', data: DATA}];

    const filteredData = DATA.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    return [{title: 'Search Results', data: filteredData}];
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <SectionList
        sections={getSections()}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
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
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default App;
```