
import React,{useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import moment from 'moment' ;
import { Row, Col,Modal ,Card,Tag} from 'antd';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
// generate a unique id
import shordid from 'shortid';
// function 
import { createSalon,listSalon, handleCurrentMonthSalon , updateSalon, removeSalon} from '../functions/Salon'

import './salon.css'
function Salon() {


    const user=JSON.parse(localStorage.getItem("user"))
  
   const {id} = user

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible1, setIsModalVisible1] = useState(false);
    const [values,setValues] = useState({
        title:'',
        start:'',
        end:'',
        mdp:'',
        UserId:id,
        color:'',
        email:'',
      
    })

    const [events,setEvents] = useState([])
    const [currentSalon,setCurrentSalon] = useState([])

    const [idEvent,setIdEvent] = useState('')

    const department = [
      {id:'1',name:'event important',color:'#FAAA8D'},
      {id:'2',name:'event soir ',color:'#8ca6fa'},
      {id:'3',name:'event  matin ',color:'#169505'}
    ]


    useEffect(()=>{
        loadData()
        
      
      },[])

      const loadData = ()=>{
     
        listSalon()
        .then(res=>{
        setEvents(res.data)
        }).catch(err=>{
          console.log(err)
        })
      }
  
      
      const handleCLick = (info)=>{
        showModal1()
        console.log(info.event.id)
        setIdEvent(info.event.id)
      }

      const handleRemove = ()=>{
        // alert(idEvent)
        removeSalon(idEvent)
        .then(res=>{
          loadData()
          console.log(res)

        }).catch(err=>{
          console.log(err)
        })
        setIsModalVisible1(false)

      }

      const currentMonthSalon = (info) =>{
        const m =info.view.calendar.currentDataManager.data.currentDate
        const mm = moment(m).format('M')
        handleCurrentMonthSalon({mm})
        .then(res=>{
            setCurrentSalon(res.data)
            console.log(currentSalon)
        }).catch(err=>{
          console.log(err)
        })

      }


    const handleSelect = (info)=>{
        showModal()
        console.log(info)
        setValues({
            title:values.title,
            mdp:values.mdp,
            color:values.color,
            UserId:values.UserId,
            start: info.startStr,
            end:info.endStr,
            email:values.email,
           
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
      updateSalon(values)
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

  const generateShortId = ()=>{
    const uid= shordid.generate()
    setValues({...values,mdp:uid})
  }
  
  const onChangeEmail = (e) =>{
    console.log(e.target.value)
    setValues({...values,email: e.target.value})
    
}


    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk =async () => {
          console.log(values)
        setIsModalVisible(false);
        const res = await createSalon(values)
        setValues({...values,title:'' })
        loadData()
        console.log(res)
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        setValues({...values,title:'' })
      };


      const showModal1 = () => {
        setIsModalVisible1(true);
      };
    
      const handleOk1 = () => {
          
        setIsModalVisible1(false);
     
      };
    
      const handleCancel1 = () => {
        setIsModalVisible1(false);
      
      };
    
    

    console.log(events)

    const d = moment(new Date()).format('DD/MM/YYYY')
    const r =moment( new Date())

    const filterDate = currentSalon.filter((item)=>{
      return d == moment(item.start).format('DD/MM/YYYY')
    })
    console.log(filterDate)
    
    const betweenDate=  currentSalon.filter(item=>{
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
            <Card style={{backgroundColor:"#e5eaf5"}}>
              <ol>
                {currentSalon.map((item,index)=>
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
      datesSet={currentMonthSalon}
      eventClick={handleCLick}
      editable={true}
      eventChange={handleChange}
 
      />
         <Modal title="Add New Event" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
         <Grid item xs={12}  mb={2}>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
           1. Profil d'évenement
           </Typography>
         </Grid>
              <Grid item xs={12} sm={6} mb={4}>
                <TextField fullWidth label='Nom de salon ' value={values.title}  onChange={onChangeTitle} placeholder='Event of project name' />
              </Grid>
              <Grid item xs={12} sm={6} mb={4} >
                <TextField fullWidth label='Liste des paricitpants' value={values.email}  onChange={onChangeEmail} placeholder='email.' />
              </Grid>
              
             
             
              <Grid item xs={12}  mb={2}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Planning de l'événement 
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} mb={4}>
                <TextField fullWidth label='Start of event' value={values.start}   placeholder='Start of event' />
              </Grid>
              <Grid item xs={12} sm={6} mb={4}>
                <TextField fullWidth label='End of event' value={values.end}  placeholder='End of event' />
              </Grid>

              <Grid item xs={12} mb={2}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                3. Informations supplémentaires
                </Typography>
              </Grid>
              <Grid item xs={12} mb={2}>
              <Button onClick={generateShortId}  style={{width:"25%",height:"50px"}} type='submit' sx={{ mr: 2 }} variant='contained'>
                  Generate url unique
              </Button>
               </Grid>
              <Grid item xs={12} sm={6} mb={4} >
                <TextField fullWidth label='Mot de passe Salon' value={values.mdp}  placeholder='tunis,....' />
              </Grid>
             
         
          {/* <label> titre </label><input name="title" value={values.title}  onChange={onChangeTitle} /><br/>
          <label> lieu </label> <input name="lieu" value={values.lieu}  onChange={onChangeLieu} /> */}
           <select name="color" onChange={onChangeColor}>
                {department.map((item,index)=>
                    <option key={index} 
                    value={item.color} 
                 
                    >{item.name}</option>
                )}
           </select>
        </Modal>
        <Modal 
        title="Delete an event"
         visible={isModalVisible1}
         onOk={handleOk1}
         onCancel={handleCancel1}
         footer={[
          <button className='del' style={{width:"150px",height:"50px"}} onClick={handleRemove}>Delete</button>,
          <button className='cancel' style={{width:"150px",height:"50px",marginRight:"90px"}} onClick={handleCancel1}>Cancel</button>
         
         ]}
         >

          
        <h1>Are you sure you want to delete your accountt</h1>
       
        </Modal>
  
      </Col>
      </Row>
      </div></div>
  )
}

export default Salon