import { HeaderDataType } from "@types";

export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

/* export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
]; */

export const headerData: HeaderDataType[] = [
  {
    id: 1,
    content: "Trang chủ",
    isHover: false,
  },
  {
    id: 2,
    content: "Giới thiệu",
    isHover: true,
    subNav: [
      {
        idSub: "sub-2-1",
        content: "Tổng quan",
      }
    ]
  },
  {
    id: 3,
    content: "Quan hệ cổ đông",
    isHover: true,
    subNav: [
      {
        idSub: "sub-3-1",
        content: "Tin tức",
      },
      {
        idSub: "sub-3-2",
        content: "Điều lệ và Quy chế công ty",
        detail: [
          {
            idDetail: "sub-3-2-1",
            content: "Điều lệ",
          },
          {
            idDetail: "sub-3-2-2",
            content: "Quy chế",
          }
        ]
      },
      {
        idSub: "sub-3-3",
        content: "Báo cáo tài chính",
      },
      {
        idSub: "sub-3-4",
        content: "Báo cáo thường niên",
      },
      {
        idSub: "sub-3-5",
        content: "Báo cáo tình hình quản trị công ty",
      },
      {
        idSub: "sub-3-6",
        content: "Tài liệu đại hội cổ đông",
      },
      {
        idSub: "sub-3-7",
        content: "Nghị quyết, Quyết định đại hội cổ đông",
      },
      {
        idSub: "sub-3-8",
        content: "Nghị Quyết, Quyết định Hội đồng quản trị",
      }
      
    ]
  },
  {
    id: 4,
    content: "Tuyển dụng",
    isHover: false
  },
  {
    id: 5,
    content: "Mời thầu",
    isHover: false
  },
  {
    id: 6,
    content: "Liên hệ",
    isHover: false,
  }
]

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
