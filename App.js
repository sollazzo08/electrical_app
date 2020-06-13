import React from 'react';
import Header from './Components/navigation/header';
import SearchBar from './Components/homepage/SearchJobs';
import CreateJobButton from './Components/homepage/CreateJob';
import {StyleSheet} from 'react-native';

export default SectionListBasics = () => {
    return (
      <>
      <Header />
      <SearchBar />
      <CreateJobButton />
      </>
    );
}

const styles = StyleSheet.create({

})
