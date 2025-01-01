/* This file contains sample credentials. Please modify as needed.

you may use https://vscode.dev/
*/

const getCredentials = () => [
  {
    item: "Company Email",
    url: "https://mail.company.com",
    username: "user",
    password: "makemoney",
  },
  {
    item: "iPhone",
    password: "123456",
  },
  {
    item: " Cloud Account",
    url: "https://www.cloud.com",
    username: "user",
    password: "public_cloud",
    tags: ["Cloud  ", "production"],
    additional: "user",
  },
  {
    item: " Cloud Account",
    url: "https://www.cloud.com",
    username: "admin",
    password: "advanced",
    tags: ["Cloud  ", "production"],
    additional: "admin",
  },
  {
    item: " production VM",
    url: "172.23.69.0",
    username: "admin",
    password: "connect",
    tags: ["ssh  ", "production"],
  },
  {
    item: "test database",
    url: "172.23.69.1",
    username: "admin",
    password: "connect",
    tags: ["db", "test"],
    note: "postgresql",
  },
];
