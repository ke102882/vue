import Mock from 'mockjs'
export default Mock.mock('testapi','get', {
  'list|1-50': [
    {
      "id|+1": 1,
      'name': '@name',
      'age|1-100': 100,
      'date': '@date',
      'isChecked': '@boolean',
      'email': '@email',
      'ip': '@ip',
    },
  ],
});
