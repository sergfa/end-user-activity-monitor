describe("EUAMonitor", function () {
    it("should start monitoring", (done) => {
        const activityDetectorAgent = new EUAMonitor.Agent({
            idleInterval: 5000
        });
        activityDetectorAgent.startMonitor();
        activityDetectorAgent.activityObservable().subscribe(
            status => {
                expect(status).toBe('idle');
                done();
            }
        )
    });

    

});