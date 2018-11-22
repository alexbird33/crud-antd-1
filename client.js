export async function getUserData( ){
  const apiURL = "https://randomuser.me/api/?results=100&inc=name,gender,email";
  try {
      let response = await fetch(apiURL);
      let data = await response.json();
      //console.log(data.results);
      return data.results;
    } catch(e) {
      console.log("Oops, error", e);
      return {};
    }
}


export function getUserColumns() {
  return  [{
    title: '姓名',
    dataIndex: 'name',
    sorter: (a,b) => `${a.name.first} ${b.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`),
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  }, {
    title: '性别',
    dataIndex: 'gender',
    filters: [
      { text: '男', value: 'male' },
      { text: '女', value: 'female' },
    ],
    render: gender => gender === 'male' ? '男' : '女',
    width: '20%',
    onFilter: (value, record) => record.gender.indexOf(value) === 0,
  }, {
    title: '邮箱',
    dataIndex: 'email',
  }];          

}

export default {
  getUserData,
  getUserColumns
}