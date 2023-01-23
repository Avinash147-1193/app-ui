import { View, FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Post from "./Post";
import Post2 from "./post2";

function post3() {
  const post = {
    reactorName: 'Ashika Bansali',
    reactorAvatar: '../assets/images/ss1.png',
    postCreatorName: 'Avinash Dwivedi',
    postCreatorAvatar: '../assets/images/ss.png',
    postCreatorJobTitile: 'XYZ college of Engineering ||Tech enthusiast || Here to learn robotic.',
    text: 'The newest episode of Alexa Innovators features Arnaud Megret, Founder & CEO at Elokence (the creators of hit game Akinator). Learn how Elokence is using conversational AI and building',
    image: '../assets/images/post_img.jpeg',
  };
  const postReactions = {
    likes: 30,
    comments: 35,
    id: 129,
    share: 21,
    url: 'https://beta.reactjs.org/learn/passing-props-to-a-component',
  };

  return (
    <ScrollView>
      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>

      <View style={styles.postContainer}>
        <Post postData={post}/>
        <Post2 post={postReactions} />
      </View>
      
    </ScrollView>
      
    
  )
}

export default post3;


const styles = StyleSheet.create({
  postContainer:{
    marginBottom: 12
  }
})