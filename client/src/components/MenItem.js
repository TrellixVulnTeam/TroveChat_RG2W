import React, { Component } from 'react';
import Loading from './Loading';

class MenItem extends Component {
  render() {
    return (
      <div className='col-md-3 wow bounceIn animated'>
        <div className='list-section-wrap'>
          <div className='list-section-picture'>
            <img src={this.props.passItem.image}></img>
          </div>
          <div className='list-info'>
            <div>
              {this.props.passItem.brand}
            </div>
            <div>
              {this.props.passItem.itemname}
            </div>
            <div>
              ${this.props.passItem.price}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default MenItem;