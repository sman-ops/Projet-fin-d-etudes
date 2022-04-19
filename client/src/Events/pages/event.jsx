import React,{useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import moment from 'moment' ;
import { Row, Col,Modal ,Card,Tag} from 'antd';

// function 
import { createEvents,listEvent, handleCurrentMonth , updateEvent} from '../functions/createEvent'

import './event.css'
function Event() {
  const user=JSON.parse(localStorage.getItem("user"))
  
   const {id} = user

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [values,setValues] = useState({
        title:'',
        start:'',
        end:'',
        lieu:'',
        UserId:id,
        color:''
    })

    const [events,setEvents] = useState([])
    const [currentEvent,setCurrentEvent] = useState([])

    const department = [
      {id:'1',name:'event important',color:'red'},
      {id:'2',name:'event soir ',color:'#55A9F7'},
      {id:'3',name:'event  matin ',color:'green'}
    ]


    useEffect(()=>{
        loadData()
        
      
      },[])

      const loadData = ()=>{
     
        listEvent()
        .then(res=>{
        setEvents(res.data)
        }).catch(err=>{
          console.log(err)
        })
      }
  
      const currentMonth = (info) =>{
        const m =info.view.calendar.currentDataManager.data.currentDate
        const mm = moment(m).format('M')
        handleCurrentMonth({mm})
        .then(res=>{
            setCurrentEvent(res.data)
            console.log(currentEvent)
        }).catch(err=>{
          console.log(err)
        })

      }


    const handleSelect = (info)=>{
        showModal()
        console.log(info)
        setValues({
            title:values.title,
            lieu:values.lieu,
            color:values.color,
            UserId:values.UserId,
            start: info.startStr,
            end:info.endStr
        })
        
    }

    const handleChange = (info)=>{
      // console.log((info.event.id))
      // console.log(info.event.startStr,info.event.endStr)
      const values = {
        id: info.event.id,
        start: info.event.startStr,
        end : info.event.endStr
      }
      updateEvent(values)
      .then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })

    }


    const onChangeTitle = (e) =>{
        console.log(e.target.value)
        setValues({...values,title: e.target.value})
        
    }

    const onChangeColor = (e) =>{
      console.log(e.target.value)
      setValues({...values,color: e.target.value})
  }
    const onChangeLieu = (e) =>{
      console.log(e.target.value)
      setValues({...values,lieu: e.target.value})
      
  }

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk =async () => {
          console.log(values)
        setIsModalVisible(false);
        const res = await createEvents(values)
        setValues({...values,title:'' })
        loadData()
        console.log(res)
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        setValues({...values,title:'' })
      };
    

    console.log(events)

    const d = moment(new Date()).format('DD/MM/YYYY')
    const r =moment( new Date())

    const filterDate = currentEvent.filter((item)=>{
      return d == moment(item.start).format('DD/MM/YYYY')
    })
    console.log(filterDate)
    
    const betweenDate=  currentEvent.filter(item=>{
      return r >= moment(item.start) && r <= moment(item.end)
    })

    console.log('between',betweenDate)

  return (
            
             <div className='card'>
              <div className="col-md-18">
                  <Row>
                      <Col span={5}>
                      <Card>
                            <ul>
                              {department.map((item,index)=>
                              <li 
                                className='fc-event'
                              
                              key={index} 
                              style={{backgroundColor:item.color}}
                              
                              >
                                
                                {item.name}
                              </li>
                              )}
                            </ul>
                     </Card>
                      <Card>
                        <ol>
                          {currentEvent.map((item,index)=>
                            <li key={index}>
                              {d ==moment(item.start).format('DD/MM/YYYY')
                              ? <>{moment(item.start).format('DD/MM/YYYY')+ "-" +item.title}<Tag color="green">today event</Tag></>
                              : r >= moment(item.start) && r < moment(item.end)
                                  ? <>{moment(item.start).format('DD/MM/YYYY')+ "-" +item.title}<Tag color="red">today passé</Tag></>
                                  : <> {moment(item.start).format('DD/MM/YYYY')+ "-" +item.title}</>
                              
                              }
                            </li>
                          )}
                        </ol>
                      </Card>
                      </Col>
                      <Col span={16}>
                <FullCalendar
                 plugins={[ dayGridPlugin,timeGridPlugin, interactionPlugin ]}
                 headerToolbar={{
                    left:'prev,next today',
                    center:'title',
                    right:'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                events={events}
                selectable={true}
                select={handleSelect}
                datesSet={currentMonth}
                editable={true}
                eventChange={handleChange}
           
                />
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    
                    <label> titre </label><input name="title" value={values.title}  onChange={onChangeTitle} /><br/>
                    <label> titredfdff </label> <input name="lieu" value={values.lieu}  onChange={onChangeLieu} />
                     <select name="color" onChange={onChangeColor}>
                          {department.map((item,index)=>
                              <option key={index} 
                              value={item.color} 
                           
                              >{item.name}</option>
                          )}
                     </select>
                        </Modal>
            
                </Col>
                </Row>
                </div></div>
        
  )
}

export default Event