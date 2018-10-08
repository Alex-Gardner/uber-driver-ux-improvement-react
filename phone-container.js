import React from 'react'
import hamburgerUrl from './images/settings-hamburger.svg'
import mapUrl from './images/fakemap-with-path.svg'
import './main.css'

//TODO: CSS rules for the following:
        // - hamburger size / location
        // - box shadow/sizing for the containers
        // - flexbox for the layout

const mockAddress = '123 Elm Circle'

function AddressDiv(props) {
        return (props.isLoading ? null : (<div className='address-box'> {mockAddress} </div>))
}

function AddressTitle() {
    return (
        <h2 className='trip-type'>{mockAddress}</h2>
    )
}

function DestinationAddress(props) {
    return (
        props.isLoading ? <h2 className='trip-type'>Routing...</h2> : <AddressTitle />
    )
}

function TripTypeOrAddress(props) {
    return (
        props.isLoading ? (<h4 className='trip-type'>Dropoff</h4>) : <AddressTitle />
    )
}

function LoadingAnimation(props) {
    return (
        props.isLoading ? (
            <div className='loading-slider'></div>
        ) : null 
    )
}

export default function Outline(props) {
    return (
        <div className='phone-outline'>
            {/* If state is in navigation mode, expand and show directions */}
            <div className='top-panel-holder'>
                <div className={props.isNavigating ? 'top-panel with-nav' : 'top-panel'}>
                    {props.isNavigating ? <DestinationAddress isLoading={props.isLoading}/> : <TripTypeOrAddress isLoading={props.isLoading} />}
                    <img src={hamburgerUrl} className='svg-hamburger' />
                </div>
                <AddressDiv isLoading={props.isLoading}/>
                {/* {props.isLoading ? null : (<div> {mockAddress} </div>)} */}
                <div className='inside-animator'>
                    <LoadingAnimation isLoading={props.isLoading}/> 
                </div>
            </div>
            <img src={mapUrl} className='non-interactive-map' />
            <div className='bottom-panel'>
                <div className='bottom-panel-client-name'>
                    <h4>-*Client Name*-</h4>
                </div>
                {/* If state is in navigation mode, shrink and hide the trip complete slider */}
                {props.isNavigating ? null : (<div className='trip-complete-container'>
                    <div className='trip-complete'>COMPLETE TRIP</div>
                </div>) }
                
            </div>
        </div>
    )
}