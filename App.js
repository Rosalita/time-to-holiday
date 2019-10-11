import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

const SAND = '#FAEDDA';
const SEAGREEN = '#AEE8CA';
let SKYBLUE = '#6ACFC9';
const OCEANBLUE = '#26B6C6';
const DEEPBLUE = '#3C2F80';

const poem1 = {
  line1: 'Roses are red',
  line2: 'This app is blue',
  line3: 'Not long now until',
  line4: 'Fuertaventura with you',
};

const poem2 = {
  line1: 'Holiday starts now!',
  line2: 'Our adventure has begun',
  line3: 'Lets make some memories',
  line4: 'And have loads of fun',
};

const Poetry = props => (
  <View style={styles.poemContainer}>
    <Text style={styles.poemText}>{props.line1}</Text>
    <Text style={styles.poemText}>{props.line2}</Text>
    <Text style={styles.poemText}>{props.line3}</Text>
    <Text style={styles.poemText}>{props.line4}</Text>
  </View>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsRemaining: 0,
      holidayStarted: false,
      poem: poem1,
    };
  }

  componentDidMount() {
    let dateTimeNow = moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ');
    const holidayTime = moment(
      'Sat, 14 Dec 2019 13:25:00 UTC',
      'ddd, DD MMM YYYY HH:mm:ss ZZ'
    );
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
    this.setState(() => ({ poem: poem2 }));
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Poetry {...this.state.poem} />
        {!this.state.holidayStarted && (
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
        )}
        <Image
          style={{width: 250, height: 250, marginTop: 20}}
          source={require('./assets/resort.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: SKYBLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  poemText: {
    fontSize: 24,
    fontWeight: '200',
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
    fontWeight: '100',
    textShadowColor: SAND,
    textShadowRadius: 18,
    textShadowOffset: { width: 2, height: 2 },
  },
});
