import React, { useEffect, useState } from "react";

export default function AccountManagementPage() {
  //   const userList = fetch("https://jsonplaceholder.typicode.com/todos/10")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API
    const fetchUsers = async () => {
      setTimeout(async () => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setUserList(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Lỗi khi fetch dữ liệu:", error); // Xử lý lỗi
          });
      }, 3000);
    };

    fetchUsers();
  }, []); // [] đảm bảo useEffect chỉ chạy một lần khi component mount

  console.log("userList: ", userList);

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <div>
      <div>
        <h2>Danh sách người dùng</h2>
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
      {/* <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}
