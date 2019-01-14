import React from "react";
import ReactDOM from "react-dom";

class Menu extends React.Component{
  render() {
    return (
      <ul className={this.props.cssclass}>
        {this.props.data.map((item, i) => 
        <MenuItem data = {item} key = {i} />)}
      </ul>
    );
  }
}

class MenuItem extends React.Component {
	render() {
    if(this.props.data.child){
   		return (
   			<li>
         	<a href={this.props.data.link}>
         		<div className="ch">{this.props.data.txt}</div>
         	</a>
          <span className="slide_icon">
            <i className="fas fa-sort-down"></i>
          </span>
         	<Menu data = {this.props.data.child} />
        </li>
   		);
    }
    else if(this.props.data.txt){
      return (
        <li>
          <a href={this.props.data.link}>{this.props.data.txt}</a>
        </li>
      );
    }
    else if(this.props.data.img){
      return (
        <li className="menu_icon">
          <a href={this.props.data.link} target = {this.props.data.target}>
            <img src = {this.props.data.img} />
          </a>
        </li>
      );
    }
    else if(this.props.data.icon){
      return (
        <li>
          <a href={this.props.data.link} target = {this.props.data.target}>
            <i className={this.props.data.icon} ></i>
          </a>
        </li>
      );
    }
    else{
      return null;
    }
	}
}

class Header extends React.Component {
	constructor() {
    super();
    this.state = {
    	title: "芯麥舒食",
      logo: "/ezfiles/705/1705/img/7453/logo.png",
    	menu: [
        {
          link: "/m/412-1705-15567.php?Lang=zh-tw",
          txt: "最新消息"
        },
    		{
    			link: "/m/412-1705-15566.php?Lang=zh-tw",
    			txt: "關於芯麥"
    		},
    		{
    			link: "/m/412-1705-15571.php?Lang=zh-tw",
    			txt: "購物須知"
    		},
    		{
    			link: "m/412-1705-15568.php?Lang=zh-tw",
    			txt: "聯絡我們"
    		},
        {
          link: "https://www.facebook.com/%E8%8A%AF%E9%BA%A5%E8%88%92%E9%A3%9F-2098772267059307/",
          img: "/ezfiles/705/1705/img/7453/smile_fb.png",
          target: "_blank"
        },
        {
          link: "",
          img: "/ezfiles/705/1705/img/7453/smile_line.png",
          target: "_blank"
        }
    	],
      func : [
        {
          link: "/bin/index.php?Plugin=mobile&Action=mobilecmhome",
          icon: "fas fa-user-circle",
        },
        {
          link: "/bin/index.php?Plugin=mec&Action=mobile_meccart",
          icon: "fas fa-shopping-cart"
        }
      ]
    }
  }
  render(){
  	return(
  		<div className="header_rwd">
  			<div className="max_width row">
  				<div className="header_logo col-sm-3">
            <a href="/m/home.php">
              <img src = {this.state.logo} />
            </a>
        	</div>
          <div className="col-sm-9">
            <Menu data={this.state.func} cssclass="header_link"/>
          	<div className="header_menu_wrapper">
          		<div className="header_menu_icon_wrapper">
                  <div className="header_menu_icon">
                      <i className="fas fa-bars"></i>
                  </div>
              </div>
              <Menu data={this.state.menu} cssclass="header_menu"/>
          	</div>
          </div>
  			</div>
  		</div>
  	);
  }
}

export default Header;
ReactDOM.render(<Header/>, document.getElementById('header'));