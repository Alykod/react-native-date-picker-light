# react-native-date-picker-light
Date picker for react native, light and does not use modals (will work on all platforms)


This is the first implementation of this date picker. The date picker is controlled by arrows, it sits on the screen,
and does not use modals (For react native windows).


Format: ![Before change of date](https://i.imgur.com/0t7KyZU.png)

Format: ![After change of date](https://i.imgur.com/XMpZCWH.png)


##Only dependencies are prop-types and moment-js. 


There are various props that can be passed, I will soon add more modularity

the props allowed are 

selected = function (returns the date and day)

depressedColor = String (color for when the date is selected (default color : #7d7c7b)

pressedColor = String (color for when the date is not selected) (default color : #fff)

dateFormat = String (String from the date formats available in moment js) (default format: "D")

iconSize = Number (changes the size of the arrows for navigation) (default size : 30)

locale = String (changes the locale format of date) (default locale: 'es-mx')


<!-- USAGE EXAMPLES -->
## Usage

Import library.
```JS
import DatePicker from 'react-native-date-picker-light';
```


Call DatePicker in Render().
```JS
<DatePicker locale={'es-mx'} selected={(date) => console.log(date)}></DatePicker>
```


##Release 1.0.7

1) found a bug in installation and corrected it.
2) Remove react native vector dependency. 
3) Temp removed icon color prop.
4) using default props instead of ternary.
5) update versions of packages allowed to scope more versions.
