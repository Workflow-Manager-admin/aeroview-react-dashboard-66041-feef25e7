#!/bin/bash
cd /home/kavia/workspace/code-generation/aeroview-react-dashboard-66041-feef25e7/aeroview_react_dashboard
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

