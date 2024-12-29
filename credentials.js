/* This file contains sample credentials. Please modify as needed.*/

const credentials = () => {
  return [
    {
      // sample: typical
      item: "Company Email",
      url: "https://mail.company.com",
      username: "user",
      password: "monkey",
    },
    {
      // sample: minimal
      item: "iPhone",
      password: "123456",
    },
    {
      // sample: informative
      item: "AWS Account",
      url: "https://www.aws.com",
      username: "example",
      password: "orange",
      tags: ["aws", "production"],
      additional: "1234567890",
      extra: "abcdefg",
    },
  ];
};
