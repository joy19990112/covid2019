import moment from 'moment'

var utils = {
  //Date对象转格式
  dateFormaterDate(dateStr, displayFormat) {
    return moment(dateStr).format(displayFormat);
  }
}

export default utils;