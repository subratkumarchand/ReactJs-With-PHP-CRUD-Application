import React from 'react';

class Chat extends React.Component {
    render() {
        return (
            <div className="container-fluid chat-container">
                <div className="container-fluid px-0 content-section">
                    <div className="row1 h-100 msg-section">

                        <div className="row no-gutters msg-header py-3">
                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-4 col-8">
                                <div className="row no-gutters">
                                    <div className="col-xl-1 col-lg-3 col-sm-2 col-2 back-icon pt-2 pl-2">
                                        <a href="home.html"><i className="fa fa-arrow-left"></i></a>
                                    </div>
                                    <div className="col-xl-8 col-lg-9 col-sm-10 col-10 header-info">
                                        <div className="row no-gutters">
                                            <div className="profile-img"></div>
                                            <div className="user-info pl-2">
                                                <h5>Susan Bot</h5>
                                                <p>Last seen at 6:57 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-4 text-right pr-3">
                                <div className="dropdown">
                                    <i className="fa fa-navicon"></i>
                                    <div className="dropdown-content text-left">
                                        <a href="select-wallpaper.html"><i className="fa fa-pencil-square-o"></i> Wallpaper</a>
                                        <a href="#"><i className="fa fa-power-off"></i> Sign Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters chat-body">
                            <div className="col-xl-12 col-md-12 col-sm-12 col-12 cht-body">
                                <div className="col msg-body">
                                    <div className="reciver">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, pariatur aperiam totam asperiores unde ab, alias veritatis, eum, autem cum deleniti excepturi id itaque optio nemo possimus beatae perferendis minus.</p>
                                        <span className="msg-time">Sunday 6:47 PM</span>
                                    </div>
                                </div>
                                <div className="col msg-body">
                                    <div className="sender">
                                        <p>Hi, how are you? Testing message.</p>
                                        <span className="msg-time">Sunday 6:47 PM</span>
                                    </div>
                                </div>
                                <div className="col msg-body">
                                    <div className="reciver">
                                        <p>I am fine and you.</p>
                                        <span className="msg-time">Sunday 6:48 PM</span>
                                    </div>
                                </div>
                                <div className="col msg-body">
                                    <div className="sender">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis optio dolorum sunt veniam, ratione quia doloremque possimus ex sint assumenda consectetur, fugit cum debitis libero, eligendi accusamus vitae molestias tenetur.</p>
                                        <span className="msg-time">Sunday 6:48 PM</span>
                                    </div>
                                </div>
                                <div className="col msg-body">
                                    <div className="reciver">
                                        <img src="assets/images/b1.jpg" alt="" className="img-fluid rec-img" />
                                        <p>I am fine and you.</p>
                                        <span className="msg-time">Sunday 7:05 PM</span>
                                    </div>
                                </div>
                                <div className="col msg-body">
                                    <div className="reciver">
                                        <p>Did it's work.</p>
                                        <span className="msg-time">Sunday 6:48 PM</span>
                                    </div>
                                </div>
                                <div className="col msg-body">
                                    <div className="sender">
                                        <p>Nothing happen, wait.</p>
                                        <span className="msg-time">Sunday 6:47 PM</span>
                                    </div>
                                </div>
                                <div className="col-sm-12 col msg-body">
                                    <div className="sender">
                                        <img src="assets/images/b1.jpg" alt="" className="img-fluid sender-img" />
                                        <p>I'm also fine.</p>
                                        <span className="msg-time">Sunday 7:31 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row control-section no-gutters">
                            <div className="col-sm-10 col-11">
                                <form>
                                    <div><textarea placeholder="Type a message here" className="cht-textbox"></textarea></div>
                                    <a href="#"><i className="fa fa-smile-o smiley" title="emoji's"></i></a>

                                </form>
                            </div>
                            <div className="col-sm-1 col-1">
                                <input type="file" name="attach-file" id="input-files" />
                                <label htmlFor="input-files"><i className="fa fa-paperclip smiley1"></i></label>
                                <i className="fa fa-send send-btn" title="Send"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Chat;