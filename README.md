# end-user-activity-monitor

EUAMonitor is a fast, lightweight and flexible library that detects when user becomes idle or active.
Can be used as ES2015 module import or can be loaded with script tag.

## Installation

```bash
npm i end-user-activity-monitor
```

## Usage

ES2015 module import:

```javascript
import { Agent } from "end-user-activity-monitor";
// ...

const activityDetectorAgent = new Agent({ idleInterval: 5000 });
//start activity monitoring
activityDetectorAgent.startMonitor();
//subscribe to activity changes: active/iddle
activityDetectorAgent.activityObservable().subscribe(status => console.log("activity status:", status));
//stop activity monitoring after 30 secs
setTimeout(() => activityDetectorAgent.stopMonitor(), 30000);
```

The consumer also can use the library by loading it via a script tag:

```html
<!DOCTYPE html>
<html>
  ...
  <script src="dist/end-user-activity-monitor.js"></script>
  <script>
    //create activity detector agent which fires activity idle event if user is not active for 5 seconds
    const activityDetectorAgent = new EUAMonitor.Agent({ idleInterval: 5000 });
    //start activity monitoring
    activityDetectorAgent.startMonitor();
    //subscribe to activity changes: active/iddle
    activityDetectorAgent.activityObservable().subscribe(status => console.log("activity status:", status));
    //stop activity monitoring after 30 secs
    setTimeout(() => activityDetectorAgent.stopMonitor(), 30000);
  </script>
</html>
```

## API

//create acrivity detector with idle interval in milliseconds

```javascript
const agent = new EUAMonitor.Agent({ idleInterval: 5000 });
```

//start activity monitroing

```javascript
agent.startMonitor();
```

//stop activity monitroing

```javascript
agent.stopMonitor();
```

//subscribe to activity changes

```javascript
agent.activityObservable().subscribe(status => console.log("activity status:", status));
```

//check if user is active

```javascript
agent.isActive();
```

//check if user is idle

```javascript
agent.isIdle();
```
