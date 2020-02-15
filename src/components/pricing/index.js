import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {

    state = {
        prices: [100,150,250],
        size: ['Large', 'Medium', 'Small'],
        desc: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum aliquam dolorum beatae modi omnis iusto, inventore nemo exercitationem tempora doloribus hic tempore perferendis numquam non in, aliquid ut et',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum aliquam dolorum beatae modi omnis iusto, inventore nemo exercitationem tempora doloribus hic tempore perferendis numquam non in, aliquid ut et',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum aliquam dolorum beatae modi omnis iusto, inventore nemo exercitationem tempora doloribus hic tempore perferendis numquam non in, aliquid ut et'
        ],
        linkto: ['http://google.com', 'http://mediocademy.com', 'http:courses.mediocademy.com'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (

            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.size[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[1]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                                text="Purchase"
                                bck="#ffa800"
                                link={this.state.linkto[i]}
                            />
                        </div>

                    </div>
                </div>
            </Zoom>
        ))
    )



    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        )
    }
}
