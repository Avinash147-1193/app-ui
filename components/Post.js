import React from 'react';
import { View, Text, Image } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';

const Post = ({postData}) => {
  return (
    
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/images/ss1.png')}
            style={styles.reactorAvatar}
          />
        </View>
        <View style={styles.reactTextContainer}>
          <Text style={styles.reactorNameText}>{postData.reactorName}</Text>
          <Text style={styles.reactionText}>likes this post.</Text>
        </View>
      </View>
      <View style={styles.headerLowerContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/images/ss.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.nameText}>{postData.postCreatorName}</Text>
          <View style={styles.jobTitleContainer}>
            <Text style={styles.jobTitleText}>{postData.postCreatorJobTitile}</Text>
          </View>
        </View>
      </View>
      <View style={styles.postContainer}>
        <View>
          <Text style={styles.postText}>
            {postData.text}
          </Text>
          <Text style={styles.moreText}>
            more...
          </Text>
        </View>
        
      </View>
      <View style={styles.mediaContainer}>
        <Image
          source={require('../assets/images/post_img.jpeg')}
          style={styles.postImage}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 16,
  },
  headerContainer: {
    marginTop: -5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerLowerContainer: {
    marginTop: 6,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#C1BBBB',
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarContainer: {
    marginRight: 8,
  },
  avatar: {
    marginTop: 7,
    width: 48,
    height: 48,
    borderRadius: 24
  },
  reactorAvatar: {
    width: 43,
    height: 43,
    borderRadius: 24
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  reactTextContainer: {
    flexDirection: 'row',
  },
  nameText: {
    marginTop: 7,
    fontWeight: 'bold',
    fontSize: 16,
  },
  reactorNameText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  jobTitleText: {
    fontSize: 14,
    color: 'gray',
    flexWrap: 'wrap'
  },
  reactionText: {
    fontSize: 13,
    color: 'gray',
    flexWrap: 'wrap',
    marginTop: 2,
    marginLeft: 5
  },
  jobTitleContainer: {
    width: 280
  },
  postContainer: {
    marginVertical: 8
  },
  postText: {
    fontSize: 14
  },
  mediaContainer: {},
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  moreText: {
    color: GlobalStyles.colors.gray400
  }
};

export default Post;
