/* This file contains sample credentials. Please modify as needed.

NOTE: in js string, \ need to be escaped as \\
*/

const getCredentials = () => [
  {
    item: "email",
    url: "https://mail.shield.gov",
    username: "Skye",
    password: "123456",
    tags: ["email"],
  },
  {
    item: "authenticator",
    password: "123456",
  },
  {
    item: "web server prod",
    url: "172.23.69.0",
    username: "admin",
    tags: ["prod", "web", "rdp"],
    note: "password changes every day",
  },
  {
    item: "web server dev",
    url: "172.23.69.129",
    username: "admin",
    password: "123456",
    tags: ["dev", "web", "rdp"],
  },
  {
    item: "database server linux",
    url: "172.23.69.1",
    username: "root",
    password: "123456",
    Skye: "666666",
    tags: ["database", "server", "ssh"],
  },
  {
    item: "main database",
    url: "172.23.69.1:5432",
    username: "admin",
    password: "123456",
    tags: ["database", "postgresql"],
  },
  {
    item: "email server prod linux",
    url: "172.23.69.3",
    username: "admin",
    password: "123456",
    tags: ["email", "prod", "ssh"],
  },
];
