import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  toggler: {
    borderRadius: 30,
    width: 40,
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  play: {
    marginLeft: 5,
  },
});
