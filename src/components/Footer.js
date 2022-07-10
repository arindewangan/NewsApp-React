import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <img src="monkey-logo.png" alt="logo" className="bi" width="30" height="24"></img>
                            <span className="text-muted mx-1">© 2021 News Monkey, Inc</span>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;
