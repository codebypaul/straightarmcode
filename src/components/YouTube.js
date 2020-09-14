import React, { PureComponent } from 'react'


export default class YouTube extends PureComponent {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1>YouTube.com : </h1>
                            <a href="https://www.youtube.com/channel/UCi98DcUVFUtcACuT93bXsig" target="_blank" rel="noopener noreferrer">
                            <button>
                                youtube.com/straightArmCode
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
