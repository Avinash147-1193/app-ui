import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SocialShare } from 'react-native-social-share';
import { Ionicons, EvilIcons, MaterialIcons, AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalStyles } from '../constants/GlobalStyles';

//import { useSelector, useDispatch } from 'react-redux';

const Post2 = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [share, setShare] = useState(post.share);
  const [isLiked, setIsLiked] = useState(false);
  const iconSize = 20;

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
      //dispatch(removeLike(post.id));
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
      //dispatch(addLike(post.id));
    }
  };

  const handleShare = () => {
    // SocialShare.share({
    //   message: post.text,
    //   url: post.url,
    //   title: 'Sharing a LinkedIn post'
    // });
    setShare(share + 1);
  };

  const handleComment = () => {
    //dispatch(addComment(post.id, 'New comment'));
    setComments(comments + 1);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.reactionsContainer}>
        <TouchableOpacity onPress={handleLike}>
          <View style={styles.likeContainer}>
            <AntDesign name="like1" size={iconSize} color={GlobalStyles.colors.primary500} />
            <Text style={styles.likesCount}> {likes}</Text>
          </View> 
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleShare}>
          <View style={styles.likeContainer}>
            <FontAwesome name="share" size={iconSize} color={GlobalStyles.colors.primary500} />
            <Text style={styles.likesCount}> {share}</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleComment}>
          <View style={styles.likeContainer}>
            <FontAwesome name="comment" size={iconSize} color={GlobalStyles.colors.primary500} />
            <Text style={styles.likesCount}>{comments}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleComment}>
          <View style={styles.likeContainer}>
            <FontAwesome name="send" size={iconSize} color={GlobalStyles.colors.primary500} />
          </View>
        </TouchableOpacity>
      </View>
{/*       
      <TouchableOpacity onPress={() => {}}>
        <Text>{post.text}</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Post2;


const styles = StyleSheet.create({
  likeContainer: {
    flexDirection: 'row',
    marginTop: 6,
    paddingBottom: 10
  },
  likesCount: {
    marginTop: 3.5,
    marginLeft:2,
  },
  reactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#C1BBBB',
  },
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
  }
});