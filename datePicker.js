import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet , Image} from "react-native";
import moment from "moment";
import PropTypes from 'prop-types';


const days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


export default class DatePicker extends Component {
  constructor() {
    super();
    this.state = {
      arrowCount: 0,
      weekObject: [],
      selectedDate: {
        day: null,
        date: null
      }
    };
  }
  componentDidMount() {
    this.dateCreator();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.weekObject != nextState.weekObject ||
      this.state.selectedDate != nextState.selectedDate
    );
  }

  dateCreator = () => {
    const daysArray = days;
    let weekObject = [...this.state.weekObject];
    weekObject[this.state.arrowCount] = [];
    let todaysDateIndex = daysArray.indexOf(moment().format("ddd"));
    for (let day in daysArray) {
      let selectedWeekDaySet =
        day - todaysDateIndex + this.state.arrowCount * 7;
      let calenderDay = daysArray[day];
      let dateObject = {
        day: calenderDay,
        date: moment()
          .add(selectedWeekDaySet, "day")
          .format(this.props.dateFormat),
        monthYear: moment()
          .add(selectedWeekDaySet, "day")
          .format("MMMM YYYY")
      };
      weekObject[this.state.arrowCount][day] = dateObject;
    }
    this.setState({ weekObject });
  };

  handlePress = date => {
    if (
      this.state.selectedDate.day == date.day &&
      this.state.selectedDate.date == date.date
    ) {
      this.setState({ selectedDate: { day: null, date: null } });
    } else{
      let dates = {
        day: date.day,
        date: date.date
      }
      this.setState({
        selectedDate: {
          day: date.day,
          date: date.date
        }
      }, this.props.selected(dates));
    }
  };

  handleArrowChange = time => {
    this.setState({ arrowCount: this.state.arrowCount - time }, () => {
      this.dateCreator();
    });
  };

  handleMonthYearComponent = () => {
    if(this.state.weekObject.length > 0)
    return <Text  style={Styles.dateComponentYearText}>{this.state.weekObject[this.state.arrowCount][3].monthYear}</Text>
  }

  handleDateComponentDisplay = () => {
    return this.state.weekObject[this.state.arrowCount].map((date, index) => {
      let isPressed =
        this.state.selectedDate.day == date.day &&
        this.state.selectedDate.date == date.date;
      return (
        <TouchableOpacity
          key={index}
          onPress={() => this.handlePress(date)}
          style={Styles.dateComponentDateTouchable}
          >
          <Text style={{ color: isPressed ? this.props.pressedColor  : this.props.depressedColor  }}>
            {date.day}
          </Text>
          <Text style={{ color: isPressed ? this.props.pressedColor : this.props.depressedColor  }}>
            {date.date}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={Styles.dateComponentView}>
        {this.handleMonthYearComponent()}
        <View style={Styles.dateComponentDateView}>
          <Text />
          <TouchableOpacity onPress={() => this.handleArrowChange(1)}>
            <Image style={{width: this.props.iconSize, height: this.props.iconSize}} 
            source={require('./left-arrow.png')}
            />
          </TouchableOpacity>
          {this.state.weekObject.length != 0 &&
            this.handleDateComponentDisplay()}
          <TouchableOpacity onPress={() => this.handleArrowChange(-1)}>
          <Image style={{width: this.props.iconSize, height: this.props.iconSize}} 
            source={require('./right-arrow.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
DatePicker.defaultProps = {
    iconSize: 30,
    dateFormat: "D",
    pressedColor: "#fff",
    depressedColor: "#7d7c7b",
}

DatePicker.PropTypes = {
  iconSize: PropTypes.number,
  dateFormat: PropTypes.string,
  pressedColor: PropTypes.string,
  depressedColor: PropTypes.string,
  selected: PropTypes.func
}


const Styles = StyleSheet.create({
  dateComponentView: {
    flex: 1, flexDirection: "column" , alignItems: 'center'
  },
  dateComponentYearText: {
    color: '#fff', fontSize: 20
  },
  dateComponentDateTouchable: {
    flex: 1,
    flexDirection: "column",
    color: "#7d7c7b",
    alignItems: "center"
  },
  dateComponentDateView: {
    flex: 1, flexDirection: "row", marginTop: 10
  }
})