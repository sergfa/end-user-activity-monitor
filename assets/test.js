const activityDetectorAgent = new EUAMonitor.Agent({idleInterval: 5000});
activityDetectorAgent.startMonitor();
activityDetectorAgent.activityObservable().subscribe(
    status => console.log('activity status:', status)
)

//setTimeout(() => activityDetectorAgent.stopMonitor(), 30000);