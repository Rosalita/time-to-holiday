import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

const SAND = '#FAEDDA';
const SEAGREEN = '#AEE8CA';
let SKYBLUE = '#6ACFC9';
const OCEANBLUE = '#26B6C6';
const DEEPBLUE = '#3C2F80';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsRemaining: 0,
      holidayStarted: false,
      textLine1: 'Roses are red',
      textLine2: 'This app is blue',
      textLine3: 'Not long now until',
      textLine4: 'Fuertaventura with you',
    };
  }

  componentDidMount() {
    let dateTimeNow = moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ');
    const holidayTime = moment("Sat, 14 Dec 2019 13:25:00 UTC", "ddd, DD MMM YYYY HH:mm:ss ZZ");
    let difference = moment.duration(
      moment(holidayTime).diff(moment(dateTimeNow))
    );

    let hours = parseInt(difference.asHours());
    let mins = parseInt(difference.minutes());
    let secs = parseInt(difference.seconds());
    let secondsRemaining = hours * 3600 + mins * 60 + secs;

    if (secondsRemaining < 0 && this.state.holidayStarted === false) {
      this.holidayStarted();
    }

    this.setState(() => ({ secondsRemaining: secondsRemaining }));
  }

  holidayStarted = () => {
    this.setState(() => ({ holidayStarted: true }));
    this.setState(() => ({ textLine1: 'Holiday starts now!' }));
    this.setState(() => ({ textLine2: 'Our adventure has begun' }));
    this.setState(() => ({ textLine3: 'Lets make some memories' }));
    this.setState(() => ({ textLine4: 'And have loads of fun' }));
  };

  render() {
    if (this.state.holidayStarted === false) {
      return (
        <View style={styles.appContainer}>
          <Text style={styles.titleText}>{this.state.textLine1}</Text>
          <Text style={styles.titleText}>{this.state.textLine2}</Text>
          <Text style={styles.titleText}>{this.state.textLine3}</Text>
          <Text style={styles.titleText}>{this.state.textLine4}</Text>
          <CountDown
            digitStyle={styles.countDownDigit}
            digitTxtStyle={styles.countDownText}
            timeLabelStyle={styles.countDownLabel}
            timeLabels={{ d: 'Days', h: 'Hours', m: 'Mins', s: 'Secs' }}
            until={this.state.secondsRemaining}
            timetoShow={('H', 'M', 'S')}
            onFinish={this.holidayStarted}
            size={25}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.appContainer}>
          <Text style={styles.titleText}>{this.state.textLine1}</Text>
          <Text style={styles.titleText}>{this.state.textLine2}</Text>
          <Text style={styles.titleText}>{this.state.textLine3}</Text>
          <Text style={styles.titleText}>{this.state.textLine4}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: SKYBLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: "200",
    color: DEEPBLUE,
    marginBottom: 10,
    textShadowColor: SAND,
    textShadowRadius: 8,
    textShadowOffset: { width: 5, height: 5 },
  },
  countDownDigit: {
    marginTop: 10,
    backgroundColor: DEEPBLUE,
    borderWidth: 1,
    borderColor: SAND,
  },
  countDownText: {
    color: SEAGREEN,
  },
  countDownLabel: {
    marginTop: 10,
    color: DEEPBLUE,
    fontSize: 12,
    fontWeight: "100",
    textShadowColor: SAND,
    textShadowRadius: 18,
    textShadowOffset: { width: 2, height: 2 },
  },
});
