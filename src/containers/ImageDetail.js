import React, { Component } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Card } from '../components/common';

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1
  },
  imageInProf: {
    width: 122,
    height: 122
  }
});

const ImageDetail = ({ image }) => {
  const { imageUrl } = image;

  return (
    <Card style={styles.imgContainer}>
      <Image
        style={styles.imageInProf}
        source={{ uri: imageUrl }}
      />
    </Card>
  );
};
export default ImageDetail;