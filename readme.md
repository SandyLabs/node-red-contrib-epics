node-red-contrib-epics
======

This node allows basic communication with Process Variables (PVs) on an Experimental Physics and Industrial Control 
System (EPICS) network. It depends on the [node-epics](http://github.com/RobbieClarken/node-epics) module written by Robbie Clarken.

Ensure either `EPICS_BASE` and `EPICS_HOST_ARCH` are set or

```bash
export NODE_EPICS_LIBCA=/path/to/libca
```

This release provides a very basic interface with minimal error handling done inside the node-red interface. However, 
all errors should appear either in the debug pane or in the node-red backend console (especially if crashing).

I have only tested with numerics and strings at the moment, not waveforms or other data types. Please see the node-epics
 github page for more information.

In future I hope to add more functionality to the node-epics module, including alarm handling etc, and pass this into 
the node.