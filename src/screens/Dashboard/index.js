import React, { useState, useEffect } from "react";
import { Text, View, TextInput, SafeAreaView } from "react-native";
import { connect, useDispatch } from "react-redux";

import { addComments } from "../../redux/actions/commentsActions";
import CustomButton from "../../components/CustomButton";
import styles from "./styles";

const TimerStatus = {
  Start: "START",
  Stop: "STOP",
};

const TimerStatusProps = {
  [TimerStatus.Start]: {
    key: "Start",
    buttonTitle: "Stop",
  },
  [TimerStatus.Stop]: {
    key: "Start",
    buttonTitle: "Start",
  },
};

const defaultTimeFormat = "00:00:00";

const Dashboard = () => {
  const [comment, setComment] = useState("");
  const [timerState, setTimerStatus] = useState(TimerStatus.Stop);
  const [time, setTime] = useState(0);
  const [formattedTime, setFormattedTime] = useState(defaultTimeFormat);
  const [timerOn, setTimerOn] = useState(false);
  const [isStopTimer, setIsTimerStopped] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        const formatted = new Date(time * 1000).toISOString().substr(11, 8);
        setFormattedTime(formatted);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn, time]);

  const handleTimerButton = () => {
    switch (timerState) {
      case TimerStatus.Stop:
        setTimerStatus(TimerStatus.Start);
        setTimerOn(true);
        setIsTimerStopped(false);
        break;
      case TimerStatus.Start:
        setTimerStatus(TimerStatus.Stop);
        setTimerOn(false);
        setIsTimerStopped(true);
        break;
    }
  };

  const resetTimer = () => {
    setTime(0);
    setFormattedTime(defaultTimeFormat);
  };

  const handleTextInput = (value) => {
    setComment(value);
  };

  const handleAddCommentButton = () => {
    const currentDate = new Date().toDateString().split("T");
    const timestamp = new Date().getTime();

    const payload = {
      id: timestamp,
      description: comment,
      duration: formattedTime,
      date: currentDate[0],
    };

    dispatch(addComments(payload));
    setComment("");
    resetTimer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formattedTime}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title={TimerStatusProps[timerState].buttonTitle}
          customStyle={styles.startButton}
          onButtonPress={() => {
            handleTimerButton();
          }}
        />

        <CustomButton
          title={"Reset"}
          customStyle={styles.resetButton}
          titleStyle={styles.resetButtonTitle}
          onButtonPress={() => {
            resetTimer();
          }}
        />
      </View>

      <View style={styles.commentContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleTextInput}
          value={comment}
          placeholder="Please add your comment here"
          numberOfLines={5}
          multiline={true}
        />
        <View style={styles.addButtonContainer}>
          <CustomButton
            title={"Add Comment"}
            isDisabled={isStopTimer ? false : true}
            customStyle={styles.addButton}
            onButtonPress={() => {
              handleAddCommentButton();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (payload) => {
      dispatch(addComments(payload));
    },
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
