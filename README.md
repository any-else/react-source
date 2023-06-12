#Learn React

#Create and nesting component

- React apps được tạo ra từ các components. Mỗi một component là một phần của giao diện người dùng có logic và hình thức riêng. Mỗi component có thể nhỏ bằng nút hoặc lơn toàn bộ trang

- React component là function js return về markup như kiểu HTML
- Markup ở đây sử dụng JSX
- Displaying Data: thằng Jsx cho phép sử dụng javascript, được thể hiện qua dấu ngoặc kép

```return (
  <h1>
    {user.name}
  </h1>
);
```

- Conditional rendering
  - Trong React không có cú pháp nào để làm điều này thay vào đó, mình sẽ sử dụng các kĩ thuật giống như viêt mã Javascript

Ví dụ

```
let content;
if (isLoggedIn) {
content = <AdminPanel />;
} else {
content = <LoginForm />;
}
return (
<div>
  {content}
</div>
);
```

or

```
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

Rendering List

- phải dựa vào kĩ thuật của javascript để làm. Ví dụ như loop(), for, map để hiện thị list
- Ước
