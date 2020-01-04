import React, { Component } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import SideBar from '../components/SideBar/SideBar';
import Backdrop from '../components/Backdrop/Backdrop';
import 'react-animated-slider/build/horizontal.css';
import ContentSlider from '../components/SlideContent/SlideContent';
import About from '../components/About/About';
import VerticalProgBar from '../components/VerticalProgBar/VerticalProgbar';

class MainPage extends Component {
    state = {
        sideBarOpen: false
    }

    sideBarToggleClickHandler = () => {
        this.setState((prevState) => {
            return{sideBarOpen: !prevState.sideBarOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideBarOpen: false});
    };

    render() {
        let backdrop;

        if(this.state.sideBarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return(
            <div style={{height: '100%', width: '100%'}}>
                <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler} />
                <SideBar show={this.state.sideBarOpen} />
                {backdrop}
                
                <ContentSlider />

                <About />

                <VerticalProgBar />          

            </div>
        )
    };
}

export default MainPage;