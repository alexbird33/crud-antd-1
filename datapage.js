import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Table,Modal,Form,Row, Popconfirm, Layout, Input,Badge,Icon } from 'antd';
import  {getUserData, getUserColumns} from "./client";
const {  Content } = Layout;



export default class DataPage extends React.Component {

    state = {
        userList : [],
        listHeaders : [],
        isLoading : true,
        selectNumber : 0
    }

    componentDidMount(){
        const listHeaders = getUserColumns();
        this.setState({listHeaders});

        let id= 10000;
        getUserData().then( data => {
            const userList = data.map(user => {
                user.key = id++;
                return user;
            });
            this.setState({userList, isLoading : false});
        });
    }

    onSelectChange = (selectRowKeys, selectRows) => {
        //console.log(selectRowKeys, selectRows)
        this.setState({
            selectNumber : selectRowKeys.length
        })
    }

    onConfirmDelete = () => {

    }

    render (    ) {
        return (
            <Content style={{ padding: '0 50px' }}>
{/* toolbar  */}
            <Row style={{padding: '0,6px'}}>
                    <Button type={'primary'} style={{margin: '6px'}}>
                        <Icon type="plus-square" /> 新建
                    </Button>
                    <Button 
                        style={{margin: '6px'}} 
                        disabled={this.state.selectNumber!=1}>
                            <Icon type="edit" /> 修改
                    </Button>
                    <Badge count={this.state.selectNumber} offset={[-10,10]}>
                        <Popconfirm 
                            title={`确定要删除共${this.state.selectNumber}条数据吗？`} 
                            placement="right"
                            icon={<Icon type="exclamation-circle" style={{color:'red'}} />}
                            onConfirm={onConfirmDelete} >  
                            <Button 
                                type={'danger'} 
                                style={{margin: '6px'}} 
                                disabled={this.state.selectNumber==0}>
                                    <Icon type="delete" /> 删除
                            </Button>
                        </Popconfirm> 
                    </Badge>
                    <Input.Search
                        style={{float:'right',width: '200px', margin: '6px'}}
                        placeholder="搜索名称..."
                        />
            </Row>

{/* data table  */}

            <Table 
                rowSelection={{onChange: this.onSelectChange}} 
                dataSource={this.state.userList}  
                columns={this.state.listHeaders} 
                loading={this.state.isLoading} 
                pagination={{pageSize:50, simple:true}}
                scroll={{y:350}} 
                size={'small'}
                bordered  />

            </Content>
        );
    }
}