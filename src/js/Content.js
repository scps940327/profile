import React from 'react';
import ReactDOM from 'react-dom';

import Experience from './components/container/Experience'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const banner_style = {
      backgroundImage: "url('../../src/img/index_banner-02.jpg')"
    },
    title_img_style = {
      width: "250px",
      height: "250px",
      border: "10px #FFF solid",
      backgroundImage : "url('../../src/img/title_img.jpg')"
    }
    return(
      <div>
        <div className="section bg_img row align-items-center px-3" style={banner_style}>
          <div className="section_inner col text-center">
            <div className="bg_img rounded-circle d-inline-block" style={title_img_style}></div>
            <div className="h3 pt-3"> Lauren's Profile</div>
          </div>
        </div>
        <div className="section row align-items-center px-3 bg-light">
          <div className="col">
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
ReactDOM.render(<Main />, document.getElementById('content'));