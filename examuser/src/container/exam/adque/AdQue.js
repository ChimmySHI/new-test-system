import React, { Component } from 'react'
import {Button, Icon, Select,Input} from 'antd'
import {connect} from 'dva'
import style from './AdQue.css'
import {withRouter} from 'react-router-dom'
import {upquestions,userinfo} from '../../../utils/userMessage'
const { TextArea } = Input;
const Option = Select.Option;
let mapState = store => {
  window.store = store;
  return {...store.login}
}
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      subjectone:'',
      subjecttwo:'',
      text:'',
      size:'',
      user_id:''
    };
    }
    componentDidMount(){
      userinfo().then(res=>{
        console.log(res)
        this.setState({
          user_id:res.data.data.user_id
        })
      })
    }
      but_add = () => {
        let {
          subject,
          subjectone,
          subjecttwo,
          size,
          text,
          user_id
        } =this.state;   

          upquestions({
            questions_type_id:subjectone,
            questions_stem:text,
            subject_id: subjecttwo,
            exam_id:subject,
            questions_answer:size,
            user_id:user_id
          }).then(res=>{
            console.log(res)
          })

          
      }
      textone=(e)=>{
        this.setState({
          text:e.target.value
        })
      }
      texttwo=(e)=>{
        this.setState({
          size:e.target.value
        })
      }
      handleChangeone=(value)=>{
        console.log(value)
        this.setState({
          subjectone:value
        })
      }
      handleChangetwo=(value)=>{
        this.setState({
          subjecttwo:value
        })
      }
      handleChangethree=(value)=>{
        this.setState({
          subject:value
        })
      }
  render () {
    return (
      <div className={style.content}>
      <div className={style.top}>
        试题管理/添加试题
        {/* <Button type="danger" size='small'>Danger</Button> */}
      </div>
      <div className={style.cont}>
      <div className={style.title}>请在这里输入题干</div>
        {/* <Title level={2}>请在这里输入题干</Title> */}
        {/* <h3 className={style.title}></h3> */}
        <div className={style.text}>
          <div className={style.icons}>
            <div className={style.icon_left}>
              <Icon type="home" />
              <Icon type="italic" />
              <Icon type="font-colors" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
            </div>
            <div className={style.icon_right}>
              <Icon type="align-left" />
              <Icon type="align-left" />
            </div>
          </div>
          <TextArea onChange={this.textone}  placeholder="Autosize height based on content lines" rows={6} />
        </div>
      </div>
      <div className={style.cont}>
        {/* <Title level={2}>请在这里输入答案</Title> */}
        <div className={style.title}>请在这里输入答案</div>
        <div className={style.text}>
          <div className={style.icons}>
            <div className={style.icon_left}>
              <Icon type="home" />
              <Icon type="italic" />
              <Icon type="font-colors" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
            </div>
            <div className={style.icon_right}>
              <Icon type="align-left" />
              <Icon type="align-left" />
            </div>
          </div>
          <TextArea onChange={this.texttwo}  placeholder="Autosize height based on content lines" rows={12}/>
        </div>
      </div>
      <div className={style.choose}>
        <div className={style.chooseBox}>
          <span>试题选择试题类型：</span>
          <Select  defaultValue="周考一" style={{ width: 120 }} onChange={this.handleChangeone}>
            <Option value="8sc5d7-7p5f9e-cb2zii-ahe5i">周考一</Option>
            <Option value="jpg8y9-zbzt7o-jpvuhf-fwnjvr">周考二</Option>
            <Option value="ukmp9b-radddj-ogwdr-nw3ane">周考三</Option>
            <Option value="wbxm4-jf8q6k-lvt2ca-ze96mg">月考</Option>
          </Select>
        </div>
        <div className={style.chooseBox}>
        <span>试题选择课程类型</span>
          <Select  defaultValue="js" style={{ width: 120 }} onChange={this.handleChangetwo}>
            <Option value="fqtktr-1lq5u">Js</Option>
            <Option value="fyu3ln-azjkie">渐进式开发</Option>
            <Option value="8tl7os-r49tld">模块化开发</Option>
            <Option value="94sjh6-lnlxe">项目实战</Option>
          </Select>
        </div>
        <div className={style.chooseBox}>
        <span>试题选择题目类型</span>
          <Select ref={subject=>this.subject=subject} defaultValue="简答题" style={{ width: 120 }} onChange={this.handleChangethree}>
            <Option value="774318-730z8m">简答题</Option>
            <Option value="fwf0t-wla1q">代码补全</Option>
            <Option value="n66k4n-i9zpen">修改bug</Option>
            <Option value="v8i73-r8oai">手写代码</Option>
          </Select>
        </div>
      </div>
      <div className={style.subBtn}>
        <Button type="primary" onClick={this.but_add}>提交</Button>
      </div>
    </div>
    )
  }
}

export default withRouter(connect(mapState)(componentName))