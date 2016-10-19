import React from 'react'
//TOOLS
import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q"
               changeMonitorKey="ctrl-m">
    <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    <SliderMonitor keyboardEnabled/>
  </DockMonitor>
);


export default DevTools;
