import React from "react";

const TriggerAnimation = () => {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button
          style={{ width: "8rem", height: "4rem", margin: "0 auto" }}
          onClick={() => setShow(!show)}
        >
          {show ? "Remove" : "Show"}
        </button>
      </div>
      <div style={{ marginTop: "10rem" }}>{show && <Welcome />}</div>
    </>
  );
};

export default TriggerAnimation;

function Welcome() {
  const ref: any = React.useRef(null);

  React.useEffect(() => {
    const animation = new Animation(ref.current);
    animation.start(1000);

    return () => {
      animation.stop();
    };
  }, []);
  return (
    <>
      <h1
        ref={ref}
        style={{
          opacity: 0,
          color: "white",
          padding: 50,
          textAlign: "center",
          fontSize: 50,
          backgroundImage:
            "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
        }}
      >
        WelCome Everyone
      </h1>
    </>
  );
}

class Animation {
  node: any;
  duration: any;
  frameId: any;
  startTime: any;
  constructor(node: Node) {
    this.node = node;
  }

  start(duration: any) {
    this.duration = duration;
    if (this.duration === 0) {
      this.onProgress(1);
    } else {
      this.onProgress(0);
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  onFrame() {
    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      // We still have more frames to paint
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  onProgress(progress: any) {
    this.node.style.opacity = progress;
  }

  stop() {
    cancelAnimationFrame(this.frameId);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}
