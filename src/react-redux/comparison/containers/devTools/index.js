import React from 'react'
//TOOLS
import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'
import Inspector from 'redux-devtools-inspector';
import DiffMonitor from 'redux-devtools-diff-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';
import Dispatcher from 'redux-devtools-dispatch';
import actions from '../../actions';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q"
               changeMonitorKey="ctrl-m" defaultIsVisible={true}>
    <Inspector theme="tomorrow" invertTheme={false}/>
    <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    <DiffMonitor theme='tomorrow'/>
    <SliderMonitor keyboardEnabled/>
    <ChartMonitor/>
    <Dispatcher actionCreators={actions}/>
  </DockMonitor>
);


export default DevTools;
