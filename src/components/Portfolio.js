import React, { Component } from 'react';
import './App.css';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Github:
                  {resumeData.github}
                  
                </h4>
                
              </div>
            </aside>
          </div>
        </div>
      </div>
  </section>
        );
  }
}