import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateComments } from "../../redux/actions/commentsActions";
import Images from "../../assets/images";
import styles from "./styles";

const CommentRow = ({ title, value }) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.rowTitle}>{title} :</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
};

const Comment = ({ data, onDeletePress }) => {
  return (
    <View style={styles.commentContainer}>
      <TouchableOpacity
        style={styles.deleteButtonContainer}
        onPress={() => {
          onDeletePress();
        }}
      >
        <Image source={Images.ic_close} style={styles.deleteIcon} />
      </TouchableOpacity>
      <CommentRow title={"Date"} value={data.date} />
      <CommentRow title={"Duration"} value={data.duration} />
      <CommentRow title={"Description"} value={data.description} />
    </View>
  );
};

const Comments = () => {
  const commentsList = useSelector(
    (state) => state.commentsReducer.commentsList
  );
  const [commentList, setCommentList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setCommentList(commentsList);
  }, [commentsList]);

  const deleteAComment = (payload) => {
    let comments = commentList;
    const commentIndex = comments.findIndex((p) => p.id === payload.id);

    if (commentIndex > -1) {
      comments.splice(commentIndex, 1);
    }
    return comments;
  };

  const handleDeleteComment = (item) => {
    const payload = {
      id: item.id,
      description: item.description,
      duration: item.duration,
      date: item.date,
    };

    const newCommentsList = deleteAComment(payload);

    dispatch(updateComments(newCommentsList));
    setCommentList([...newCommentsList]);
  };

  return (
    <View style={styles.container}>
      {(commentList.length > 0 && (
        <FlatList
          data={commentList}
          renderItem={({ item }) => (
            <Comment
              data={item}
              onDeletePress={() => handleDeleteComment(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )) || (
        <View style={styles.emptyListContainer}>
          <Text>No comments</Text>
        </View>
      )}
    </View>
  );
};

export default Comments;
