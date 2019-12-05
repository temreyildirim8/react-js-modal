import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super();
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div className="modal fade" id="largeModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="largeModalLabel">
                {this.props.title}
              </h4>
            </div>
            <div className="modal-body">{this.props.body}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link waves-effect" onClick={this.props.handleClick}>
                SAVE CHANGES
              </button>
              <button
                type="button"
                className="btn btn-link waves-effect btn success"
                data-dismiss="modal"
                onClick={this.props.close}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
