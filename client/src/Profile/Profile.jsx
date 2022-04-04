import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'


function Profile() {
  return (
    <div class="container">
    <div class="row">
            <div class="col-lg-4">
               <div class="profile-card-4 z-depth-3">
                <div class="card">
                  <div class="card-body text-center bg-primary rounded-top">
                   <div class="user-box">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar" />
                  </div>
                  <h5 class="mb-1 text-white">Jhon Doe</h5>
                  <h6 class="text-light">UI/UX Engineer</h6>
                 </div>
                  <div class="card-body">
                    <ul class="list-group shadow-none">
                    <li class="list-group-item">
                      <div class="list-icon">
                        <i class="fa fa-phone-square"></i>
                      </div>
                      <div class="list-details">
                        <span>9910XXXXXX</span>
                        <small>Mobile Number</small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="list-icon">
                        <i class="fa fa-envelope"></i>
                      </div>
                      <div class="list-details">
                        <span>info@example.com</span>
                        <small>Email Address</small>
                      </div>
                    </li>
                 
                    </ul>
                    <div class="row text-center mt-4">
                     
                        
                      
                     </div>
                   </div>
                
                 </div>
               </div>
            </div>
            <div class="col-lg-8">
               <div class="c    ard z-depth-3">
                <div class="card-body">
                <ul class="nav nav-pills nav-pills-primary nav-justified">
                    <li class="nav-item">
                        <a href="javascript:void();" data-target="#profile" data-toggle="pill" class="nav-link active show"><i class="icon-user"></i> <span class="hidden-xs">Profile</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void();" data-target="#messages" data-toggle="pill" class="nav-link"><i class="icon-envelope-open"></i> <span class="hidden-xs">Messages</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void();" data-target="#edit" data-toggle="pill" class="nav-link"><i class="icon-note"></i> <span class="hidden-xs">Edit</span></a>
                    </li>
                </ul>
                <div class="tab-content p-3">
                    <div class="tab-pane active show" id="profile">
                        <h5 class="mb-3">User Profile</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <h6>About</h6>
                                <p>
                                    Web Designer, UI/UX Engineer
                                </p>
                                <h6>Hobbies</h6>
                                <p>
                                    Indie music, skiing and hiking. I love the great outdoors.
                                </p>
                            </div>
                           
                           
                        </div>
                     
                    </div>
                    <div class="tab-pane" id="messages">
                        <div class="alert alert-info alert-dismissible" role="alert">
                       <button type="button" class="close" data-dismiss="alert">×</button>
                        <div class="alert-icon">
                         <i class="icon-info"></i>
                        </div>
                        <div class="alert-message">
                          <span><strong>Info!</strong> Lorem Ipsum is simply dummy text.</span>
                        </div>
                      </div>
                        <table class="table table-hover table-striped">
                            <tbody>                                    
                                <tr>
                                    <td>
                                       <span class="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <span class="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <span class="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus. 
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <span class="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus. 
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <span class="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros. 
                                    </td>
                                </tr>
                            </tbody> 
                        </table>
                    </div>
                    <div class="tab-pane" id="edit">
                        <form>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text"  />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text"  />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="email" value="mark@example.com" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Change profile</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="file" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Website</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="url" value="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Address</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" value="" placeholder="Street" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label"></label>
                                <div class="col-lg-6">
                                    <input class="form-control" type="text" value="" placeholder="City" />
                                </div>
                                <div class="col-lg-3">
                                    <input class="form-control" type="text" value="" placeholder="State" />
                                </div>
                            </div>
                           
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Username</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" value="jhonsanmark"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Password</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="password" value="11111122333"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="password" value="11111122333" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label"></label>
                                <div class="col-lg-9">
                                    <input type="reset" class="btn btn-secondary" value="Cancel" />
                                    <input type="button" class="btn btn-primary" value="Save Changes" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
          </div>
            
        </div>
    </div>


  )
}

export default Profile