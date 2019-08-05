import {alertConstant} from '../constants/alert.constants';

export const alertAction = {
  success,
  error,
  clear
}

success = (message) => {
  return {
    type: alertConstant.SUCCESS,
    message
  }
}

error = (message) => {
  return {
    type: alertConstant.ERROR,
    message
  }
}

clear = () => {
  return {
    type: alertConstant.CLEAR
  }
}