import { useEffect, useRef } from "react";

const TriggerElementvisib = () => {
  return (
    <>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </>
  );
};

export default TriggerElementvisib;

function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }
  return <ul>{items}</ul>;
}

function Box() {
  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    });
    observer.observe(div as any);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: "2px solid black",
        backgroundColor: "blue",
      }}
    />
  );
}

/**
 * giúp bạn thực hiện hành động khi phần tử bất kỳ bạn muong muốn người dùng scorll tới thay thế onScroll Element.getBoundingClientRect(), nó chính là bất đồng bộ, do trình duyệt quản lý, tối ưu và được xử lý bên ngoài luồng
 * khái niệm cần biết:
 * target là phần tử element
 *
 *
 */
